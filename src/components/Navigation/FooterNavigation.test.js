const { showUpload } = require("./FooterNavigation");

// Format information render icon tests
test('Upload page should never be available in production build', () => {
    expect(showUpload).toBe(false);
});