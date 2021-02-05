// Regex for numbers only
const numOnlyReg = /^\d+$/;

// Validating and project id and return true or false
const validProjectId = (id) => {
  const projectId = id;
  const projectIdNum = parseInt(projectId);
  const checkNumOnly = numOnlyReg.test(projectId);
  const correctFormat = (!checkNumOnly || isNaN(projectIdNum));
  return correctFormat;
};

module.exports = validProjectId;