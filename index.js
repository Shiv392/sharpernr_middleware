const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
res.send(`<form action="/product" method="post">
<input type="text" id="title" name="title"><button type="submit">Add To Cart</button>
</form>`)
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
res.send(`  <h1>this is home page</h1>`)
})
app.listen(port,()=>{
    console.log(`server is listninng http://localhost:${port}`);
})