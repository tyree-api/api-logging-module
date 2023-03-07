const Logger = require('../../index');

describe('Logger', () => {
    it('should log an error', () => {
        Logger.error('Test error');
    });
});