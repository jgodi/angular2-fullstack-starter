describe('App', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        var subject = browser.getTitle();
        var result = 'Angular2 Fullstack Starter';
        expect(subject).toEqual(result);
    });
});
