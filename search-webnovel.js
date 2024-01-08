// search-webnovel.js
document.addEventListener("DOMContentLoaded", function() {
  const tagButtons = document.querySelectorAll(".tag-btn");
  const boxContainers = document.querySelectorAll(".box-container");

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedTag = button.getAttribute("data-tag");

      boxContainers.forEach(box => {
        const boxTags = box.getAttribute("data-tags").split(" ");

        if (selectedTag === "all" || boxTags.includes(selectedTag)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});

/*
document.addEventListener("DOMContentLoaded", function() {
  const tagButtons = document.querySelectorAll(".tag-btn");
  const boxContainers = document.querySelectorAll(".box-container");

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedTag = button.getAttribute("data-tag");

      boxContainers.forEach(box => {
        const boxTags = box.getAttribute("data-tags").split(" ");

        if (boxTags.includes(selectedTag) || selectedTag === "all") {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
*/
