const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
.connect(
    "mongodb+srv://Saad_Rakhmaev:el.impoluto@cluster0.hqvtrcr.mongodb.net/saad"
    )
    .then(() => console.log("server conenected"))
    .catch(() => console.log("error"));
    
    app.use(express.json());
    app.use(require("./routes/novosts.route"));
    app.use(require("./routes/categories.route"));
    app.use(require("./routes/comments.route"));

app.listen(3000, () => {
  console.log("Сервер запущен успешно");
});
