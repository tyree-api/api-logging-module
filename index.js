const winston = require("winston");

// const enumerateErrorFormat = winston.format((info) => {
// 	if (info instanceof Error) {
// 		Object.assign(info, { message: info.stack });
// 	}
// 	return info;
// });

const Logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});


module.exports = Logger;
