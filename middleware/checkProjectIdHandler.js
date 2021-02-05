const validProjectId = require("../helper/validProjectId");
const runErr = require("../helper/errorFunction");

// Middleware for project route to check if the project id is correct format
const checkProjectIdFormat = (req,res,next) => {
    const projectId = req.params.id;
    // Return true or false, validate and make sure the id format is what I expected
    const notCorrectProjectIdFormat = validProjectId(projectId);
  
    if (notCorrectProjectIdFormat) {
      const err = {
        message: "Oops, looks like the page you are looking for does not exist!",
        statusCode: 404,
      };
      return runErr(err, res, next);
    }
    // If correct formate, save the project id to req.projectId
    req.projectId = projectId;
    return next();
}

module.exports = checkProjectIdFormat;