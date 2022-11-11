import express from "express";
import { create } from "express-handlebars";
import path from "path";
import indexRoutes from "./routes/index.routes";
const app = express();

app.set("views", path.join(__dirname, "/views"));

var hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes);

export default app;
