const express = require("express");
var app = express();
app.use(express.json());
const port = 2000;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/roombooking")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error("Not connected to mongo db......", err));
const roomSchema = new mongoose.Schema({
  no_of_seats: Number,
  amenities: String,
  price_hr: Number,
  room_name:String,
  room_status:String,
  room_id:Number,
  start_time:Number,
  end_time:Number,
  
  date: { type: Date, default: Date.now },
});
const Room = mongoose.model("rooms", roomSchema);
app.post("/creation/", (req, res) => {
  const room = new Room({
    no_of_seats: req.body.no_of_seats,
    amenities: req.body.amenities,
    price_hr: req.body.price_hr,
    room_name:req.body.room_name,
    room_status:req.body.room_status,
    room_id:req.body.room_id,
    start_time:req.body.start_time,
     end_time:req.body.end_time,

    
  });
  const result = room.save();
  res.send(room);
  console.log(room);
  res.end();
  if (!room) res.status(404).send(error);
});
//room getcall
app.get("/rooms/", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("roombooking");
    dbo
      .collection("rooms")
      .find({}, { projection: {} })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

        res.send(result);
       // db.close();
      });
  });
});


//Customer
const customerSchema = new mongoose.Schema({
  
  customer_name:String,
  start_time:Number,
  end_time:Number,
  room_id:Number,
  date: { type: Date, default: Date.now },
});
const Customer = mongoose.model("customers", customerSchema);
app.post("/customerCreation/", (req, res) => {
  const customer = new Customer({
    date:req.body.date,
    customer_name:req.body.customer_name,
    start_time:req.body.start_time,
     end_time:req.body.end_time,
     room_id:req.body.room_id,
    
  });
  const result = customer.save();
  res.send(customer);
  console.log(customer);
  res.end();
  if (!customer) res.status(404).send(error);
});

app.listen(port, () => console.log(`port ${port} is running on the server`));
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/roombooking";

app.get("/customers/", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("roombooking");
    dbo
      .collection("customers")
      .find({}, { projection: { } })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

        res.send(result);
        //db.close();
      });
  });
});

//update room


app.put("/updateRoom/", (req, res) => {
  console.log("check");
  var params = req.body.id;
  console.log(params);
 MongoClient.connect(url, function(err, db) {
    if (err) console.log(err);
    var dbo = db.db("roombooking");
    var myquery = { room_id: params };
    var newvalues = {$set:{room_status:req.body.room_status}};
    //dbo.collection("rooms").updateOne({room_id: params}, {$set:{room_status:req.body.room_status}})
    dbo.collection("rooms").updateOne(myquery,newvalues);
    res.send("1 document updated");
    //  db.close();
    
  });});


