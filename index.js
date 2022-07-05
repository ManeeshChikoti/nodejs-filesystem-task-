const express = require("express")
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 4000;
app.use(express.json());


app.get("/", (req, res) => {
    res.send("NODEJS FILE SYSTEM TASK")

})


// for creating a textfile in particular directory
if (!fs.existsSync("timestamps")) {
    fs.mkdirSync("timestamps");
}


//for creating a file
app.get("/create", (req, res) => {
    const date_time = new Date();
    const ts = `${date_time.toISOString()}`.slice(0, 19).replace(/:/g, "-")
   
    fs.writeFile(`./timestamps/${ts}.txt`, `${date_time}`, (err) => {
        if (err) throw err
        console.log("file is created successfully")
    })
    res.send("File is created")
})

//for getting all files
app.get("/allfiles", (req, res) => {
    let allFiles = fs.readdirSync("./timestamps");
    console.log(allFiles);
    res.send(allFiles);
  });


app.listen(PORT, () => {
    console.log("server is running fine")
})

