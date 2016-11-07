package com.sprint.models.domain;

import javax.validation.constraints.*;
public class MoneyIn {
	@NotNull
	private String cardNumber;
	@NotNull
	private double money;

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public void setMoney(double money) {
		this.money = money;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public double getMoney() {
		return money;
	}
}

