const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mvc-auth-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60, // 1 hora
    },
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.usuario = req.session.user || null;
  next();
});

const rotas = require("./routes/rotas");
const authRoutes = require("./routes/authRoutes");

app.use("/", authRoutes);
app.use("/", rotas);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});