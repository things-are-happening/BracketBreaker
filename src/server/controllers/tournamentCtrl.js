var Tournament = require('./../models/Tournament')
//post query:
var handlePost = function(req, res) {
	console.log(req.body);
    new Tournament(req.body).save(function(err, response) {
        console.log("response", response);
        console.log("error", err);
        tournament.userId = req.user._id;
        if(error) {
            res.status(500).json(err)
        } else {
            res.send(response)
        }
    })
}

var getAll = function(req, res){
	Tournament.find({ userId: req.user._id }, function(err, response){
		if (err) {
			return res.status(500).send(err);
		}
		res.send(response)
	})
}
/////
//find one query:
var handleGetOne = function(req, res) {
	Tournament.find({ userId: req.user._id, _id: req.params.tounament_id }, function(err, response) {
		if(error) {
			res.status(500).json(err)
		} else {
			res.json(response)
		}
	})
}
/////
// update query:
var handlePut = function(req, res) {
	Tournament.update({ userId: req.user._id, _id: req.params.tounament_id }, /*{ quantity: req.body.quantity },*/ function(err, response) {
		if(error) {
			res.status(500).json(err)
		} else {
			res.json(response)
		}
	})
}

// var handlePut = function(req, res) {
// 	Tournament.update({ userId: req.user._id, _id: req.params.tounament_id }, { quantity: req.body.quantity }, function(err, num, raw) {
// 		if (err)
// 			res.send(err);

//     // Update the existing tournament quantity
//     // tournament.quantity = req.body.quantity;

//     // Save the beer and check for errors
//     tournament.save(function(err) {
//     	if (err)
//     		res.send(err);

//     	res.json(beer);
//     });
// });
// };
/////
var handleDelete = function(req, res) {
	Tournament.remove({ userId: req.user._id, _id: req.params.tournament_id }, function(err) {
		if(error) {
			res.status(500).json(err)
		} else {
			res.json({ message: 'Tournament removed from the locker room!' })
		}
	})
}
////

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
	get: getAll,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	delete: handleDelete,
	delete: deleteTournament
};