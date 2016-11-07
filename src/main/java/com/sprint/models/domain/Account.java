package com.sprint.models.domain;

public class Account {
	private String adminAccount;
	private String adminPassword;

	public void setAdminAccount(String adminAccount) {
		this.adminAccount = adminAccount;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getAdminAccount() {
		return adminAccount;
	}

	public String getAdminPassword() {
		return adminPassword;
	}
}
