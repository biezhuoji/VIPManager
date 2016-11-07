package com.sprint.models.dao;

import java.util.List;
import com.sprint.models.domain.Member;
import com.sprint.models.domain.MemberWithoutPwd;
import com.sprint.models.domain.MoneyIn;
import com.sprint.models.domain.MemberUpdateStatus;
import com.sprint.models.domain.MemberUpdatePwd;
public interface MemberDao {
	void createMember(Member member);
	MemberWithoutPwd findByCardNumber(String cardNumber);
	void deleteMember(int id);
	void updateMember(Member member);
	List<MemberWithoutPwd> findByKey(String key);
	List<MemberWithoutPwd> findAll();
	void updateMoneyIn(MoneyIn moneyIn);
	void updateMoneyOut(MoneyIn moneyOut);
	void updateStatus(MemberUpdateStatus memberUpdateStatus);
	void updatePassword(MemberUpdatePwd memberUpdatePwd);
	MemberWithoutPwd findByAccount(Member member);
}
