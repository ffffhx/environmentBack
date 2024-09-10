//负责和数据库打交道，  数据库的增删改查
const feModel = require('./model/feModel')//引入模型
const adminModel = require('./model/adminModel')
const fcModel = require('./model/fcModel')
console.log('进入到了dbDao，这是用来操作数据库的文件');

module.exports.feUpdateDao = async function (updateInfo) {
    try {
        // 执行更新操作并等待结果
        const result = await feModel.update(
            {
                content: updateInfo.content
            },
            {
                where: {
                    id: updateInfo.id, // 这里的条件应该匹配你想要更新的记录
                }
            }
        )
        console.log('异步result', result);

        // 检查更新结果
        if (result == 0) {
            console.log('修改失败');
            return false;
        } else {
            console.log('修改成功result2323', result);
            return true;
        }
    } catch (err) {
        console.error(err, '出现了问题');
        return false;
    }
};
module.exports.feGetInfoDao = async function () {
    try {
        const result = await feModel.findAll();
        console.log('asdfasdfsdafsdafasd', result);
        return result;
    } catch (err) {
        console.error(err, '出现了问题');
        return false;
    }
}
module.exports.loginDao = async function (loginInfo) {
    try {
        const result = await adminModel.findOne({
            where: {
                userId: loginInfo.userId,
                password: loginInfo.password
            }
        })
        // const result = await adminModel.findOne({
        //     where: {
        //         userId: '123'
        //     }
        // })
        console.log(loginInfo.userId, loginInfo.password);
        console.log('loginInfo.userId, loginInfo.password');
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(err, '出现了问题');
        return false;
    }
}
module.exports.fcGetInfoDao = async function () {
    try {
        const result = await fcModel.findAll();
        console.log('result', result);
        return result;
    } catch (err) {
        console.error(err, '出现了问题');
        return false;
    }
}
module.exports.fcUpdateDao = async function (updateInfo) {
    try {
        // 执行更新操作并等待结果
        const result = await fcModel.update(
            {
                content: updateInfo.content
            },
            {
                where: {
                    id: updateInfo.id, // 这里的条件应该匹配你想要更新的记录
                }
            }
        )
        console.log('异步result', result);
        // 检查更新结果
        if (result == 0) {
            console.log('修改失败');
            return false;
        } else {
            console.log('修改成功result2323', result);
            return true;
        }
    } catch (err) {
        console.error(err, '出现了问题');
        return false;
    }
}