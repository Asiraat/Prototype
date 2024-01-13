// search-webnovel.js
document.addEventListener('DOMContentLoaded', function() {
  const collapseBtn = document.querySelector('.collapse-btn');
  const tagsContent = document.querySelector('.tags-content');

  collapseBtn.addEventListener('click', function() {
    if (tagsContent.style.display === 'none' || tagsContent.style.display === '') {
      tagsContent.style.display = 'block';
    } else {
      tagsContent.style.display = 'none';
    }
  });

  // 追加されたボタンに対するイベントリスナー
  const tagBtns = document.querySelectorAll('.tag-btn');
  tagBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const tag = btn.getAttribute('data-tag');
      console.log(`Tag selected: ${tag}`);
      // ここで必要な処理を追加（例えば選択されたタグに基づいてフィルタリングするなど）
    });
  });
});


/*
document.addEventListener("DOMContentLoaded", function() {
  const collapseBtn = document.querySelector(".collapse-btn");
  const tagList = document.querySelector(".tag-list");
  const boxContainers = document.querySelectorAll(".box-container");

  collapseBtn.addEventListener("click", () => {
    tagList.classList.toggle("show-tags");
  });

  collapseBtn.addEventListener("click", () => {
    const tagsToShow = ['all', 'tag1', 'tag2', 'tag3'];

    boxContainers.forEach(box => {
      const boxTags = box.getAttribute("data-tags").split(" ");

      if (tagsToShow.some(tag => boxTags.includes(tag))) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
*/
/*
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


document.addEventListener("DOMContentLoaded", function() {
  const collapseBtn = document.querySelector(".collapse-btn");
  const tagList = document.querySelector(".tag-list");

  collapseBtn.addEventListener("click", () => {
    tagList.classList.toggle("show-tags");
  });
});

*/
