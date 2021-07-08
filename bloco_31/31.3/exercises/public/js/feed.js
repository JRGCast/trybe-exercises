const socket = window.io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
  console.log('like clicked');
});

document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);

  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});
