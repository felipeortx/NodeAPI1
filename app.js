const express = require("express");
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
  {
    id: 3,
    name: "wrench",
  },
];

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const pds = products.filter((p) => p.id.toString() === req.params.id);
  res.json(pds);
});

app.post("/products", (req, res) => {
  const newProjet = { id: products.length + 1, ...req.body };
  const newProducts = [...products, newProjet];
  res.json(newProducts);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
