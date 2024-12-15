const { feUpdateDao, feGetInfoDao, loginDao, fcGetInfoDao, fcUpdateDao } = require('../dao/dbDao')
//登录
module.exports.loginService = (loginInfo) => {
    console.log('进入了feService');
    return loginDao(loginInfo)
}

// fc获取信息服务层
module.exports.fcGetInfoService = () => {
    console.log('进入了feService');
    return fcGetInfoDao()
}

// fc更新信息服务层
module.exports.fcUpdateService = (req) => {
    console.log('进入了feService');
    return fcUpdateDao(req)
}

// fe获取信息服务层
module.exports.feGetInfoService = () => {
    console.log('进入了feService');
    return feGetInfoDao()
}

// fe更新信息服务层
module.exports.feUpdateService = (req) => {
    console.log('进入了feService');
    return feUpdateDao(req)
}


