package com.sprint.models.domain;

public class GoodsChangeCount {
	
	private String goodsNumber;
	private int goodsCount;

	public void setGoodsNumber(String goodsNumber) {
		this.goodsNumber = goodsNumber;
	}

	public void setGoodsCount(int goodsCount) {
		this.goodsCount = goodsCount;
	}

	public String getGoodsNumber() {
		return goodsNumber;
	}

	public int getGoodsCount() {
		return goodsCount;
	}
}
