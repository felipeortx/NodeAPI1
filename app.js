const express = require('express');
const app = express();
const port = 3000;

const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
   ];

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/products", (req, res) => {  
   res.json(products);
  });

app.get("/products/:id", (req, res) => {
    console.log("passei aqui");
    const pds = products.filter(p => p.id.toString() === req.params.id);
    res.json(pds);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));