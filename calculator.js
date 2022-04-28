const express = require(`express`);
const bodyParser= require(`body-parser`);
let app= express();
const port=8000;
app.listen(port,(req,res)=>{
    console.log(`server is rinning at ${port}`);
})

app.get(`/`,(req,res)=>{
    res.sendFile(__dirname +`/index.html`);
})
app.use(bodyParser.urlencoded({extended:true}));
app.post(`/`,(req,res)=>{
    let height=Number(req.body.height);
    let weight=Number(req.body.weight);
    res.send(`thankyou for using the calculator ${height+weight}`);
})
