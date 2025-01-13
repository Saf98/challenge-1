const FormatTime = require('./../src/FormatTime.js');

describe('FormatTime', () => {
    it('should be 45m', () => {
        expect(FormatTime(45)).toEqual("45m");
    });

    it('should be 1hr 30m', () => {
        expect(FormatTime(90)).toEqual("1hr 30m");
    });
});