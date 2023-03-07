const winston = require("winston");

const enumerateErrorFormat = winston.format((info) => {
	if (info instanceof Error) {
		Object.assign(info, { message: info.stack });
	}
	return info;
});

const Logger = winston.createLogger({
	format: winston.format.combine(enumerateErrorFormat()),
	transports: [
		new winston.transports.Console({
			stderrLevels: ["error"],
		}),
	],
});


module.exports = Logger;