  /*
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        */
var containerDiv = document.createElement('div')
document.body.appendChild(containerDiv)
containerDiv.style.border = "thick dotted #0000FF";

var paragraphs = ["Yesterday was good", "Today is great", "Tomorrow will be better"]
// console.log(paragraphs.length)
for(i = 0; i < paragraphs.length; i++) {
  var newP = document.createElement('p')
  newP.textContent = paragraphs[i]
  containerDiv.appendChild(newP)
}

        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */
  var button = document.createElement('button')
  button.textContent = 'enable dark mode'
  containerDiv.appendChild(button)
  for(i = 0; i < 2; i++) {
    button.style.backgroundColor= 'black';
      button.style.color = 'white';
      // button.style.padding = '15 px';
      button.style.padding = "15px";
  };
  


  
  
  
  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */


  var darkModeIsActive = false;

  var buttonSelector = document.querySelector('button');
  buttonSelector.addEventListener('click', function() {
    if(darkModeIsActive) {
        document.body.style.backgroundColor= 'white';
        containerDiv.style.backgroundColor = "#777";
        containerDiv.style.color = "white";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        darkModeIsActive = false;
    } else {
        document.body.style.backgroundColor= 'black';
        containerDiv.style.backgroundColor = "#777";
        containerDiv.style.color = "white";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        darkModeIsActive = true;
      }
    
  })
  
  


         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */

