package com.sprint.valids;

import com.sprint.models.domain.Member;
public class MemberValid {
	public static boolean memberValid(Member member) {
		boolean flag = true;
		if (member.getCardNumber() == null || member.getCardNumber().equals("") == true) {
			flag = false;
		}

		if (member.getMemberRank() == null || member.getMemberRank().equals("") == true) {
			flag = false;
		}

		if (member.getMemberName() == null || member.getMemberName().equals("") == true) {
			flag = false;
		}

		if (member.getMemberPhone() == null || member.getMemberPhone().equals("") == true) {
			flag = false;
		}
		
		if (member.getStatus() != 0 && member.getStatus() != 1) {
			flag = false;
		}
		return flag;
	}
}
