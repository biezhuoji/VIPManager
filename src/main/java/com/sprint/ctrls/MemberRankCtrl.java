package com.sprint.ctrls;

import org.springframework.web.bind.annotation.*;
import com.sprint.services.MemberRankService;
import com.sprint.common.Result;
import com.sprint.models.domain.MemberRank;
import org.springframework.beans.factory.annotation.*;
import javax.validation.Valid;
@RestController
public class MemberRankCtrl {
	
	@Autowired
	private MemberRankService memberRankService;

	@RequestMapping(value="/memberRank/{id}", method=RequestMethod.PUT)
	public Result updateMemberRank(@PathVariable int id, @Valid @RequestBody MemberRank memberRank) {
		Result result = new Result();
		memberRankService.updateMemberRank(memberRank);
		if(memberRankService.findById(id) != null)
			result.setResult(memberRankService.findById(id));
		else 
			result.setStatus(0, "更新失败");
		return result;
	}

	@RequestMapping(value="/memberRank/{id}", method=RequestMethod.GET)
	public Result findById(@PathVariable int id) {
		Result result = new Result();
		result.setResult(memberRankService.findById(id));
		return result;
	}

	@RequestMapping(value="/memberRank", method=RequestMethod.GET)
	public Result findAll() {
		Result result = new Result();
		result.setResult(memberRankService.findAll());
		return result;
	}
	
	@RequestMapping(value="/memberRank/discount", method=RequestMethod.GET)
	public Result findByMemberRank(String memberRank) {
		Result result = new Result();
		if (memberRank != null && memberRank.equals("") == false) {
			if (memberRankService.findByMemberRank(memberRank) != null) {
				result.setResult(memberRankService.findByMemberRank(memberRank));
			} else {
				result.setStatus(5,"查询失败，该类型不存在！");
			}
		} else {
			result.setStatus(0, "查询失败，参数为空！");
		}
		return result;
	}
}
