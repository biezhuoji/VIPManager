package com.sprint.models.domain;

import java.util.Date;
import javax.validation.constraints.*;
public class MemberRank {
	private int id;
	private Date createTime;
	private Date updateTime;
	
	@NotNull
	@Size(min=4, max=4)
	private String memberRank;
	
	@NotNull
	@DecimalMax("1.00")
	private double discount;

	public void setId(int id) {
		this.id = id;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public void setMemberRank(String memberRank) {
		this.memberRank = memberRank;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public int getId() {
		return id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public String getMemberRank() {
		return memberRank;
	}

	public double getDiscount() {
		return discount;
	}
}
