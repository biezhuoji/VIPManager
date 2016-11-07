package com.sprint.ctrls;

import org.springframework.web.bind.annotation.*;
import com.sprint.common.Result;
import com.sprint.services.GoodsService;
import com.sprint.models.domain.Goods;
import org.springframework.beans.factory.annotation.*;
@RestController
public class GoodsCtrl { 
	
	@Autowired
	private GoodsService goodsService;

	@RequestMapping(value="/goods", method=RequestMethod.POST)
	public Result createGoods(@RequestBody Goods goods) {
		Result result = new Result();
		try {
			if (goodsService.findByGoodsNumber(goods.getGoodsNumber()) == null) {
				goodsService.createGoods(goods);
				result.setResult(goodsService.findByGoodsNumber(goods.getGoodsNumber()));
			} else {
				result.setStatus(5, "此商品已存在");
			}
		} catch (NullPointerException e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		} catch (Exception e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		}
		return result;
	}
	
	@RequestMapping(value="/goods/{id}", method=RequestMethod.DELETE)
	public Result deleteGoods(@PathVariable int id) {
		Result result = new Result();
		try {
			goodsService.deleteGoods(id);
		} catch (NullPointerException e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		} catch (Exception e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		}
		return result;	
	}
	@RequestMapping(value="/goods/{id}", method=RequestMethod.PUT)
	public Result udpateGoods(@PathVariable int id, @RequestBody Goods goods) {
		Result result = new Result();
		try {
			goods.setId(id);
			if(goods.getId() != -1) {
				goodsService.updateGoods(goods);
				result.setResult(goodsService.findByGoodsNumber(goods.getGoodsNumber()));
			} else
				result.setStatus(0, "Action compiled failed");
		} catch (NullPointerException e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		} catch (Exception e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		}
		
		return result;
	}

	@RequestMapping(value="/goods", method=RequestMethod.GET)
	public Result findGoods(String key) {
		Result result = new Result();
		try {
			if(key != null && !key.equals(""))
				result.setResult(goodsService.findLikeGoodsName(key));
			else
				result.setResult(goodsService.findGoods());
		} catch (NullPointerException e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		} catch (Exception e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		}
		return result;
	}

/*	@RequestMapping(value="/goods/{goodsNumber}", method=RequestMethod.GET)
	public Result findByGoodsNumber(@PathVariable String goodsNumber) {
		Result result = new Result();
		try {
			result.setResult(goodsService.findByGoodsNumber(goodsNumber));
		} catch (NullPointerException e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		} catch (Exception e) {
			result.setStatus(0, "Action compiled failed");
			e.printStackTrace();
		}
		return result;
	}*/
}
