// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.getElementsByClassName('like-glyth')
let o = hearts.length
for (i = 0; i < o; i++) {
  hearts[i].addEventListener("click", mimicServerCall())
    .then(function(response){
      response.json
    })
    .then(function(json){
      console.log(json)
    })
    .catch(function(){
      console.log("Error")
      
    })
  }

//hearts[i].addEventListener("click", mimicServerCall())

//console.log(hearts)



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
