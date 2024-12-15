var express = require('express');
var router = express.Router();
const { feUpdateService, feGetInfoService, loginService, fcGetInfoService, fcUpdateService } = require('./service/feService');

//登录的路由
router.post('/login', async (req, res, next) => {
  const result = await loginService(req.body)
  if (result) {
    res.send('1')
  } else {
    res.send('0')
  }
})


//获取fe数据的路由 fe是电耗碳排放因子
router.post('/fegetInfo', async function (req, res, next) {
  const result = await feGetInfoService()
  res.send(result)
})
//更新fe数据的路由 
router.post('/feupdate', async function (req, res, next) {
  const result = await feUpdateService(req.body)
  if (result) {
    res.send('1')
  } else {
    res.send('0')
  }
});


//获取fc数据的路由 fc是化学药剂排放因子
router.post('/fcgetInfo', async function (req, res, next) {
  const result = await fcGetInfoService()
  res.send(result)
})

//更新fc的路由
router.post('/fcupdate', async function (req, res, next) {
  const result = await fcUpdateService(req.body)
  if (result) {
    res.send('1')
  } else {
    res.send('0')
  }
})



module.exports = router;