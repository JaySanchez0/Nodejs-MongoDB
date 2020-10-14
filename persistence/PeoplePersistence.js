var {MongoClient} = require("mongodb");
const uri = "mongodb+srv://test:test@cluster0.2xxny.mongodb.net/Banco?retryWrites=true&w=majority";
var db = null;
const client = new MongoClient.connect(uri,(err,datab)=>{
    db = datab.db("Banco");
    console.log("connect db");
});

module.exports = {
    addPeople:(people)=>{
        const collection = db.collection("Pagos");
        collection.insertOne(people,(err,res)=>{
            if(err!=null) console.log("error");
        });
    },getPeoples: async function(){
        const collection = db.collection("Pagos");
        let data = await collection.find({}).toArray();
        console.log(typeof(data));
        console.log(data);
        return data;
    }
};