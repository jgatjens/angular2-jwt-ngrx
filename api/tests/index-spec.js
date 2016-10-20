'use strict';

let token = '';
let userid = '';

var request = require('supertest');
var app = require('../src/index');

describe('Login a user with no db data', function(){
    it('responds with a unauthorized status ', function(done){
        request(app)
          .post('/users/login')
          .send({"username": "jgatjens", "password": "password1"})
          .set('Content-Type', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401, done);
    });
});

describe('Create a user', function(){
    it('responds with a json success message', function(done){
        request(app)
            .post('/users')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .send({
					"gender":   "male",
					"name":     "test",
					"email":    "jgatjens@18tech.com",
					"username": "jgatjens",
					"password": "password1",
					"phone": 	  "(506) 8837-4462",
					"cell": 	  "(506) 2241-3685",
					"location": {
							"street": "899 Market",
						"city": "San Francisco",
						"state": "CA",
						"zip": 94103
					},
					"picture": {
					   "large":     "http://jgatjens.com/images/me.jpg",
					   "medium":    "http://jgatjens.com/images/me.jpg",
					   "thumbnail": "http://jgatjens.com/images/me.jpg"
					}
         })
          .expect(200)
          .end(function(err, res){

             if (err) return done(err);

             token = res.body.token;
             userid = res.body._id;

             console.log('token: ', token);
             done();
          });
    });
});

describe('No authorization token send', function(){
    it('responds with a 401 authorization denied', function(done){
        request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401, done)
    });
});

describe('Login a user, wrong password', function(){
    it('responds with a unauthorized status ', function(done){
        request(app)
          .post('/users/login')
          .send({"username": "jgatjens", "password": "wrongpassword"})
          .set('Content-Type', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401, done);
    });
});

describe('Login a user', function(){
    it('responds with a json success message', function(done){
        request(app)
          .post('/users/login')
          .send({"username": "jgatjens", "password": "password1"})
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
    });
});

describe('Update a user', function(){
    it('responds with a json success message', function(done){
        request(app)
          .post('/users/jgatjens')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer '+ token)
          .expect('Content-Type', /json/)
          .send(
              {
              	"phone": "(506) 8837-2211",
              	"cell": "(506) 2241-1111",
              }
          )
          .expect(200, done);
    });
});


describe('List Users', function(){
    it('responds with a list of users in JSON', function(done){
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('Get a User', function(){
    it('responds with a single todo item in JSON based on the author', function(done){
        request(app)
            .get('/users/' + userid)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('Search a User', function(){
    it('responds with a single todo item in JSON based on the author', function(done){
        request(app)
            .get('/users/search?q=awesome')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('Remove User', function(){
    it('responds with a json success message', function(done){
        request(app)
            .delete('/users/' + userid)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

