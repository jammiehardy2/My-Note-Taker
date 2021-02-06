const fs = require("fs");
const path require("path");
const noteArray = require("../db/db.json");

module.exports = app => {
    app.get("/api/notes", (req, res)=>{
    res.json(noteArray);
    })
    
}
