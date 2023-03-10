var user = require ('../Controllers/userController');
var auth = require ('../Modules/auth');
var multer = require ('multer');
var md5 = require ('md5');
var express = require  ('express')
var path = require ('path');

exports.getRouter = (app) => {

    let storage = multer.diskStorage({
        destination: function(req, file, callback) {
            console.log("multer")
            console.log(file)
            callback(null, './src/Upload/User');
        },
        filename: function(req, file, callback) {
            let fileUniqueName = md5(Date.now());
            callback(null, fileUniqueName + path.extname(file.originalname));
        }
    });
    let upload = multer({ storage: storage });
    app.route("/user/addImage").post(upload.any(), user.addImage);
    app.route("/user/getSocialData").post(user.getSocialData);
    
    app.route("/user/addTripImage").post(upload.any(), user.addTripImage);
    app.route("/user/getTripData").post(user.getTripData);
    app.route("/user/incrementView").post(user.incrementView);

}