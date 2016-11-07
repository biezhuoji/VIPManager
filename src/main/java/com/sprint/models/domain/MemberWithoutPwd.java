package com.sprint.models.domain;

import java.util.Date;
public class MemberWithoutPwd {
	private int id;
	private Date createTime;
	private Date updateTime;
	private String cardNumber;
	private String memberRank;
	private String memberName;
	private String memberPhone;
	private int status;
	private double money;

	public void setId(int id) {
		this.id = id;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;	
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public void setMemeberRank(String memberRank) {
		this.memberRank = memberRank;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public void setMemberPhone(String memberPhone) {
		this.memberPhone = memberPhone;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public void setMoney(double money) {
		this.money = money;
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

	public String getCardNumber() {
		return cardNumber;
	} 

	public String getMemberRank() {
		return memberRank;
	}

	public String getMemberPhone() {
		return memberPhone;
	}

	public String getMemberName() {
		return memberName;
	}

	public int getStatus() {
		return status;
	}

	public double getMoney() {
		return money;
	}	
}
