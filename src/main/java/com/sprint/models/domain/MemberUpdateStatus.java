package com.sprint.models.domain;

public class MemberUpdateStatus {
	private String cardNumber;
	private int status;

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public int getStatus() {
		return status;
	}
}
