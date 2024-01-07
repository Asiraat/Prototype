// search-webnovel.js

// script.js
function filterSelection(tag) {
  const boxes = document.querySelectorAll('.box');
  
  boxes.forEach(box => {
    if (tag === 'all' || box.classList.contains(tag)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}


/*
function filterSelection(tag) {
  const boxes = document.querySelectorAll('.box');
  
  if (tag === 'all') {
    boxes.forEach(box => {
      box.classList.add('show');
    });
  } else {
    boxes.forEach(box => {
      if (box.classList.contains(tag)) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  }
}


*/
