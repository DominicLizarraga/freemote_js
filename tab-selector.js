// function to remove show-active class & add to clicked
function setNewActive(el) {
    // select all .content-body
    var contentBodies = document.getElementsByClassName('content-body')
    for (var contentBody of contentBodies) {
        // remove .show-active
        contentBody.classList.remove('show-active');
    }
    console.log(el.textContent)
    // add .show-active to clicked
    document.getElementById(el.textContent.trim()).classList.add('show-active');
    
  var tabs = document.getElementsByClassName('tab');
  for(var tab of tabs) {
    tab.classList.remove('tab-active');
  }
  el.classList.add('tab-active');
  
}
    
    // console.log('hello')
    


// select, tab class and loop trough 
var tabs = document.getElementsByClassName('tab');
    for (var tab of tabs) {
        
        // add event listener to each tab
        tab.addEventListener('click', function(e) {
            setNewActive(e.currentTarget)
          console.log(e)
        })
    };
    

