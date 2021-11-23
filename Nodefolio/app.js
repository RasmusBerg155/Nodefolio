import express from "express";
import session from "express-session";
const app = express();

app.use(session({secret: 'shh'}));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import pagesRouter from './routers/pages.js'
import projectRouter from './routers/projects.js'
import adminRouter from './routers/admin.js'
import contactRouter from './routers/contact.js'

app.use(pagesRouter);
app.use(projectRouter);
app.use(adminRouter);
app.use(contactRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});