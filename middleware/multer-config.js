const multer = require("multer");

const MIME_TYPES = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
	"image/webp": "webp",
};

const mimeTypesExt = Object.keys(MIME_TYPES).map((key) => key.split("/")[1]);

module.exports = multer({
	storage: multer.memoryStorage(),
	fileFilter: (req, file, cb) => {
		if (file.mimetype.split("/")[0] === "image") {
			const name = file.originalname
				.replaceAll(" ", "_")
				.replace(RegExp("." + mimeTypesExt.join("|")), "");
			const extension = MIME_TYPES[file.mimetype];
			// file.filename = name + Date.now() + "." + extension;
			file.filename = name + Date.now() + ".webp";
			cb(null, true);
		} else {
			cb(new Error("Only images are allowed!"));
		}
	},
}).single("image");
