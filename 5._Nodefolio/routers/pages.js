import express from "express";
const router = express.Router();
import { createPage } from '../render.js';
//import path from "path";

// create html pages
const frontpagePage = createPage("frontpage/frontpage.html", {
    title: "Nodefolio | Welcome"
});

const projectsPage = createPage("projects/projects.html", {
    title: "Nodefolio | Projects"
});

const cvPage = createPage("cv/cv.html", {
    title: "Nodefolio | CV"
});

const dashboardPage = createPage("dashboard/dashboard.html", {
    title: "Nodefolio | DSHBRD"
});

const adminPage = createPage("admin/admin.html", {
    title: "Nodefolio | Login"
});


// HTTP 
router.get("/", (req, res) => {
    res.send(frontpagePage)
});

router.get("/projects", (req, res) => {
    res.send(projectsPage)
});

router.get("/cv", (req, res) => {
    res.send(cvPage)
});

router.get("/dshbrd", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.redirect("/")
    }
})

router.get("/admin", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.send(adminPage)
    }
})

export default router;
