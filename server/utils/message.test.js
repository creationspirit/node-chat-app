var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        var from = 'Mike';
        var latitude = 1;
        var longitude = 2;
        var url = 'https://www.google.com/maps?q=1,2' 
        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.from).toBe(from);
        expect(res.url).toBe(url);
        expect(typeof res.createdAt).toBe('number');
    });
});