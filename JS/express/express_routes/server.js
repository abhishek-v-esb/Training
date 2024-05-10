const express = require("express");
const userRoute = require("./routes/user");
const customersRoute = require("./routes/customers");

const app = express();
const port = 8007;

app.use("/user", userRoute);
app.use("/customers", customersRoute);

app.listen(port, () => {
  console.log("server listening");
});
