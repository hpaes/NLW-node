import express from 'express';

const app = express();

app.get('/', (req , res) => {
    return res.send("Olá get");
})


app.post('/', (req, res) =>{
    return res.send("Olá Post")
})

app.listen(3000, () => console.log("Server is running on port 3000"));