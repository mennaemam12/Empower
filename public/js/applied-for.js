const expandIcon = document.querySelector('.comment-icon');
const expandedContent = document.querySelector('.expanded-content');

expandIcon.addEventListener('click', () => {
    if (expandedContent.style.display === 'none') {
        expandedContent.style.display = 'block';
        expandIcon.classList.add('expanded');
    } else {
        expandedContent.style.display = 'none';
        expandIcon.classList.remove('expanded');
    }
});