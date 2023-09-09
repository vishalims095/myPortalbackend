var commFunc = require('../Modules/commonFunction');
var responses = require('../Modules/responses');
var constant = require('../Modules/constant');
var config = require('../Config/production')
const { UserModel } = require('../Models/userModel')
const { tripModel } = require('../Models/tripModel')
const { viewModel } = require('../Models/viewModel')

/*----------------------------------------------
+++++++++++++++ incrementView ++++++++++++++++
-----------------------------------------------*/

exports.incrementView = async(req, res) => {
	try {
		var count = 1
		let lastCount = await viewModel.findOne({})
		if(!lastCount) {
			let countData = new viewModel({count : 1})
			let saveCount = await countData.save()
			if(!saveCount) {
				throw new Error('Unable to save count')
			} res.vishalSuccess(saveCount, "Count saved")
		} else {
			let count = lastCount.count + 1
			let updateCount = await viewModel.findOneAndUpdate({_id : lastCount._id}, {count}, {new : true})
			if(!updateCount) {
				throw new Error('Unable to update count')
			} res.vishalSuccess(updateCount, "Count updated")
		}
	} catch(error) {
		res.status(403).vishalError(error.message)
	}
}


exports.addImage = async (req, res) => {
	try {
		let data = req.body;
		req.files.forEach(file => {
            data[file.fieldname] = `/User/${file.filename}`;
        })
        let saveData = new UserModel(data)
        let saveImg = await saveData.save()
        if(!saveImg) {
        	throw new Error('Unable to save image')
        } res.vishalSuccess(saveImg, "Image saved")
	} catch (error) {
		res.status(403).vishalError(error.message)
	}
}


/*-----------------------------------------------
++++++++++++++++ getSocialData ++++++++++++++++++
------------------------------------------------*/

exports.getSocialData = async	(req, res) => {
	try {
		let data = await UserModel.find({})
		res.vishalSuccess(data, "Social Data")
	} catch(error){
		res.status(403).vishalError(error.message)
	}
} 

/*---------------------------------------------
++++++++++++++ addTripImage +++++++++++++++++++
---------------------------------------------*/

exports.addTripImage = async (req, res) => {
	try {
		let {trip_name} = req.body
		let data = req.body;
		let arr = []
		req.files.forEach(file => {
            arr.push(`/User/${file.filename}`);
        })
        data['image'] = arr
        let saveData = new tripModel(data)
        let saveImg = await saveData.save()
        if(!saveImg) {
        	throw new Error('Unable to save image')
        } res.vishalSuccess(saveImg, "Trip Image saved")
	} catch (error) {
		res.status(403).vishalError(error.message)
	}
}


/*-----------------------------------------------
++++++++++++++++ gettripData ++++++++++++++++++
------------------------------------------------*/

exports.getTripData = async	(req, res) => {
	try {
		let data = await tripModel.find({}).sort({_id : -1})
		res.vishalSuccess(data, "Trip Data")
	} catch(error){
		res.status(403).vishalError(error.message)
	}
} 
