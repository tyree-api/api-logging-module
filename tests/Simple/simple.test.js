const Logger = require("../../index");

// Error Level
describe("Logger Simple", () => {
	it('Should log as "error"', () => {
		Logger.error("Error");
	});
});

// Debug Level
describe("Logger Simple", () => {
	it('Should log as "debug"', () => {
		Logger.debug("Debug");
	});
});

// Warn Level
describe("Logger Simple", () => {
	it('Should log as "warn"', () => {
		Logger.warn("Warn");
	});
});

// Data Level
describe("Logger Simple", () => {
	it('Should log as "data"', () => {
		Logger.data("Data");
	});
});

// Info Level
describe("Logger Simple", () => {
	it('Should log as "info"', () => {
		Logger.info("Info");
	});
});

// Verbose Level
describe("Logger Simple", () => {
	it('Should log as "verbose"', () => {
		Logger.verbose("Verbose");
	});
});

// Misc Level
describe("Logger Simple", () => {
	it('Should log as "misc"', () => {
		Logger.misc("Misc");
	});
});

// SMS Level
describe("Logger Simple", () => {
	it('Should log as "sms"', () => {
		Logger.sms("SMS");
	});
});

// Call Level
describe("Logger Simple", () => {
	it('Should log as "call"', () => {
		Logger.call("Call");
	});
});

// WS Level
describe("Logger Simple", () => {
	it('Should log as "ws"', () => {
		Logger.ws("WS");
	});
});

// Email Level
describe("Logger Simple", () => {
	it('Should log as "email"', () => {
		Logger.email("Email");
	});
});

// JSON Data
describe("Logger JSON Simple", () => {
	it("Should Output 30 from JSONExample", () => {
		const JSONExample = {
			name: "John Doe",
			age: 30,
			email: "test@test.ca",
		};
		Logger.email(JSONExample.age);
	});
});
