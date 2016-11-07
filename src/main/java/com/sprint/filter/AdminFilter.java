/*package com.sprint.filter;

import javax.servlet.Filter;
import javax.servlet.annotation.WebFilter;
import org.springframework.stereotype.Component;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.session.data.redis.RedisOperationsSessionRepository.*;
@WebFilter(filterName="adminFilter", urlPatterns={"/*"})
@Component
public class AdminFilter implements Filter{
	
	@Override
	public void init(FilterConfig args) throws ServletException {}
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
		System.out.println("-------admin过滤器----");
		
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse res = (HttpServletResponse)response;
		String url = req.getRequestURI();
		HttpSession session = req.getSession();
			
		if (url.indexOf("login") != -1 || url.indexOf("jpg") != -1 || url.indexOf("js") !=-1 || url.indexOf("lib") != -1 || url.indexOf("style") != -1) {
			filterChain.doFilter(req, res);
		} 
		else {
			System.out.println(session.getAttribute("admin"));
			if (session.getAttribute("admin") != null) {
				filterChain.doFilter(req, res);
			} else {
				System.out.println("权限不够");
			}
			
		}	
	}
	@Override
	public void destroy() {
	
	}
}
*/
