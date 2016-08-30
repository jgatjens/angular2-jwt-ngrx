import Jobs from '../models/jobsModel';
import jwt from 'jsonwebtoken';


/**
 * jobsController.js
 *
 * @description :: Server-side logic for managing jobs.
 */
module.exports = {

	/**
	* jobsController.search()
	*/
	search: function (req, res) {
	   let q = req.query.q;
	   Jobs.find({ $text: { $search: q } }, function(err, jobs) {
	      if(err) {
	          return res.status(500).json({
	              message: 'Error on search.'
	          });
	      }
	      return res.json(jobs);
	   });
	},


	/**
	* jobsController.list()
	*/
	list: function(req, res) {
	   Jobs.find(function(err, jobs){
	      if(err) {
	          return res.status(500).json({
	              message: 'Error getting job.'
	          });
	      }
	      return res.status(200).json(jobs);
	   });
	},

	/**
	* jobsController.show()
	*/
	show: function(req, res) {
		let id = req.params.id;
		Jobs.findOne({_id: id}, function(err, job){
		  if(err) {
				return res.status(500).json({
				  message: 'Error getting job.'
				});
		  }

		  if(!job) {
				return res.status(404).json( {
					message: 'No such job'
				});
		  }

		   return res.json(removePassword(job));
		});
	},

	/**
	* jobsController.create()
	*/
	create: function(req, res) {

		let job = new Jobs(req.body);

		job.save(function(err, job) {

		  if(err) {
	      return res.status(500).json({
	        message: 'Error saving job',
	        error: err
	      });
		  };

			return res.status(200).json({
				message: 'action succefully',
				_id: job._id,
				token
			});
		});
	},

	/**
	* jobsController.update()
	*/
	update: function(req, res) {

		let username = req.params.id;
		Users.findOne({ username: username }, function(err, user){
		   if(err) {
		       return res.status(500).json({
		           message: 'Error saving user',
		           error: err
		       });
		   }
		   if(!user) {
		       return res.status(404).json({
		           message: 'No such user'
		       });
		   }

		   user.gender = req.body.gender ? req.body.gender : user.gender;
		   user.email =  req.body.email ? req.body.email : user.email;
		   user.username = req.body.username ? req.body.username : user.username;
		   user.password = req.body.password ? req.body.password : user.password;
		   user.phone = req.body.phone ? req.body.phone : user.phone;
		   user.cell = req.body.cell ? req.body.cell : user.cell;
		   user.picture = req.body.picture ? req.body.picture : user.picture;
		   user.location = req.body.location ? req.body.location : user.location;

		   user.save(function(err, user){
				if(err) {
				  return res.status(500).json({
				      message: 'Error getting user.'
				  });
				}
				if(!user) {
				  return res.status(404).json({
				      message: 'No such user'
				  });
				}

		    	return res.status(200).json({ message: 'action succefully', user: removePassword(user) })
		   });
		});
	},

	/**
	 * jobsController.remove()
	 */
	remove: function(req, res) {
		let id = req.params.id;

		Users.findByIdAndRemove(id, function(err, user){
		   if(err) {
		       return res.status(500).json({
		           message: 'Error getting user.'
		       });
		   }
			return res.status(200).json({ message: 'action succefully', _id: user._id });
		});
	}
};
