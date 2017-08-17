"use strict";

var extend = require('extend');
var url = browser.params.url;
var username  = browser.params.username;
var password = browser.params.password;

var homePage = function() {

	this.openFunction = function() {
    // console.log(url);
    browser.get(browser.params.url);
	};

	
	this.clickSignIn = function(){
    element(by.linkText('Login automation')).click();
	};

};

module.exports = homePage;
//Do I encapsulate the previous functions and variables in a function called var homePage = function()?
//we declare it as exports.homePage = homePage;
//I've seen this written as modules.export = new homePage(); in the page object file instead of declaring it in the specs file 
//when this is does under var homePage = function() other functions are called using modules such as this.enterValue = function() {};
