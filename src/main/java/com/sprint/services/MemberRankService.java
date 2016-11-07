package com.sprint.services;

import java.util.*;
import org.springframework.stereotype.*;
import com.sprint.models.domain.MemberRank;
import com.sprint.models.dao.MemberRankDao;
import org.springframework.beans.factory.annotation.*;
@Service
public class MemberRankService {
	
	@Autowired
	private MemberRankDao memberRankDao;

	public void updateMemberRank(MemberRank memberRank) {
		System.out.println(memberRank.getDiscount());
		memberRankDao.updateMemberRank(memberRank);
	}

	public MemberRank findById(int id) {
		return memberRankDao.findById(id);
	}

	public List<MemberRank> findAll() {
		return memberRankDao.findAll();
	}

	public MemberRank findByMemberRank(String memberRank) {
		return memberRankDao.findByMemberRank(memberRank);
	}
}
