package com.sprint.models.dao;

import java.util.*;
import com.sprint.models.domain.MemberRank;
public interface MemberRankDao {
	void updateMemberRank(MemberRank memberRank);
	MemberRank findById(int id);
	List<MemberRank> findAll();
	MemberRank findByMemberRank(String memberRank);
}
