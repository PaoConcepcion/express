const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
    res.send("Hola!!");
})

app.get("/suma/:valor1/:valor2", (req, res) => {
    var suma = req.params.valor1 + req.params.valor2;
    res.send(req.params.valor1 + " + " + req.params.valor2 + " = " + suma);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))