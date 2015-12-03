// TODO - jgodi - add ability to write these in ES6
describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });

    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'Angular2 Fullstack Starter';
        expect(subject).toEqual(result);
    });
});
