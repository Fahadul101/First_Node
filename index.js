const express = require('express')
const app = express();


// const rootCall=(req,res)=>{
//     res.send('Thank You very much')
// }


app.get('/',(req,res)=>{
    res.send("Thank you for calling me YAYYYYYYYYYYYYYY");
})

app.listen(3000,()=>console.log('listening to port 3000'));