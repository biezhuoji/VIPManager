package com.sprint.models.domain;

public class MemberUpdatePwd {
	private String cardNumber;
	private String oldMemberPassword;
	private String newMemberPassword;

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public void setOldMemberPassword(String oldMemberPassword) {
		this.oldMemberPassword = oldMemberPassword;
	} 
	
	public void setNewMemberPassword(String newMemberPassword) {
		this.newMemberPassword = newMemberPassword;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public String getOldMemberPassword() {
		return oldMemberPassword;
	}

	public String getNewMemberPassword() {
		return newMemberPassword;
	}
}
