const sharp = require("sharp");

module.exports = async (req, res, next) => {
	const path = `./images/${req.file.filename}`;
	await sharp(req.file.buffer).resize(300).toFile(path);
	next();
};
