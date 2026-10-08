const express = require("express"); 
const app = express(); 

app.get("/", 
        (req, res) => {
            res.send("Back end Working! "); 
        }
)

app.get("/about", 
        (req, res) =>{
            res.send ("This is my experiment"); 
        }
)

app.listen(3001, 
            () => {
                console.log("Listening"); 
            }
)