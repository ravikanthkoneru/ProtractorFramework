import { browser } from "protractor"

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.sleep(6000);
      console.log("Last Step to Execute");
        
      
    });
  });