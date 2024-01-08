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
クラス名がcollapse-btn の要素がクリックされた時に、クラス名がtag-list の要素を表示・非表示にする
*/
document.addEventListener("DOMContentLoaded", function() {
  const collapseBtn = document.querySelector(".collapse-btn");
  const tagList = document.querySelector(".tag-list");

  collapseBtn.addEventListener("click", () => {
    tagList.classList.toggle("show-tags");
  });
});
