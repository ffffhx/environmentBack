//负责和数据库打交道，  数据库的增删改查
const feModel = require('./model/feModel')//引入模型
const adminModel = require('./model/adminModel')
const fcModel = require('./model/fcModel')


//登录
module.exports.loginDao = async function (loginInfo) {
    try {
        const result = await adminModel.findOne({
            where: {
                userId: loginInfo.userId,
                password: loginInfo.password
            }
        })
        return result;
    } catch (err) {
        console.log('登录出现了问题', err);

        return false;
    }
}

// fe获取信息
module.exports.feGetInfoDao = async function () {
    try {
        const result = await feModel.findAll();
        console.log('asdfasdfsdafsdafasd', result);
        return result;
    } catch (err) {
        console.error(err, 'fe获取信息出现了问题');
        return false;
    }
}



//fe更新信息
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
        if (result == 0) {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        console.error(err, 'fe更新信息');
        return false;
    }
};



// fc获取信息
module.exports.fcGetInfoDao = async function () {
    try {
        const result = await fcModel.findAll();
        return result;
    } catch (err) {
        console.error(err, 'fc获取信息出现了问题');
        return false;
    }
}
// fc更新信息
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
        // 检查更新结果
        if (result == 0) {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        console.error(err, 'fc更新信息出现了问题');
        return false;
    }
}