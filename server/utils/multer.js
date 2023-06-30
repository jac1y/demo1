//封装上传图片

//引进multer模块  记得在终端安装multer模块
const multer = require("multer");
const path = require('path');

//3、对上传的文件进行配置
var storage = multer.diskStorage({

    //指定文件上传到服务器的路径
    destination: function (req, file, cb) {
        cb(null, "./public/images/" + req.query.type.trim()) //上传目录
    },

    //指定上传到服务器文件的名称
    filename: function (req, file, cb) {
        // 1.获取文件后缀名
        let extname = path.extname(file.originalname);
        // 2.自定义文件名格式
        const filedname = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, filedname + extname);//文件名
        // console.log(filedname+ extname);
    }
})
const upload = multer({ storage })

//导出模块
module.exports = upload
