const fs = require('fs');

module.exports = (dragSource, dropTarget) => {
 const dragMockScript = fs.readFileSync('node_modules/drag-mock/dist/drag-mock.min.js', 'utf8');

 browser.timeouts('script', 500);

 return browser.executeAsync((text, source, target, done) => {
   const script = document.createElement('script');

   script.text = text;
   document.getElementsByTagName('head')[0].appendChild(script);

   const dragElement = document.querySelector(source);
   const dropElement = document.querySelector(target);

   window.dragMock
     .dragStart(dragElement)
     .dragEnter(dropElement)
     .dragOver(dropElement)
     .delay(250)
     .drop(dropElement)
     .then(done);
 }, dragMockScript.toString(), dragSource, dropTarget);
};
