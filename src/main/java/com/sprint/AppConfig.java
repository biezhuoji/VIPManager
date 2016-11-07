package com.sprint;

import javax.servlet.Filter;
import javax.sql.DataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.filter.CharacterEncodingFilter;
import com.zaxxer.hikari.*;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@Configuration
@MapperScan("com.sprint.models.dao")
public class AppConfig {

    @Value("${datasource.url}")
    private String jdbcUrl;
    @Value("${datasource.username}")
    private String jdbcUsername;
    @Value("${datasource.password}")
    private String jdbcPassword;
    @Value("${datasource.driver-class-name}")
    private String jdbcDrive;
    @Value("${datasource.min-idle}")
    private int jdbcMinIdle;
    @Value("${datasource.pool-size}")
    private int jdbcPoolsize;
    @Value("${mybatis.mapperLocations}")
    private String mapperLocations;
    @Value("${mybatis.config}")
    private String mybatisConfig;


    @Bean(destroyMethod = "close")
    public DataSource dataSource(){
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setDriverClassName(this.jdbcDrive);
        hikariConfig.setJdbcUrl(this.jdbcUrl);
        hikariConfig.setUsername(this.jdbcUsername);
        hikariConfig.setPassword(this.jdbcPassword);
        hikariConfig.setPoolName("springHikariCP");
        hikariConfig.setAutoCommit(false);
        hikariConfig.addDataSourceProperty("cachePrepStmts", "true");
        hikariConfig.addDataSourceProperty("prepStmtCacheSize", "250");
        hikariConfig.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        hikariConfig.addDataSourceProperty("useServerPrepStmts", "true");
        hikariConfig.setMinimumIdle(this.jdbcMinIdle);
        hikariConfig.setMaximumPoolSize(this.jdbcPoolsize);
        hikariConfig.setConnectionInitSql("SELECT 1");
        HikariDataSource dataSource = new HikariDataSource(hikariConfig);
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }

    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setMapperLocations(this.getResources(this.mapperLocations));
        sessionFactory.setConfigLocation(this.getResources(this.mybatisConfig)[0]);
        return sessionFactory.getObject();
    }

   private Resource[] getResources(String locations) {
        try {
            PathMatchingResourcePatternResolver pr = new PathMatchingResourcePatternResolver();
            Resource[] res = pr.getResources(locations);
            return res;
        }catch (java.io.IOException e) {
            return null;
        }
    }
}
