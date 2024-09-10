//用来对数据库进行一个初始化操作
const sequelizeConnection = require('./dbConnect')
// const feModel = require('./model/feModel')//数据模型

// console.log('进入到了db.js');

async function SyncDb() {
    await sequelizeConnection.sync({//这是一个与数据库同步模型的命令
        alter: true//同步过程中允许对现有的表结构进行修改
    });
    // console.log(feModel, 'feModel');
    // const feCount = await feModel.count()
    // console.log(feCount, 'feCount');
    // if (!feCount) {
    //     await feModel.create({
    //         huabei: 0.9419,
    //         dongbei: 1.0862,
    //         huadong: 0.7921,
    //         huazhong: 0.8587,
    //         xibei: 0.8922,
    //         nanfang: 0.8042
    //     })
    // }
    console.log('初始化数据完毕');
}
SyncDb()