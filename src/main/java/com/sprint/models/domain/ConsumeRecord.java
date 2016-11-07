package com.sprint.models.domain;

import java.util.Date;
public class ConsumeRecord {
	private int id;
	private Date createTime;
	private Date updateTime;
	private String cardNumber;
	private String goodsName;
	private double goodsPrice;
	private String goodsNumber;
	private int goodsCount;
	private String orderNumber;
	private int status;
	private double consumeMoney;
	private String memberName;
	private String memberRank;

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public String getMemberName() {
		return memberName;
	}

	public void setMemberRank(String memberRank) {
		this.memberRank = memberRank;
	}

	public String getMemberRank() {
		return memberRank;
	}

	public void setConsumeMoney(double consumeMoney) {
		this.consumeMoney = consumeMoney;
	} 

	public double getConsumeMoney() {
		return consumeMoney;
	}

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

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public void setGoodsPrice(double goodsPrice) {
		this.goodsPrice = goodsPrice;
	}

	public void setGoodsCount(int goodsCount) {
		this.goodsCount = goodsCount;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public void setStatus(int status) {
		this.status = status;
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

	public String getGoodsName() {
		return goodsName;
	}

	public double getGoodsPrice() {
		return goodsPrice;
	}
	
	public String getOrderNumber() {
		return orderNumber;
	}

	public int getStatus() {
		return status;
	}
	
	public int getGoodsCount() {
		return goodsCount;
	}

	public void setGoodsNumber(String goodsNumber) {
		this.goodsNumber = goodsNumber;
	}
	
	public String getGoodsNumber() {
		return goodsNumber;
	}

}
