import express from "express";
import taller01Routes from "./routes/taller01r";
import taller02Routes from "./routes/taller02r";
import taller03Routes from "./routes/taller03r";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/taller01", taller01Routes);
app.use("/api/taller02", taller02Routes);
app.use("/api/taller03", taller03Routes);

app.listen(PORT, () => {
  console.log(`Server up at http://localhost:${PORT}`);

});
