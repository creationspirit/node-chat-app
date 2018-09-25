var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMesage', () => {
    it('should generate the correct message object', () => {
        var from = 'Mike';
        var text = 'This is a test';
        var res = generateMessage(from, text);
        expect(res.text).toBe(text);
        expect(res.from).toBe(from);
        expect(typeof res.createdAt).toBe('number');
    });
});