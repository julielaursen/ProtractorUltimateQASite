/**
 * Helper functions used by different specs are defined in this class
 */
"use strict";
function getCurrentURL(){
    return browser.getCurrentUrl().then(function (currentUrl) {
        console.log("the current URL is = " + currentUrl)
        return currentUrl;
    })
}

/**
 * This function Generates a random string which will be used to make any name (policy,content,identity,response or any other input)
 * unique
 */
function getRandomString(charLength){
    var randomText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < charLength; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return randomText;
}

/**
 * Returns a random integer between range [min, max] including both min and max
 * @param min - smallest integer of the range
 * @param max - largest integer of the range
 * @returns {*} - an integer between min and max (both inclusive)
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function requires webelement as parameter and will take you that particular webelement on page
function scrollToWebElement(el){
    return browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement());
}

// This function will scroll to bottom of page
function scrollToBottom(){
    return browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
}

function scrollToTop(){
    return browser.executeScript('window.scrollTo(0,0)');
}

// This Function is used to verify whether a String array is sorted based on 'ascending' or 'descending' passed value
function verifyStringSorting(el, sortValue){
    return el.getText().then(function (name) {
        var sorted = [];
        for (var i = 0; i < name.length; i++) {
            if (name[i] != undefined &&  name[i] != '' ) {
                    sorted.push(name[i].toLowerCase());
                }
        }
        if (sortValue == 'ascending') {
            for (var i=0;i<=sorted.length -2 ; i++){
                if (sorted[i]>sorted[i+1]) {
                    return false;
                }
            }}
        if (sortValue == 'descending') {
            for (var i=0;i<=sorted.length -2 ; i++){
                if (sorted[i]<sorted[i+1]) {
                    return false;
                }
            }}
        return true;
    })
}

// This Function is used to verify whether a String array is sorted based on 'ascending' or 'descending' passed value (With Attribute Name)
function verifyStringSortingWithAttrName(el, attrName, sortValue){
    return el.getAttribute(attrName).then(function (name) {
        var sorted = [];
        for (var i = 0; i < name.length; i++) {
            if (name[i] != undefined &&  name[i] != '' ) {
                sorted.push(name[i].toLowerCase());
            }
        }
        if (sortValue == 'ascending') {
            for (var i=0;i<=sorted.length -2 ; i++){
                if (sorted[i]>sorted[i+1]) {
                    return false;
                }
            }}
        if (sortValue == 'descending') {
            for (var i=0;i<=sorted.length -2 ; i++){
                if (sorted[i]<sorted[i+1]) {
                    return false;
                }
            }}
        return true;
    })
}

// This Function is used to verify whether a Number array is sorted based on 'ascending' or 'descending' passed value
function verifyNumberSorting(el, sortValue){
    return el.getText().then(function (order) {
        var neworder=[];
        for (var counter=0;counter<=order.length-1;counter++) {
            if (order[counter] != '-') {
                neworder.push(Number(order[counter]));
            }
        }
        if (sortValue == 'ascending') {
            for (var i=0;i<=neworder.length -1 ; i++){
                if (neworder[i]>neworder[i+1]) {
                    return false;
                }
            }}
        if (sortValue == 'descending') {
            for (var i=0;i<=neworder.length -1 ; i++){
                if (neworder[i]<neworder[i+1]) {
                    return false;
                }
            }}
        return true;
    });
}

function getbrowserType(){
    return browser.getCapabilities().then(function (cap){
        return  cap.get('browserName');
    });
}

function getOSType(){
    return browser.getCapabilities().then(function (cap){
        return  cap.get('platform');
    });
}

/**
 * This function returns current date time string in 'yyyy/mm/dd hh:mm UTC' format.
 */

function getCurrentDateTimeUTCFormat() {

    // new Date(value) has some problem in IE browser. Hence not running this code on IE
    return 0;

    if (browserType() == 'chrome') {
        var currentDateTime = new Date();
        var date = '' + (currentDateTime.getUTCDate());
        var month = '' + (currentDateTime.getUTCMonth() + 1);
        var year = currentDateTime.getUTCFullYear();
        var minutes = currentDateTime.getUTCMinutes();
        var hours = currentDateTime.getUTCHours();
        var seconds = currentDateTime.getUTCSeconds();

        if (month.length < 2) month = '0' + month;
        if (date.length < 2) date = '0' + date;
        console.log(year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ' ' + 'UTC');
        return year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ' ' + 'UTC';

    }
    else {
        console.log('Brower: Not chrome: skipping Modification time check');
        return 0
    }
}

function waitForAngular() {
    var EC = protractor.ExpectedConditions;
    browser.waitForAngular();
    //browser.wait(EC.invisibilityOf(element.all(by.css('[class="hydra-spinner"]')).first()), 50000);
}

module.exports = {
    getCurrentURL : getCurrentURL,
    getRandomString: getRandomString,
    getRandomInteger: getRandomInteger,
    scrollToWebElement: scrollToWebElement,
    scrollToBottom: scrollToBottom,
    scrollToTop: scrollToTop,
    verifyStringSorting:verifyStringSorting,
    verifyStringSortingWithAttrName:verifyStringSortingWithAttrName,
    verifyNumberSorting:verifyNumberSorting,
    getbrowserType: getbrowserType,
    getCurrentDateTimeUTCFormat : getCurrentDateTimeUTCFormat,
    getOSType: getOSType,
    waitForAngular: waitForAngular
};
