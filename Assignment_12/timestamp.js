// const fs = require('fs');
// let date_ob = new Date();
// // current date
// // adjust 0 before single digit date
// let date = ("0" + date_ob.getDate()).slice(-2);

// // current month
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// // current year
// let year = date_ob.getFullYear();

// // current hours
// let hours = date_ob.getHours();

// // current minutes
// let minutes = date_ob.getMinutes();

// // current seconds
// let seconds = date_ob.getSeconds();

// // prints date in YYYY-MM-DD format
// //console.log(year + "-" + month + "-" + date);

// // prints date & time in YYYY-MM-DD HH:MM:SS format
// var logfile_name = "./" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + '.txt'

// fs.writeFile(logfile_name,"logfile_name",(err) =>{
//     if(err) {
//         return console.log(err);
//     }
//    // console.log("The file was saved!");
// });


const fs = require('fs');
var now = new Date();
var logfile_name = './' + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() +"-"+now.getTime()+'.txt'

 fs.writeFile(logfile_name,logfile_name,(err)=>{
//fs.writeFile(logfile_name,"",(err)=>{
   // console.log(err?err:'Hello!');
});