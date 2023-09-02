const readingMask = document.querySelector('.reading-mask');
const parent=document.getElementsByClassName("row g-4");
const categories=parent[0].childNodes;
const texts=document.getElementsByClassName("text-center mb-5 wow fadeInUp");
const jobs=document.getElementById("tab-1").children;


categories.forEach(category=>{
    category.addEventListener('mouseenter', ()=>{
        readingMask.innerHTML=category.innerHTML;
        readingMask.querySelector('h6').style.fontSize='35px';
        readingMask.style.display = 'block';
    });
    category.addEventListener('mouseleave', () => {
        readingMask.innerHTML="";
        readingMask.style.display = 'none';
    });
})

for(var i=0;i<4;i++){
    jobs[i].addEventListener('mouseenter', ()=>{
        console.log(jobs);
        readingMask.innerHTML=jobs[i].innerHTML;
        //readingMask.querySelector('h5').style.fontSize='35px';
        readingMask.style.width='100%';
        readingMask.style.display = 'block';
    });
    jobs[i].addEventListener('mouseleave', () => {
        readingMask.innerHTML="";
        readingMask.style.display = 'none';
    });
}

// texts.forEach(text=>{
//     text.addEventListener('mouseenter', ()=>{
//         readingMask.innerHTML=text.innerHTML;
//         readingMask.style.fontSize='35px'
//         readingMask.style.display = 'block';
//     });
//     text.addEventListener('mouseleave', () => {
//         readingMask.innerHTML="";
//         readingMask.style.display = 'none';
//     });
// })

// Function to update the reading mask position based on mouse movement
function updateReadingMaskPosition(event) {
    readingMask.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}



// Add an event listener to update the reading mask position on mousemove

document.addEventListener('mousemove', updateReadingMaskPosition);

