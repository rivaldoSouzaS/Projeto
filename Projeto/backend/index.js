const app = require('express')() //ja chama o resultado do require
const consign = require('consign')

consign()
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, ()=>{
    console.log('back end show');
})
