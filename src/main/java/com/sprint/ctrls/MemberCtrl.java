package com.sprint.ctrls;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.*;
import com.sprint.models.domain.Member;
import com.sprint.services.MemberService;
import com.sprint.common.Result;
import com.sprint.common.EncodePassword;
import javax.validation.Valid;
import com.sprint.valids.MemberValid;
import com.sprint.models.domain.MemberUpdateStatus;
import com.sprint.models.domain.MemberUpdatePwd;
@RestController
public class MemberCtrl {
	
	@Autowired
	private MemberService memberService;
	@RequestMapping(value="/member", method=RequestMethod.POST)
	public Result createMember(@Valid @RequestBody Member member) {
		Result result = new Result();
		try {
			if (MemberValid.memberValid(member)) {
				member.setMemberPassword(EncodePassword.encodePassword(member.getMemberPassword()));
				if (memberService.findByCardNumber(member.getCardNumber()) == null) {
					memberService.createMember(member);
					result.setResult(memberService.findByCardNumber(member.getCardNumber()));
				} else {
					result.setStatus(6, "卡号已存在");
				}
			} else {
				result.setStatus(7, "请求参数非法！");
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("encode exception");
		}	
		return result;
	}

	@RequestMapping(value="/member/{id}", method=RequestMethod.DELETE)
	public Result deleteMember(@PathVariable int id) {
		Result result = new Result();
		memberService.deleteMember(id);
		return result;
	}
	
	@RequestMapping(value="/member/{id}", method=RequestMethod.PUT)
	public Result updateMember(@RequestBody Member member) {
		Result result = new Result();
		memberService.updateMember(member);
		try {
			if (MemberValid.memberValid(member)) {
				memberService.updateMember(member);
				result.setResult(memberService.findByCardNumber(member.getCardNumber()));
			} else {
				result.setStatus(6, "请求参数非法!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("encode exception");
		}	
		return result;
	}

	@RequestMapping(value="/member", method=RequestMethod.GET)
	public Result findMember(String key) {
		
		Result result = new Result();
		if(key != null && key.equals("") == false) {
			result.setResult(memberService.findByKey(key));
		} else {
			result.setResult(memberService.findAll());
		}
		return result;
	}

	@RequestMapping(value="/member/updateStatus", method=RequestMethod.PUT) 
	public Result updateStatus(@RequestBody MemberUpdateStatus memberUpdateStatus) {
		Result result = new Result();
		System.out.println("请求过来-----");
		if (memberService.findByCardNumber(memberUpdateStatus.getCardNumber()) != null) {
			memberService.updateStatus(memberUpdateStatus);			
		} else {
			result.setStatus(5, "卡号不存在");
		}
		return result;
	}
	

	@RequestMapping(value="/member/updatePassword", method=RequestMethod.PUT)
	public Result updatePassword(@RequestBody MemberUpdatePwd memberUpdatePwd) {
		Result result = new Result();
		Member member = new Member();
		member.setCardNumber(memberUpdatePwd.getCardNumber());
		try {
			member.setMemberPassword(EncodePassword.encodePassword(memberUpdatePwd.getOldMemberPassword()));
		
			if (memberService.findByAccount(member) != null) {
				try {
					memberUpdatePwd.setNewMemberPassword(EncodePassword.encodePassword(memberUpdatePwd.getNewMemberPassword()));
					memberService.updatePassword(memberUpdatePwd);
				} catch (Exception e) {
					System.out.println("encode exception");
					e.printStackTrace();
				}
			} else {
				result.setStatus(5, "原始密码错误!");
			}
		} catch (Exception e) {
			System.out.println("encode exception");
			e.printStackTrace();
			
		}
		return result;
	}
}
