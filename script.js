// function scrollAndCenter(elementId) {
//   var element = document.getElementById(elementId);
//   element.scrollIntoView({block: "center"});
// }

function scrollAndCenter(elementId) {
  var element = document.getElementById(elementId);
  var topOffset = window.innerHeight / 2 - element.offsetHeight / 2;
  
  window.scrollTo({
      top: element.offsetTop - topOffset,
      behavior: 'smooth'
  });
}

function toggleButton() {
  var button = document.querySelector('.toggle-button');
  button.classList.toggle('active');
}



var state = 0;
function toggleDarkMode() {
  var colorMode = document.querySelector("#mode");
  var Mode = document.querySelector("#colorMode");

  var background = document.querySelector("#body");
  if(state == 0){
    colorMode.setAttribute("href", "dark-mode.css");
    state = 1;
    Mode.innerHTML = "Dark Mode";
    background.style.backgroundColor = "#0D0221";
  }
  else{
    colorMode.setAttribute("href", "light-mode.css");
    state = 0;
    background.style.backgroundColor = "#FFC8FB";
    Mode.innerHTML = "Light Mode";
  }
}


document.getElementById('submit-btn').addEventListener('click', function() {
  var commentInput = document.getElementById('comment-input').value;
  if (commentInput.trim() !== '') {
      addComment(commentInput);
      document.getElementById('comment-input').value = ''; // Clear input after submitting
  }
});

function addComment(comment) {
  var commentContainer = document.getElementById('comments-container');
  var commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.textContent = comment;
  commentContainer.appendChild(commentElement);
}


/*
.resume{
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2vw;
    border: #000000;
    height: 5vw;
    width: 10vw;
    background-color: #FFD3E8;

}

.resumeClass{
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2vw;
    border: #000000;
    height: 5vw;
    width: 10vw;
    background-color: #FFD3E8;

}

*/


/*
</div>
    <div class="resumeClass">
        <div class="resume">
            <a href="resume.pdf" styl>View Resume</a>
        </div>
    </div>

*/
