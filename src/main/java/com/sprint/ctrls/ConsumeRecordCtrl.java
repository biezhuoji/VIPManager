package com.sprint.ctrls;

import java.util.*;
import org.springframework.web.bind.annotation.*;
import com.sprint.services.ConsumeRecordService;
import org.springframework.beans.factory.annotation.*;
import com.sprint.models.domain.ConsumeRecord;
import com.sprint.common.Result;
import com.sprint.valids.ConsumeRecordValid;
import com.sprint.services.MemberService;
import com.sprint.services.GoodsService;
@RestController
public class ConsumeRecordCtrl {

	@Autowired
	private ConsumeRecordService consumeRecordService;

	@Autowired
	private MemberService memberService;

	@Autowired
	private GoodsService goodsService;
	@RequestMapping(value="/consumeRecord", method=RequestMethod.POST)
	public Result createConsumeRecord(@RequestBody ConsumeRecord consumeRecord) {
		Result result = new Result();
		if (ConsumeRecordValid.consumeRecordValid(consumeRecord)) {
			if (memberService.findByCardNumber(consumeRecord.getCardNumber()) != null && goodsService.findByGoodsNumber(consumeRecord.getGoodsNumber()) != null) {
				if (consumeRecordService.findByOrderNumber(consumeRecord.getOrderNumber()) == null) {	
					consumeRecordService.createConsumeRecord(consumeRecord);
					result.setResult(consumeRecordService.findByOrderNumber(consumeRecord.getOrderNumber()));
				} else {
					result.setStatus(9,	"订单已存在!");
				}
			} else {
				result.setStatus(11, "会员或商品不存在!");
			}
		} else {
			result.setStatus(7, "请求参数非法");
		}
		return result;
	}

	@RequestMapping(value="/consumeRecord/{id}", method=RequestMethod.DELETE)
	public Result deleteConsumeRecord(@PathVariable int id) {
		Result result = new Result();	
		consumeRecordService.deleteConsumeRecord(id);
		return result;
	}
	
	@RequestMapping(value="/consumeRecord/{id}", method=RequestMethod.PUT)
	public Result updateConsumeRecord(@PathVariable int id, @RequestBody ConsumeRecord consumeRecord) {
		Result result = new Result();
		if (ConsumeRecordValid.consumeRecordValid(consumeRecord)) {
			if (memberService.findByCardNumber(consumeRecord.getCardNumber()) != null && goodsService.findByGoodsNumber(consumeRecord.getGoodsNumber()) != null) {
				if (consumeRecordService.findByOrderNumber(consumeRecord.getOrderNumber()) != null) {	
					consumeRecordService.updateConsumeRecord(consumeRecord);
					result.setResult(consumeRecordService.findByOrderNumber(consumeRecord.getOrderNumber()));
				} else {
					result.setStatus(9,	"订单不存在!");
				}
			} else {
				result.setStatus(11, "会员或商品不存在!");
			}	
		} else {
			result.setStatus(7, "请求参数非法");
		}
		return result;
	}
	@RequestMapping(value="/consumeRecord", method=RequestMethod.GET)
	public Result findConsumeRecord(String cardNumber) {
		Result result = new Result();
		if (cardNumber != null && cardNumber.equals("") == false) {
			result.setResult(consumeRecordService.findByCardNumber1(cardNumber));
		} else {
			result.setResult(consumeRecordService.findAll1());
		}
		return result;
	}


	@RequestMapping(value="/consumedRecord", method=RequestMethod.GET)
	public Result findOrderRecord(String cardNumber) {
		Result result = new Result();
		if (cardNumber != null && cardNumber.equals("") == false) {
			result.setResult(consumeRecordService.findByCardNumber(cardNumber));
		} else {
			result.setResult(consumeRecordService.findAll());
		}
		return result;
	}

	@RequestMapping(value="/orderSettlement", method=RequestMethod.POST)
	public Result orderSettlement(@RequestBody Map map) {
		Result result = new Result();
		String orderNumber = (String)map.get("orderNumber");
		if (orderNumber != null && orderNumber.equals("") == false) {
			consumeRecordService.orderSettlement(orderNumber);	
		}
		return result;
	}
}
