var Tournament = require('./../models/Tournament');
var User = require('./../models/User');
//post query:
var createTournamentAddToUserArray = function(req, res) {
	console.log(req.body);
    new Tournament(req.body).save(function(err, res) {
    	if(err) {
            res.status(500).json(err)
        }
        console.log("response", res);
            var newTournament = res._id;
        // console.log("error", err);
        // console.log(3428934, req.params.id);
        User.findById(req.params.id).then(function(response, error) {
        if(error) {
           return res.status(500).json(error);
        } else {
            var user = response;
       		 user.tournament.push(newTournament);
       		 // console.log('user', user);
       		 user.save();
        }
    })  
})
 return res.status(200).end();    
}
////
var getAllTournamentsForUser = function(req, res){
	User.findById(req.params.id).populate('tournament').exec(function(err, queUser){
		console.log(queUser)
		if (err) {
			return res.status(500).send(err);
		}

		return res.status(200).send(queUser);
	})
}
///
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
	Tournament.find().exec(function(err, response){
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
		console.log("req", req)
		if(error) {
			console.log(error)
			res.status(500).json(error)
		} else {
			console.log("backend response", response)
			res.json(response)
		}
	})
}
/////
var deleteTournament = function(req, res){
	Tournament.findByIdAndRemove(req.params.id, function(error, response){
		if(error){
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}

module.exports = {
	getAllTournamentsForUser: getAllTournamentsForUser,
	postTournamentToUser: createTournamentAddToUserArray,
	getAll: get,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	// delete: handleDelete,
	delete: deleteTournament
};