package com.sprint.models.domain;

public class MoneyMove {
	private String cardNumberIn;
	private String cardNumberOut;
	private double money;

	public void setCardNumberIn(String cardNumberIn) {
		this.cardNumberIn = cardNumberIn;
	}

	public void setCardNumberOut(String cardNumberOut) {
		this.cardNumberOut = cardNumberOut;
	}

	public void setMoney(double money) {
		this.money = money;
	}

	public String getCardNumberIn() {
		return cardNumberIn;
	}

	public String getCardNumberOut() {
		return cardNumberOut;
	}

	public double getMoney() {
		return money;
	}
}
