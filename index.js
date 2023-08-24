const express = require("express");
const app = express();

app.get("/one", (req, res) => {
  res.send("Hello world");
});
app.post("/two", (req, res) => {
  res.end("hello world 1");
});
app.get('/three', (req, res) => {
	res.status(201).end()
})
app.get('/four', (req, res) => {
	res.append("name", "Tushar")
	res.json({
		hello: "message"
	})
})
app.listen(8080, () => {
  console.log("Server Running Sucessfully");
});
