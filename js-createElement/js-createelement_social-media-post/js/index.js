console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");
const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";
const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = " ♥ Like";

newFooter.appendChild(newSpan);
newFooter.appendChild(newButton);

newPost.appendChild(newParagraph);
newPost.appendChild(newFooter);

const body = document.querySelector("body");
body.appendChild(newPost);

newButton.addEventListener("click", handleLikeButtonClick);
