describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });

    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'NG2 App';
        expect(subject).toEqual(result);
    });
});
