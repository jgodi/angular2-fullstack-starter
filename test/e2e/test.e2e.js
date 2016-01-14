describe('App', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        const subject = browser.getTitle();
        const result = 'Angular2 Fullstack Starter';
        expect(subject).toEqual(result);
    });
});
