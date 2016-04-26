var Tournament = require('./../models/Tournament')
//post query:
var handlePost = function(req, res) {
	Tournament.create(req.body, function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}
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
var handleDelete = function(req, res) {
	Tournament.findByIdAndRemove(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}


module.exports = {
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	delete: handleDelete
};