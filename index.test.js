const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);

            const expected = '23s';

            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();

            const expected = '0s';

            assert.equal(actual, expected);
        });
    });

    describe('minutes', () => {
        it('should work for one digit minutes and seconds', () => {
            const actual = formatDate(68);

            const expected = '1m 8s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digits minutes and seconds', () => {
            const actual = formatDate(1875);

            const expected = '31m 15s';

            assert.equal(actual, expected);
        });

        it('should return only minutes', () => {
            const actual = formatDate(900);

            const expected = '15m';

            assert.equal(actual, expected);
        });
    });

    describe('hours', () => {
        it('should work for one digit hours, minutes and seconds', () => {
            const actual = formatDate(3668);

            const expected = '1h 1m 8s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digit hours, minutes and seconds', () => {
            const actual = formatDate(44435);

            const expected = '12h 20m 35s';

            assert.equal(actual, expected);
        });

        it('should work for hours only', () => {
            const actual = formatDate('28800');

            const expected = '8h';

            assert.equal(actual, expected);
        });

        it('should work for hours and minutes', () => {
            const actual = formatDate(39900);

            const expected = '11h 5m';

            assert.equal(actual, expected);
        });

        it('should work for hours and seconds', () => {
            const actual = formatDate('28825');

            const expected = '8h 25s';

            assert.equal(actual, expected);
        });
    });
});