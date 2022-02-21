const hash = (data) => {
  return require("crypto").createHash("sha256").update(data).digest("hex");
};
module.exports = hash;
