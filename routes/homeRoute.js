const express = require("express");
const router = express.Router();

// Helper function for creating and passing errors
const runErr = require("../helper/errorFunction");
// A middleware that checks if the project id comes in is in correct format
const checkProjectIdFormat = require("../middleware/checkProjectIdHandler");
// All projects data(array)
const { projects } = require("../data/projects.json");

// This is the home page route
router.get("/", (req, res) => {
  return res.render("index", { projects });
});

// This is the about page route
router.get("/about", (req, res) => {
  return res.render("about");
});

// This is project page route
router.get("/project/:id", checkProjectIdFormat, (req, res, next) => {
  // After checking the project id, it checks if the project exist
  const projectIdNum = parseInt(req.projectId);
  const hasProject = projects.find((project) => project.id === projectIdNum);
  if (!hasProject) {
    const err = {
      message: "Oops, looks like the page you are looking for does not exist!",
      statusCode: 404,
    };
    return runErr(err, res, next);
  }
  // Getting the project  
  const currentProject = projects[projectIdNum - 1];

  return res.render("project", { currentProject });
});

module.exports = router;

// http://localhost:3000/project/564wefe&$o468!@$@fawffe!@%5E&-*=-ges_+
