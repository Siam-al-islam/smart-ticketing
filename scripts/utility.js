// add class 
function addClassName(elementId, className) {
    const element = document.querySelector(elementId);
    element.classList.add(className);
}
// remove class 
function removeClassName(elementId, className) {
    const element = document.querySelector(elementId);
    element.classList.remove(className);
}