const fs = require("fs");
const path = require("path");
const noteArray = require("../db/db.json");
//https://stackoverflow.com/questions/23327010/how-to-generate-unique-id-with-node-js
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    app.get("/api/notes", (req, res)=>{
    res.json(noteArray);
    })
    // Add new notes
app.post("/api/notes", (req, res) =>{
    const newNote = req.body;
    const file= path.join(__dirname, "../db/db.json");
    fs.writeFile(file,JSON.stringify(noteArray, null, 4),err => {
        if (err) throw err;
        console.log("Note saved");

    });
    res.send(newNote);
});
// delete notes
app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const file = path.join(__dirname, "../db/db.json");

})
}
//https://stackoverflow.com/questions/23327010/how-to-generate-unique-id-with-node-js
var your_uuid = uuidv4();
console.log(your_uuid);