const validProjectId = require("../helper/validProjectId");
const runErr = require("../helper/errorFunction");

const checkProjectIdFormat = (req,res,next) => {
    const projectId = req.params.id;
    const notCorrectProjectIdFormat = validProjectId(projectId);
  
    if (notCorrectProjectIdFormat) {
      const err = {
        message: "Oops, looks like the page you are looking for does not exist!",
        statusCode: 404,
      };
      return runErr(err, res, next);
    }

    req.projectId = projectId;
    return next();
}

module.exports = checkProjectIdFormat;