const winston = require("winston");

const config = {
	levels: {
		error: 0,
		debug: 1,
		warn: 2,
		data: 3,
		info: 4,
		verbose: 5,
		misc: 6,
		sms: 7,
		call: 8,
		ws: 9,
		email: 10,
	},
	colors: {
		error: "bold white redBG",
		debug: "blue",
		warn: "black yellowBG",
		data: "white blackBG",
		info: "yellow",
		verbose: "cyan",
		misc: "magenta",
		sms: "bold green blackBG",
		call: "bold blue blackBG",
		ws: "magenta greenBG",
		email: "black cyanBG",
	},
};

winston.addColors(config.colors);

const Logger = (module.exports = winston.createLogger({
	levels: config.levels,
	format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
	transports: [new winston.transports.Console()],
	level: "email",
}));

module.exports = Logger;
