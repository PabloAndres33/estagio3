const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models= require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user = models.User;

app.get('/', (req, res)=>{
    res.send('Meu servidor já está rodando!')
})

app.post('/login', async (req, res)=>{
    let response = await user.findOne({
        where:{email: req.body.email, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/create',async (req,res)=>{

    let response = await user.create({
     email: req.body.email,
     password: req.body.password
   });
   if(response === null){
    res.send(JSON.stringify('error'));
}else{
    res.send(response);
}


});

let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Servidor está rodando!')
});