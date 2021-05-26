// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//declare variables for elements that need selected.
const heartGlyphs = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal');

//add a click event listener to the .like-glyphs
//this has to be inside of a loop to apply the listener to multiple elements in a clean fashion
//write callback function for click event listener
heartGlyphs.forEach(function(ele){
  ele.addEventListener('click', function(e) {
      //CBF invokes mimicServerCall if heart is empty
      mimicServerCall("URL")
      //write then that changes heart to full and adds .activated-heart class
        .then(function(){
          if(e.target.innerText === EMPTY_HEART){
            e.target.innerText = FULL_HEART;
            e.target.classList.add("activated-heart");
          }else if(e.target.innerText === FULL_HEART){
            //if heart is full, CBF removes.activated-heart class and changes back to empty heart
            e.target.classList.remove("activated-heart")
            e.target.innerText = EMPTY_HEART;
          }; 
        })
        .catch(function(error){
          //write catch that removes the .hidden class from error modal and displays the server message
          errorModal.className = '';
          errorModal.innerText = error;
          //write setTimeout to hide modal and message after 3 seconds
          setTimeout(() => errorModal.className = "hidden", 3000);
        });
  });
});











//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
