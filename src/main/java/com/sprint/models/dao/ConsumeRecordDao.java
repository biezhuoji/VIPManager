package com.sprint.models.dao;

import java.util.List;
import com.sprint.models.domain.ConsumeRecord;
public interface ConsumeRecordDao {
	void createConsumeRecord(ConsumeRecord consumeRecord);
	ConsumeRecord findByOrderNumber(String orderNumber);
	void deleteConsumeRecord(int id);
	void updateConsumeRecord(ConsumeRecord consumeRecord);
	List<ConsumeRecord> findByCardNumber(String cardNumber);
	List<ConsumeRecord> findByCardNumber1(String cardNumber);
	List<ConsumeRecord> findAll();
	List<ConsumeRecord> findAll1();
	void updateStatus(ConsumeRecord consumeRecord);
}
