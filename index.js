const express = require('express'); // import statement
const app = express(); // create an instance of express


// request or response
app.get('/',(req,res)=>{
    res.send("SERVER IS RUNNING")
})

// req se data aata hai
// res se jata hai

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
