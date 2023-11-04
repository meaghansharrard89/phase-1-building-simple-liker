// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// const likeButton = document.getElementsByClassName(['like-glyph']);
// likeButton.addEventListener('click', mimicServerCall() {

//   //when the "server" returns a failure status
//   if (server === "failure") {
//     //respond to error using the .then(() => {}) block
//     //then respond to error using .catch(() => {}) block
//     //display error modal by removing .hidden class
//     //display the server error message in the modal
//     //use setTimeout to hide the modal after 3 seconds/add .hidden class

// //when the "server" returns a success status
//   } if (server === "success") {
//     //change heart to FULL_HEART
//     //add the .activated-heart class to make it appear red
//   }
//   //when user clicks on a full heart:
//   //change FULL_HEART back to EMPTY_HEART
//   //remove the .activated-heart class

//   //only manipulate the DOM once the server request reponds
//   //don't make the heart full until you're inside a successful .then block
//   //keep all styling rules inside style.css
// });

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
