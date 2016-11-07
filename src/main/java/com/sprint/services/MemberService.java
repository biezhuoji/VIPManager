package com.sprint.services;

import java.util.List;
import org.springframework.stereotype.*;
import org.springframework.beans.factory.annotation.*;
import com.sprint.models.domain.Member;
import com.sprint.models.dao.MemberDao;
import com.sprint.models.domain.MemberWithoutPwd;
import com.sprint.models.domain.MoneyIn;
import com.sprint.models.domain.MemberUpdateStatus;
import com.sprint.models.domain.MemberUpdatePwd;
@Service
public class MemberService {
	
	@Autowired
	private MemberDao memberDao;

	public void createMember(Member member) {
		memberDao.createMember(member);
	}

	public MemberWithoutPwd findByCardNumber(String cardNumber) {
		return memberDao.findByCardNumber(cardNumber);
	}

	public void deleteMember(int id) {
		memberDao.deleteMember(id);
	}

	public void updateMember(Member member) {
		memberDao.updateMember(member);
	}

	public List<MemberWithoutPwd> findByKey(String key) {
		return memberDao.findByKey(key);
	}

	public List<MemberWithoutPwd> findAll() {
		return memberDao.findAll();
	}

	public void updateMoneyIn(MoneyIn moneyIn) {
		memberDao.updateMoneyIn(moneyIn);
	}

	public void updateMoneyOut(MoneyIn moneyOut) {
		memberDao.updateMoneyOut(moneyOut);
	}
	
	public void updateStatus(MemberUpdateStatus memberUpdateStatus) {
		memberDao.updateStatus(memberUpdateStatus);	
	}
	
	public void updatePassword(MemberUpdatePwd memberUpdatePwd) {
		memberDao.updatePassword(memberUpdatePwd);
	}

	public MemberWithoutPwd findByAccount(Member member) {
		return memberDao.findByAccount(member);
	}
}
