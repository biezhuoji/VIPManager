package com.sprint.services;

import com.sprint.models.domain.GoodsChangeCount;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import com.sprint.models.domain.Goods;
import org.springframework.beans.factory.annotation.*;
import com.sprint.models.dao.GoodsDao;
import java.util.List;
@Service
public class GoodsService {
	
	@Autowired
	private GoodsDao goodsDao;

	public void createGoods(Goods goods) {
		goodsDao.createGoods(goods);
	}

	public void deleteGoods(int id) {
		goodsDao.deleteGoods(id);
	}

	public void updateGoods(Goods goods) {
		goodsDao.updateGoods(goods);
	}

	public List<Goods> findGoods() {
		return goodsDao.findGoods();
	}

	public List<Goods> findLikeGoodsName(String key) {
		String newKey = "%" + key + "%";
		return goodsDao.findLikeGoodsName(newKey);
	}

	public Goods findByGoodsNumber(String goodsNumber) {
		return goodsDao.findByGoodsNumber(goodsNumber);
	}

	public void updateGoodsCount(GoodsChangeCount gcc) {
		goodsDao.updateGoodsCount(gcc);	
	}
} 
