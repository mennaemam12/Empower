const expandIcon = document.querySelector('.comment-icon');
const expandedContent = document.querySelector('.expanded-content');

let ongo = sessionStorage.getItem('ongo');

if(ongo == 'true'){
   document.getElementById("changable").innerHTML="My Profile"
   document.getElementById("changable").setAttribute("href", "myprofile");
   document.getElementById("upload").style.display="flex";
    document.getElementById("dropdown").style.display="flex";
}
else
{
    document.getElementById("upload").style.display="none";
    document.getElementById("dropdown").style.display="none";
}
expandIcon.addEventListener('click', () => {
    if (expandedContent.style.display === 'none') {
        expandedContent.style.display = 'block';
        expandIcon.classList.add('expanded');
    } else {
        expandedContent.style.display = 'none';
        expandIcon.classList.remove('expanded');
    }
});