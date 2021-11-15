const mongoose= require('mongoose');

const url= "mongodb+srv://nsubhadipta:Admin2020@cluster0.huzql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true});
try{
    const con= mongoose.connection;
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

module.exports = mongoose;