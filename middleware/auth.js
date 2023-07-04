const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(
			token,
			"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4ODQ2MjA5OCwiaWF0IjoxNjg4NDYyMDk4fQ.xw_x0atLNP-c7ztrJJqMSCQQrYX5369NQlz8RrdLmcc"
		);
		const userId = decodedToken.userId;
		req.auth = {
			userId: userId,
		};
		next();
	} catch (error) {
		res.status(401).json({ error });
	}
};
