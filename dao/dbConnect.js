const { Sequelize } = require('sequelize');//使用sequelize库来创建一个新的sequelize实例
const sequelizeConnection = new Sequelize(
    'environment',
    'root',
    'yx1shxr.',
    {//分别是数据库名称，数据库用户名，数据库密码
        host: 'localhost',//数据库服务器的主机地址
        dialect: 'mysql',//使用指定的数据库类型
        logging: false//禁用日志记录
    })
module.exports = sequelizeConnection