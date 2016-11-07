package com.sprint.services;

import org.springframework.stereotype.Service;
import com.sprint.models.dao.AdminDao;
import com.sprint.models.domain.Admin;
import com.sprint.models.domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.sprint.models.domain.AdminWithoutPwd;
@Service
public class AdminService {
	
	@Autowired
	private AdminDao adminDao;

	public AdminWithoutPwd findByAdminAccount(Account account) {
		
		return adminDao.findByAdminAccount(account);
	}

	public AdminWithoutPwd findByAdminAccountNumber(String accountNumber) {
		return adminDao.findByAdminAccountNumber(accountNumber);
	}

	public void createAdmin(Admin admin) {
		adminDao.createAdmin(admin);	
	}

	public void deleteAdmin(int id) {
		adminDao.deleteAdmin(id);
	}

	public void updateAdmin(Admin admin) {
		adminDao.updateAdmin(admin);	
	}

	public List<AdminWithoutPwd> findAdmin() {
		return adminDao.findAdmin();
	}

	public List<AdminWithoutPwd> findAdminByKey(String key) {
		String keys = "%" + key + "%";
		return adminDao.findAdminByKey(keys);
	}

	public AdminWithoutPwd findByAdminId(int id) {
		return adminDao.findByAdminId(id);
	}
}
