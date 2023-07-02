const app = require("./app");
const connectDB = require("./Database/db"); 
const PORT = process.env.PORT;  

app.listen(PORT, () => {
    console.log(`Server Is Running On Port : http://localhost:${PORT}`)
    connectDB()
})