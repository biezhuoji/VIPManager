package com.sprint.ctrls;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.*;
import com.sprint.services.MemberService;
import com.sprint.common.Result;
import com.sprint.models.domain.MoneyIn;
import com.sprint.models.domain.MoneyMove;
import com.sprint.models.domain.MemberWithoutPwd;
import java.util.*;
import javax.validation.Valid;
@RestController
public class MoneyCtrl {
	
	@Autowired
	private MemberService memberService;

	@RequestMapping(value="/moneyIn", method=RequestMethod.PUT)
	public Result updateMoneyIn(@RequestBody MoneyIn moneyIn) {
		Result result = new Result();
		
		if (memberService.findByCardNumber(moneyIn.getCardNumber()) != null) {
			memberService.updateMoneyIn(moneyIn);
			result.setResult(memberService.findByCardNumber(moneyIn.getCardNumber())); 
		} else {
			result.setStatus(5, "卡号不存在");
		}
		return result;
	}

	@RequestMapping(value="/moneyMove", method=RequestMethod.PUT)
	public Result updateMoneyMove(@RequestBody MoneyMove moneyMove) {
		Result result = new Result();
		
		if (memberService.findByCardNumber(moneyMove.getCardNumberIn()) != null && memberService.findByCardNumber(moneyMove.getCardNumberOut()) != null) {
			MoneyIn moneyIn = new MoneyIn();
			moneyIn.setCardNumber(moneyMove.getCardNumberIn());
			moneyIn.setMoney(moneyMove.getMoney());
			memberService.updateMoneyIn(moneyIn);
		
			MoneyIn moneyOut = new MoneyIn();
			moneyOut.setCardNumber(moneyMove.getCardNumberOut());
			moneyOut.setMoney(moneyMove.getMoney());
			memberService.updateMoneyOut(moneyOut);

			List<MemberWithoutPwd> list = new ArrayList<MemberWithoutPwd>();
			list.add(memberService.findByCardNumber(moneyMove.getCardNumberIn()));
			list.add(memberService.findByCardNumber(moneyMove.getCardNumberOut()));
			result.setResult(list); 
		} else {
			result.setStatus(5, "卡号不存在");
		}
		return result;
	}

	@RequestMapping(value="/moneyOut", method=RequestMethod.PUT)
	public Result updateMoneyOut(@RequestBody MoneyIn moneyOut) {
		Result result = new Result();
		memberService.updateMoneyOut(moneyOut);
		result.setResult(memberService.findByCardNumber(moneyOut.getCardNumber()));
		return result;
	}

}
