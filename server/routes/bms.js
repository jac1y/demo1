var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const sd = require('silly-datetime');
//express + express-generator 
var connection = require('../db/sql.js')
var multer = require('../utils/multer.js')

router.post('/upImg', multer.single('imgFile'), async (req, res) => {
    let file = req.file;
    // 验证 Token
    let secret = 'ILOVEMONEY';
    let token = req.query.token;
    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            res.json({
                status: 404,
                msg: '请重新登录'
            })
        }
        else {
            if (file) {
                const timestamp = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
                var sql = "INSERT INTO photolist(photoType, url, time, name) VALUES(" + "'" + req.query.type.trim() + "'" + "," + "'" + '/images/' + req.query.type.trim() + "/" + file.filename + "'" + "," + "'" + timestamp + "'" + "," + "'" + file.filename + "'" + ")";
                connection.query(sql, function (error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                });
            } else {
                res.json({
                    status: -1,
                    msg: '上传失败'
                })
            }
        }
    });
})
router.get('/validate', function (req, res, next) {
    let secret = 'ILOVEMONEY';
    let token = req.query.token;
    console.log("token", token);
    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            res.json({
                status: 404,
                msg: '请重新登录'
            })
        }
        else {
            res.json({
                status: 200,
                msg: '用户已登录'
            })
        }
    });
});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('发个顺丰大概发生的');
});
router.post('/test', (req, res, next) => {
    let name = req.body.user.name;
    let password = req.body.user.pw;
    var sql = "SELECT id,username,role,token from sys_user where username=" + "'" + name + "'" + " and password=" + "'" + password + "'";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        if (results.length != 0) {
            let secret = 'ILOVEMONEY';
            let timestamp = Date.now();
            let token = jwt.sign({ name, timestamp }, secret, { expiresIn: '24h' });
            res.send({ token, results });
        }
        else {
            res.send("false");
        }
    });
});
router.post('/addLogs', (req, res, next) => {
    let name = req.body.logs.username;
    let operation = req.body.logs.operation;
    let details = req.body.logs.details;
    let data = req.body.logs.data;

    var sql = "INSERT INTO sys_logs(username, operation, details, data) VALUES" +
        "(" + "'" + name + "'" + "," + "'" + operation + "'" + "," + "'" + details + "'" + "," + "'" + data + "'" + ")";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);

    });
});
router.post('/getUser', (req, res, next) => {
    let data = req.body.user.MLevel;
    var sql = "select uid,name,count,createTime,MLevel from user where MLevel=" + "'" + data + "'";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);

    });
});
router.post('/getRole', (req, res, next) => {
    let data = req.body.sys.role;
    console.log(data);
    var sql = "select username,role,token,state from sys_user where role=" + "'" + data + "'";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);

    });
});
router.get("/getLogs", function (req, res, next) {
    var sql = 'SELECT * from sys_logs';
    connection.query(sql, function (error, results, fields) {
        if (error) {
            throw error
        }
        else {
            res.send(results)
        }
    });

});
router.get("/clearLogs", function (req, res, next) {
    var sql = 'DELETE FROM sys_logs';
    connection.query(sql, function (error, results, fields) {
        if (error) {
            throw error
        }
        else {
            res.send(results)
        }
    });

});
router.get("/toSql", function (req, res, next) {
    var sql = 'SELECT * from sys_user';
    connection.query(sql, function (error, results, fields) {
        if (error) {
            throw error
        }
        else {
            res.send(results)
        }
    });

});
router.get("/getPhoto", (req, res, next) => {
    let data = req.query.name;
    var sql = "select * from photoList where photoType=" + "'" + data + "'";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        // res.sendFile(path.resolve(__dirname,""));
    });
});
router.get("/removePhoto", (req, res, next) => {
    let data = req.query.id;
    var sql = "DELETE from photoList where id=" + "'" + data + "'";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// app.get('/getVideoUrl', (req, res) => {
//     const videoUrl = 'http://localhost:3000/public/video/ys2.mp4' // 从服务器中获取视频链接地址
//     res.send(videoUrl)
// })

module.exports = router; 
