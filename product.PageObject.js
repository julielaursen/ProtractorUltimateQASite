var product_page = function() {
	
	this.selectProduct = function() {
		element(by.linkText('Product   ')).click();
	};
	
	this.selectProduct = function() {
		element(by.linkText('Documentation   ')).click();
		element(by.css('#mw-content-text>p')).toMatch('Welcome to the PHPTRAVELS Documentation.');
		element(by.css('#mw-content-text>p>b')).toMatch('To begin your search, what topic can we help you with today?');
	
	
	
	
	
};
moduel.exports = new product_page();