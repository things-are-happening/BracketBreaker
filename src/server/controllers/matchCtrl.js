var Match = require('./../models/Match');

//find many query:
var handleGetAll = function(req, res) {
	Match.find({ userId: req.user._id }, function(err, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
};
/////
//find one query:
var handleGetOne = function(req, res) {
	Match.find({ userId: req.user._id, _id: req.params.beer_id }, function(err, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//post query:
var handlePost = function(req, res) {
	Match.create(req.body, function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}     
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Match.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//remove update query:
var handleDelete = function(req, res) {
	Match.findByIdAndRemove(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
var handlePostMatchesById = function(req, res){
        new Match(req.body).save(function(err, response) {
            if (err) {
                return res.status(500).send(err);
            }
            Tournament.findById(req.params.id, function(err, response){
                if (err) {
                    return res.status(500).send(err);
                }
                current.matches.push(response);
                tournament.save();
                res.send(tournament);
            })
        })
    }
/////
module.exports = {
	getAll: handleGetAll,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	delete: handleDelete,
	postMatchesById: handlePostMatchesById
};