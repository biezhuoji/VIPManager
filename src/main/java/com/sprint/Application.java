package com.sprint;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.apache.log4j.Logger;
import org.springframework.context.annotation.Configuration; 
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
@SpringBootApplication
@EnableRedisHttpSession
public class Application {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }

}
