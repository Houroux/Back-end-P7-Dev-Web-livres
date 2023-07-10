const sharp = require("sharp");

module.exports = async (req, res, next) => {
	const path = `./images/${req.file.filename}`;
	await sharp(req.file.buffer)
		.toFormat("webp")
		.resize({ height: 568 })
		.toFile(path);
	next();
};
