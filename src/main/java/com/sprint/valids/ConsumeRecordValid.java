package com.sprint.valids;

import com.sprint.models.domain.ConsumeRecord;
import com.sprint.services.MemberService;
import com.sprint.services.GoodsService;
import org.springframework.beans.factory.annotation.*;
import com.sprint.models.domain.ConsumeRecord;
import org.springframework.stereotype.*;
@Service
public class ConsumeRecordValid {
	public static boolean consumeRecordValid(ConsumeRecord consumeRecord) {
		boolean flag = true;
		if (consumeRecord.getCardNumber() == null || consumeRecord.getCardNumber().equals("") == true) {
			System.out.println(1);
			flag = false;
		}

		if (consumeRecord.getOrderNumber() == null || consumeRecord.getOrderNumber().equals("") == true) {
			System.out.println(3);
			flag = false;
		}

		if (consumeRecord.getGoodsNumber() ==null || consumeRecord.getGoodsNumber().equals("") == true) {
			System.out.println(4);
			flag = false;
		} 
		return flag;
	}
	
}
