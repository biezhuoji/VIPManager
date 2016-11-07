# 增添商品

#### 接口地址
- http://localhost:3000/goods

#### HTTP请求方式：
- POST

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
goodsNumber |是 |商品编号，唯一，不可改
goodsName | 是 |商品名称
goodsPrice| 是 |商品单价
goodsCount| 是 | 商品数量
####示例：
```
{
    "goodsNumber":"20154865",
    "goodsName": "iphone7 plus",
    "goodsPrice": "6288",
    "goodsCount": "100"
}

```
应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）
- 5 此商品已存在
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 13:40:59",
    "message": "Action completed successful"
  },
  "result": {
    "id": 13,
    "createTime": 1473313259000,
    "updateTime": 1473313259000,
    "goodsNumber": "20154865",
    "goodsName": "iphone7 plus",
    "goodsPrice": 6288,
    "goodsCount": 100
  }
}
```
- 字段说明:
 - id: 商品id,标识
 - createTime: 商品创建的时间戳
 - createTime: 更新商品信息的时间戳

# 删除商品

#### 接口地址：
- http://localhost:3000/goods/goodsNumber

#### HTTP请求方式：
- DELETE

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
goodsNumber |是 |商品编号，唯一，不可改
####示例：
```
http://localhost:3000/goods/2054862
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 13:45:03",
    "message": "Action completed successful"
  },
  "result": null
}
```

# 修改商品信息

#### 接口地址：
- http://localhost:3000/goods/goodsNumber

#### HTTP请求方式：
- PUT

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
goodsNumber |是 |商品编号，唯一，不可改
goodsName | 是 |商品名称
goodsPrice| 是 |商品单价
goodsCount| 是 | 商品数量
#### 示例：
```
{
    "goodsNumber":"20154865",
    "goodsName": "iphone7s",
    "goodsPrice": "7288",
    "goodsCount": "5"
}
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 13:50:20",
    "message": "Action completed successful"
  },
  "result": {
    "id": 13,
    "createTime": 1473313259000,
    "updateTime": 1473313820000,
    "goodsNumber": "20154865",
    "goodsName": "iphone7s",
    "goodsPrice": 7288,
    "goodsCount": 5
  }
}
```
- 字段说明:
 - id: 商品id,标识
 - createTime: 商品创建的时间戳
 - createTime: 更新商品信息的时间戳

# 按商品编号精确查询
#### 接口地址：
- http://localhost:3000/goods/goodsNumber

#### HTTP请求方式：
- GET

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
goodsNumber |是 |商品编号，唯一，不可改
####示例：
```
http://localhost:3000/goods/2054865
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 13:58:37",
    "message": "Action completed successful"
  },
  "result": {
    "id": 12,
    "createTime": 1473312745000,
    "updateTime": 1473312745000,
    "goodsNumber": "2054865",
    "goodsName": "iphone7",
    "goodsPrice": 5388,
    "goodsCount": 100
  }
}
```

# 查询商品信息
#### 接口地址：
- http://localhost:3000/goods

#### HTTP请求方式：
- GET

####请求参数：

参数名|是否必须|参数描述
---------|------------|------------
key |否 |对商品名称进行模糊查询

#### 示例：
```
 全查询：http://localhost:3000/goods
 模糊查询：http://localhost:3000/goods?key=phone

```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 13:53:49",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 9,
      "createTime": 1473304529000,
      "updateTime": 1473307160000,
      "goodsNumber": "shuzi",
      "goodsName": "酒",
      "goodsPrice": 159,
      "goodsCount": 13
    },
    {
      "id": 11,
      "createTime": 1473305175000,
      "updateTime": 1473305175000,
      "goodsNumber": "11596355",
      "goodsName": "矿泉水",
      "goodsPrice": 1.5,
      "goodsCount": 12
    },
    {
      "id": 12,
      "createTime": 1473312745000,
      "updateTime": 1473312745000,
      "goodsNumber": "2054865",
      "goodsName": "iphone7",
      "goodsPrice": 5388,
      "goodsCount": 100
    },
    {
      "id": 13,
      "createTime": 1473313259000,
      "updateTime": 1473313820000,
      "goodsNumber": "20154865",
      "goodsName": "iphone7s",
      "goodsPrice": 7288,
      "goodsCount": 5
    }
  ]
}
```
