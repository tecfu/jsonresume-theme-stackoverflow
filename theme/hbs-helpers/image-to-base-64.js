const fs = require("fs")

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer.from(bitmap).toString('base64');
}

const imageToBase64 = (path) => {
  return 'data:image/png;base64,' + base64_encode(path);
};

module.exports = { imageToBase64 };
