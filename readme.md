
# SpringBoot整合Mybatis脚手架。

### 运行环境：
- JDK 1.8 or later
- Gradle 2.3+

### 开发者使用说明
1. 进入项目根目录
2. 安装项目依赖，运行`gradle build -t`
3. 启动服务 `gradle bootRun`

### 静态文件服务说明
在/src/main/resources/static目录下自由放置静态文件，放置的文件目录跟url对应。

####举例
- 放置的文件为main.html,那么访问路径为：http://localhost:3000/main.html
- 放置的文件为js/app.js,那么访问路径为： http://localhost:3000/js/app.js


## 管理员登录模块
```
管理员登录（管理员也是会员）
    管理员分为:
    系统管理员: 修改用户名重置密码，删除用户，管理管理员，
    普通管理员: 增添会员，查看会员列表，挂失（冻结）。
    管理员字段: 账号，密码。姓名，手机号。
----------------------------------------管理员登录--------------------------------------
    请求参数：adminAccount       adminPassword
    API: /admin/login    GET
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": null
              }
```
## 系统管理员模块
### 管理员管理
- 增加管理员

```
    增加管理员
    请求参数：adminAccount(账号)，adminPassword (密码) adminName(姓名)，adminPhone(手机号)。
    API: /admin    POST
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息
              }
```

- 查询管理员

```
	查询管理员
    请求参数： key(以姓名模糊查询，后期再改)
    API: /admin      GET  (如果带参，模糊查询，无参，全部)
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息
              }
```
 
- 删除管理员

```

	删除管理员
    请求参数：adminAccount(账号)
    API:/admin          DELETE
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": null
              }
    
```
   
- 修改管理员

```
	修改管理员：改个手机号，重置密码（重置为初始密码）
    请求参数：adminAccount(账号)，adminPassword (密码) adminName(姓名)，adminPhone(手机号)
    API:/admin          PUT  
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息 
              }
```


## 管理员模块

### 会员管理
 
- 会员登记 

```
	会员登记
    请求参数：cardNumber(卡号)， memberRank(会员等级), memberName(姓名), memberPhone(会员手机)，memberPassword(初始密码)， cardType(会员卡类型)，status（状态），money（金额）
    API: /member  POST
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息 
              }
```

- 会员列表

```
    查询会员
    请求参数： key(先以卡号模糊查询，后期再改)
    API: /member      GET  (如果带参，模糊查询，无参，全部)
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息
              }
//-------------------------------------------------------------------
    修改会员：换卡，挂失，等级设置。
    请求参数：cardNumber(卡号)， memberRank(会员等级), memberName(姓名), memberPhone(会员手机)，memberPassword(初始密码)， cardType(会员卡类型)，status（状态），money（金额）
    API:/member          PUT  
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 人员信息 
              }
```

- 会员折扣规则

```
	请求参数：cardType(卡种) discount(折扣)
    API： /card PUT
   	返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": {
                          "cardType": "铜牌会员", 
                          "discountRate": "0.8"
				 }
			}
	
	请求参数：cardType(卡种)
	API: /card GET
   	返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": {
                          "cardType": "铜牌", 
                          "discountRate": "0.8"
                  } 
              }
```

## 商品管理

- 商品录入

```
    请求参数：goodsNumber(商品号)，goodsName(商品名称)， goodsPrice(商品单价)，goodsCount（进货量）
    API: /goods  POST
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 商品信息
              }
```
- 商品列表

```
    查询
    请求参数： key(以商品名模糊查询，后期再改)
    API: /goods      GET  (如果带参，模糊查询，无参，全部)
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 商品信息
              }
    删除
    请求参数： goodsNumber(商品号)
    API: /goods/{goodsNumber}      DELETE 
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": NULL
              }

    修改
    请求参数：goodsNumber(商品号)，goodsName(商品名称)， goodsPrice(商品单价)，goodsCount（商品个数）
    API: /goods     PUT
    返回参数:{
                  "status": {
                          "code": "1", 
                          "message": "success"
                  }, 
                  "object": 商品信息
              }
```

## 储值管理
- 会员充值

```
请求参数：cardNumber(卡号)， money(金额)
API: /moneyIn    PUT
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": 商品信息
        }
```
- 余额转账

```
 1.调会员列表查询接口
 2.修改
请求参数：cardNumberIn, cardNumberOut, money
API: /moneyMove PUT
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": 两个会员的信息
        }
```
- 余额提现

```
	1.调用会员列表查询接口
	2.修改
	请求参数：cardNumber , money
	API: /moneyOut PUT
	返回参数:{
    	    "status":{ 
        	     "code": "1", 
            	 "message": "success"
                	 }, 
        	"object": 会员的信息
        	}

```

## 消费收银

- 商品消费

```
1.会员查询卡号
2.商品查询
3.结算
请求参数：cardNumber卡号，goodsName商品名，goodsPrice商品价格，goodsCount商品数量, orderNumber订单编号
API: /consumeRecord 　POST
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": 订单信息
        }
４.调用余额提现接口
```
- 消费记录：

```
请求参数： key 根据卡号拉去消费记录　　（若无参，拉去全部，有参,精确查询）
API: /consumeRecord GET
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": 订单信息,id
        }
```
- 订单列表

```
1.会员查询卡号
2.商品查询
3.结算
请求参数：cardNumber卡号，goodsName商品名，goodsPrice商品价格，goodsCount商品个数，orderNumber订单编号
API: /consumeRecord 　POST
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": 订单信息,id
        }
```
- 取消订单

```
请求参数:orderNumber订单号
API: /consumeRecord  DELETE
返回参数:{
        "status":{ 
             "code": "1", 
             "message": "success"
                 }, 
        "object": NULL
        }
```


