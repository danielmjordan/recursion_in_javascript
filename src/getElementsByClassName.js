// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*

### 4: getElementsByClassName
- [ ] Implement `getElementsByClassName` with your own code in `src/getElementsByClassName.js`
- [ ] You should use `document.body`, `element.childNodes`, and `element.classList`
*/

var getElementsByClassName = function(className, inputedElement) {
  // Your code here
  var element = inputedElement || document.body;

  var result = [];

  if (element.classList) {
    if (element.classList.contains(className)) {
      result.push(element);
    }
  }

  if(element.hasChildNodes()) {
    var children = element.childNodes;
    children.forEach(function(child){
      result = result.concat(getElementsByClassName(className, child));
    })
  }

  return result;

};


