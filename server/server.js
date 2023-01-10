"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, function () {
  console.log(`Listerning on PORT : ${PORT}`);
});
