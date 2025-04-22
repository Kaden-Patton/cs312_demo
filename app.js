const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/api/test", function(req, res) {
  console.log(req.headers);
  res.sendStatus(418);
});

app.get("/api/add/", function(req, res) {
  let x = Number(req.query.x);
  let y = Number(req.query.y);

  res.send(x + y);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
