// newSpec.js
browser.waitForAngularEnabled(false);
"use strict";

var homePage = require('./home.pageObject.js');
var util = require('./util.js');
var ordersPage = require('./orders.pageObject.js');

describe('Tests', function() {
	var hP = new homePage();	
	beforeAll(function() {
        browser.driver.manage().window().maximize();
        console.log("This runs before all functions");
    });

	beforeEach(function() {
		console.log("This runs before each function");
	});

	afterEach(function() {
		console.log("This runs after each function");
	});

	afterAll(function() {
	console.log("This runs after all functions");
	});
	
	it('Open Website', function() {
		hP.openFunction();
		console.log("open webpage");
	});

	it('Dummy Test', function() {     
        expect(util.getCurrentURL()).toMatch('http://phptravels.com/demo');
    });

	xit('click on Sign in', function(){
       homePage.clickSignIn();
       expect(util.getCurrentURL()).toMatch('http://phptravels.com/demo/');
	   console.log("Finding the web page");
    });

	xit('should be able to enter user name', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		$('.user_email').clear();
		$('.user_email').sendKeys(browser.params.login.username);
		$('.user_password').clear();
		$('.user_password').sendKeys(browser.params.login.password);	
	});
	
	xit('click Login button', function() {
		homepage.clickLoginButton();
		browser.sleep(2000);
		var errorMessage = element(by.css('.notifications-error__list-item'));
		expect(errorMessage.getText()).toContain('Invalid email or password');
	});
});