"use strict";

var extend = require('extend');
var url = browser.params.url;
var username  = browser.params.username;
var password = browser.params.password;

var EC = protractor.ExpectedConditions;

var defaultConfig = {
    pageUrl:                      url 
}

//homePage.prototype.open = function() {
  //  console.log(this.pageUrl);
   // browser.get(this.pageUrl);
//};

//homePage.prototype.clickOrders = function(){
  //  element(by.linkText('Order   ')).click();
//};

//omePage.prototype.expectOrderTitle = function() {
	//element(by.css('.title')).toMatch('Choose your product');
//};

//homePage.prototype.expectPricingModule = function() {
	//element(by.css('.wow.fadeIn.well.animated').isPresent()).toBe(true);
//};

//homePage.prototype.orderNowButton = function() {
	//element(by.css('.wow.fadeIn.btn.btn-success.btn-block.animated').isPresent()).toBe(true);
//};

//home.protoytpe.demoButton = function () {
	//element(by.css('.wow.fadeIn.btn.btn-primary.btn-block.animated').isPresent()).toBe(true);
//};

//home.protoytpe.moreDetailsButton = function () {
	//element(by.css('.wow.fadeIn.btn.btn-default.btn-block.animated').isPresent()).toBe(true);
//};

