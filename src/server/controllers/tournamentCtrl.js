var Tournament = require('./../models/Tournament')
//post query:
var handlePost = function(req, res) {
	console.log(req.body);
    new Tournament(req.body).save(function(error, response) {
        console.log("response", response);
        console.log("error", error);
        if(error) {
            res.status(500).json(error)
        } else {
            res.send(response)
        }
    })
}

var getAll = function(req, res){
	Tournament.find().populate('user').exec(function(err, response){
		if (err) {
			return res.status(500).send(err);
		}
		res.send(response)
	})
}

/////
//find one query:
var handleGetOne = function(req, res) {
	Tournament.findById(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Tournament.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////


module.exports = {
	get: getAll,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut
};
