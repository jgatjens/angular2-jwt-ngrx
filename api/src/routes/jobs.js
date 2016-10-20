import express from 'express';
import jobController from  '../controllers/jobController.js'

let router = express.Router();

/*
 * GET
 */
router.get('/search', function(req, res) {
  jobController.search(req, res);
});

/*
 * GET
 */
router.get('/', function(req, res) {
  jobController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
  jobController.show(req, res);
});


/*
 * POST
 */
router.post('/', function(req, res) {
  jobController.create(req, res);
});

/*
 * POST
 */
router.post('/:id', function(req, res) {
  jobController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
  jobController.remove(req, res);
});

module.exports = router;
