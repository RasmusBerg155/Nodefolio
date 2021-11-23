import express from "express";
import session from "express-session";
const app = express();

app.use(session({secret: 'shh'}));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import pagesRouter from './routers/pages.js'
import dataRouter from './routers/projects.js'
import adminRouter from './routers/admin.js'

app.use(pagesRouter);
app.use(dataRouter);
app.use(adminRouter);

// const { createPage } = require("../render.js");
// const { urlencoded } = require("express");

// const frontpagePage = createPage("frontpage/frontpage.html", { 
//     title: "Nodefolio | Welcome"
// });

// const projectsPage = createPage("projects/projects.html");

// app.get("/", (req, res) => {
//     res.send(frontpagePage);
// });

// app.get("/projects", (req, res) => {
//     res.send(projectsPage);
// });

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});