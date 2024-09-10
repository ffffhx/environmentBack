const { feUpdateDao, feGetInfoDao, loginDao,fcGetInfoDao,fcUpdateDao } = require('../dao/dbDao')
module.exports.feUpdateService = (req) => {
    console.log('进入了feService');
    return feUpdateDao(req)
}
module.exports.feGetInfoService = () => {
    console.log('进入了feService');
    return feGetInfoDao()
}
module.exports.loginService = (loginInfo) => {
    console.log('进入了feService');
    return loginDao(loginInfo)
}
module.exports.fcGetInfoService = () => {
    console.log('进入了feService');
    return fcGetInfoDao()
}
module.exports.fcUpdateService = (req) => {
    console.log('进入了feService');
    return fcUpdateDao(req)
}