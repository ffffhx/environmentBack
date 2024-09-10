// 化学药剂种类及其 CO2排放因子
// sequelize这个框架让我在具体操作的时候不必去和复杂的sql语句打交道，只需要像操作平常对象一样操作就可以了
const { DataTypes } = require('sequelize');
const sequelizeConnection = require("../dbConnect.js");
console.log('进入到了adminModel');

// 创建一个表
module.exports = sequelizeConnection.define('fcmodel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,//主键
        autoIncrement: true//自增
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }
}, {
    freezeTableName: true,//禁用自动复数化表名
    createdAt: false,//禁用createdAt字段  这个字段来存放创建时间的时间戳
    updatedAt: false//禁用updateAT字段   来存放更新时间的时间戳
})