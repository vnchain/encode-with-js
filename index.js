var md5 = require("md5");

const encode = (data, type) => {
   if (type === "md5") {
      return md5(data);
   }
};

exports.encode = encode;
