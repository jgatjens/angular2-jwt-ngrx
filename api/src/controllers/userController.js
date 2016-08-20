import Users from '../models/usersModel';
import jwt from 'jsonwebtoken';

// Remove password hash from user object
let removePassword = function(userModel) {
	let user = userModel.toJSON();
	delete user.password;

	return user;
}


/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

	/**
	* userController.search()
	*/
	search: function (req, res) {
	   let q = req.query.q;
	   Users.find({ $text: { $search: q } }, function(err, users) {
	      if(err) {
	          return res.status(500).json({
	              message: 'Error on search.'
	          });
	      }
	      return res.json(users);
	   });
	},


	/**
	* userController.list()
	*/
	list: function(req, res) {
	   Users.find(function(err, users){
	      if(err) {
	          return res.status(500).json({
	              message: 'Error getting user.'
	          });
	      }
	      return res.json(users);
	   });
	},

	/**
	* userController.show()
	*/
	show: function(req, res) {
		let id = req.params.id;
		Users.findOne({_id: id}, function(err, user){
		   if(err) {
		       return res.status(500).json({
		           message: 'Error getting user.'
		       });
		   }
		   if(!user) {
		       return res.status(404).json( {
		           message: 'No such user'
		       });

		   }

		   return res.json(removePassword(user));
		});
	},

	/**
	* userController.create()
	*/
	create: function(req, res) {


	   let user = new Users(req.body);
	   let token = jwt.sign({ username: req.body.username }, process.env.SECRET)

	   user.save(function(err, user) {

	      if(err) {
	          return res.status(500).json({
	            message: 'Error saving user',
	            error: err
	          });
	      };

			return res.status(200).json({ message: 'action succefully', _id: user._id, token: token });
	   });
	},


 	/**
	 * userController.login()
	 */
	login: function(req, res) {

		if (!req.body.username) {
			return res.status(400).send('username required');
		}

		if (!req.body.password) {
			return res.status(400).send('password required');
		}

		Users.findOne({ username: req.body.username }, function (err, user) {

			if (err) throw err;

			if (!user)  {
				return res.status(401).json('invalid username or password');
			}

			user.comparePassword(req.body.password, function (err, isMatch) {

				if (err) throw err;

				if (!isMatch) {
					return res.status(401).json('invalid username or password');
				} else {
					var token = jwt.sign({ username: req.body.username }, process.env.SECRET)
					return res.status(200).json({ message: 'login succefully', username: user.username, token: token });
				}
			})
		})
	},

	/**
	* userController.update()
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
	 * userController.remove()
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
