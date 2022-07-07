const express= require("express");

const HomeRouter= express.Router();

//get Home
HomeRouter.get("/" , (req,res)=> {
    const date = new Date();
    const hours= date.getHours();
    if(hours > 9 && hours < 17)
    {
        res.render("open");
    }
    else{res.render("close");} 
});

HomeRouter.get("/Contact",(req, res)=>res.render("Contact"));
HomeRouter.get("/Services",(req, res)=>res.render("services"));

//post Home

//Delete Home

//update Home

module.exports = HomeRouter;