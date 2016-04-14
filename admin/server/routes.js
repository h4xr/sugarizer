var express=require('express'),
router=express.Router(),
users=require('../controllers/users'),
activities=require('../controllers/activities'),
journals=require('../controllers/journals');

module.exports=function(app){
  router.get('/',users.index);
  app.use(router);
};
