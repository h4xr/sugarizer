var express=require('express'),
config=require('./server/configure'),
app=express();

//Setup the app
app.set('port',process.env.PORT || 3300);
app.set('views',__dirname+'/views');
app=config(app);

//Create the server
//app.get('/',function(req,res){
//  res.send('Hello world!!!');
//});

app.listen(app.get('port'),function(){
  console.log("Server running at port "+ app.get('port'));
});
