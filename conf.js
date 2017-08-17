// conf.js
//var jasmineReporters = require('jasmine-reporters');
var os = require('os'); os.tmpDir = os.tmpdir;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['qaSpec.js'],


 //module.exports = { 
  params: {
	  url : 'http://phptravels.com/demo/'
	  /* login: {
        url: 'http://phptravels.com/demo/',
        username: 'juliel@ibm.com',
		password: 'password' 
   
		}*/
  }
 };