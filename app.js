console.log('app start');
const express=require('express');
const app=express();
const path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
// set public folder
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
res.render('index',{
	title: 'articles'
});
});
const port=process.env.PORT|| 3000;
app.listen(3000,()=>{
	console.log('server is up on port '+ port)
});