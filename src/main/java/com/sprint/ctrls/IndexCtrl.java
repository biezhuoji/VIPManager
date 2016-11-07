package com.sprint.ctrls;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sprint.common.Result;
import com.sprint.models.domain.Account;
import com.sprint.models.domain.AdminWithoutPwd;
import com.sprint.common.EncodePassword;
import org.springframework.beans.factory.annotation.*;
import com.sprint.services.AdminService;
import javax.servlet.http.HttpSession;
@Controller
public class IndexCtrl {
	
	@RequestMapping("/manage")
	public String manageIndex(HttpServletRequest request) {
		System.out.println(request.getSession().getAttribute("admin"));
		return "manage";
	}

	@RequestMapping("/manage/**")
	public String manage() {
		return "manage";
	}
	
	@RequestMapping("/member")
	public String memberIndex(HttpServletRequest request) {
		System.out.println(request.getSession().getAttribute("admin"));
		return "manage";
	}

	@RequestMapping("/member/**")
	public String member() {
		return "manage";
	}

	@RequestMapping("/goods")
	public String goodsIndex(HttpServletRequest request) {
		System.out.println(request.getSession().getAttribute("admin"));
		return "manage";
	}

	@RequestMapping("/goods/**")
	public String goods() {
		return "manage";
	}

	@RequestMapping("/consume")
	public String consumeIndex(HttpServletRequest request) {
		System.out.println(request.getSession().getAttribute("admin"));
		return "manage";
	}

	@RequestMapping("/consume/**")
	public String consume() {
		return "manage";
	}

	@RequestMapping("/money")
	public String moneyIndex(HttpServletRequest request) {
		System.out.println(request.getSession().getAttribute("admin"));
		return "manage";
	}

	@RequestMapping("/money/**")
	public String money() {
		return "manage";
	}

	@RequestMapping("/login")
	public String login() {
		return "login";
	}

	@RequestMapping("/quit")
	@ResponseBody
	public String quit(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.removeAttribute("admin");	
		return "login";
	}

}
