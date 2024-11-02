import { config } from "dotenv";
import app from "./app";
import { PORT } from "./config/constants";

config();

const port = PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
