const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user/admin/", require("./api/admin"));
app.use("/api/user/teacher/", require("./api/teacher"));
app.use("/api/user/student/", require("./api/student"));

app.use(express.static("client/build"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
