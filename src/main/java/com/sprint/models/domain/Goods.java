package com.sprint.models.domain;

import java.util.Date;
public class Goods {
	private int id;
	private Date createTime;
	private Date updateTime;
	private String goodsNumber;
	private String goodsName;
	private double goodsPrice;

	public void setId(int id) {
		this.id = id;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	private int goodsCount;

	public void setGoodsNumber(String goodsNumber) {
		this.goodsNumber = goodsNumber;
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

	public String getGoodsNumber() {
		return goodsNumber;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public double getGoodsPrice() {
		return goodsPrice;
	}

	public int getGoodsCount() {
		return goodsCount;
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
}
