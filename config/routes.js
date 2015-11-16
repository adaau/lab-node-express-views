var express           = require('express'),
    router            = express.Router(),
    bodyParser        = require('body-parser'), //parses information from POST
    methodOverride    = require('method-override'); //used to manipulate POST

var quotesController  = require('../controllers/quotesController');

// QUOTES API
router.route('/')
  .get(function(req, res){
    res.redirect('/quotes');
  });
router.route('/quotes')
  .get(quotesController.getAll)
  .post(quotesController.createQuote);
router.route('/quotes/new')
  .get(quotesController.newQuote);
router.route('/quotes/:id')
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;
