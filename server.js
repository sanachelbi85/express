const express= require("express");
const app= express();

app.set("view engine","ejs");

app.use("/Home" , require("./routes/Home"));
app.use("/Contact" , require("./routes/Contact"));
app.use("/Services" , require("./routes/Services"));


app.listen(5002, (err) =>
 err?console.log(err) 
 : console.log("server is ranning")
 );