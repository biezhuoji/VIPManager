package com.sprint.models.dao;

import com.sprint.models.domain.Goods;
import com.sprint.models.domain.GoodsChangeCount;
import java.util.List;
public interface GoodsDao {
	void createGoods(Goods goods);
	void deleteGoods(int id);
	void updateGoods(Goods goods);
	List<Goods> findGoods();
	List<Goods> findLikeGoodsName(String key);
	Goods findByGoodsNumber(String goodsNumber);
	void updateGoodsCount(GoodsChangeCount gcc);
}
