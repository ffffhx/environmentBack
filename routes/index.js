var express = require('express');
var router = express.Router();
const { feUpdateService, feGetInfoService, loginService, fcGetInfoService, fcUpdateService } = require('../service/feService');
/* GET home page. */
//更新信息的路由
router.post('/update', async function (req, res, next) {
  console.log('进入了表现层');
  console.log('req.body为', req.body);
  // console.log('12312321');
  // const result = feUpdateService(req.body);  //这行代码会执行一次feUpdateService(req.body)
  // res.send(result);
  const result = await feUpdateService(req.body)
  if (result) {
    console.log('result', result);
    res.send('1')
  } else {
    res.send('0')
  }
});
//获取信息的路由
router.post('/getInfo', async function (req, res, next) {
  const result = await feGetInfoService()
  console.log('result', result);
  res.send(result)
  // console.log('进入了表现层');
  // console.log('req.body为', req.body);
  // res.send('getInfo')
})
router.post('/fcupdate', async function (req, res, next) {
  const result = await feUpdateService(req.body)
  if (result) {
    console.log('result', result);
    res.send('1')
  } else {
    res.send('0')
  }
})

router.post('/fcgetInfo', async function (req, res, next) {
  const result = await fcGetInfoService()
  console.log('result', result);
  res.send(result)
  // console.log('进入了表现层');
  // console.log('req.body为', req.body);
  // res.send('getInfo')
})
//登录的路由
router.post('/login', async (req, res, next) => {
  const result = await loginService(req.body)
  if (result) {
    res.send('1')
  } else {
    res.send('0')
  }
})

module.exports = router;