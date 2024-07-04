// search-webnovel.js
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const boxes = document.querySelectorAll('.box');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterBoxes);
    });

    function filterBoxes() {
        const selectedTags = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        boxes.forEach(box => {
            const boxTags = box.dataset.tags.split(' ');
            const shouldShow = selectedTags.length === 0 || selectedTags.every(tag => boxTags.includes(tag));
            box.style.display = shouldShow ? 'block' : 'none';
        });
    }
});
