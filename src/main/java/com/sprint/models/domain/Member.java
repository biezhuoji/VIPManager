package com.sprint.models.domain;

import java.util.Date;
import javax.validation.constraints.*;
public class Member {
	private int id;
	private Date createTime;
	private Date updateTime;
	
	@NotNull
	private String cardNumber;
	@NotNull
	private String memberRank;
	@NotNull
	private String memberName;
	@NotNull
	private String memberPhone;
	@NotNull
	private String memberPassword;
	@NotNull
	private int status;
	@NotNull
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

	public void setMemberPassword(String memberPassword) {
		this.memberPassword = memberPassword;
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

	public String getMemberPassword() {
		return memberPassword;
	}

	public int getStatus() {
		return status;
	}

	public double getMoney() {
		return money;
	}
}

