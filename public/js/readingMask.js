const readingMask = document.querySelector('.reading-mask');
const parent=document.getElementsByClassName("row g-4");
const categories=parent[0].childNodes;
const texts=document.getElementsByClassName("text-center mb-5 wow fadeInUp");
const tab1=document.getElementById("tab-1");
const jobs = tab1.querySelectorAll('.job-item.p-4.mb-4');
const tab1JobItems = document.querySelectorAll('#tab-1 .job-item');
const jobMask=document.getElementById("job-mask");
const maskButton=document.getElementById("mask-button");

let enabled=false;
readingMask.style.display='none';
jobMask.style.display='none';

function categoryMouseEnter() {
    const categoryItem=this.cloneNode(true);
    categoryItem.querySelector('h6').style.fontSize = '35px';
    categoryItem.style.width='400px';
    categoryItem.style.transition='none';
    categoryItem.style.animation='none';
    readingMask.innerHTML = '';
    readingMask.appendChild(categoryItem);
    readingMask.style.display = 'block';
}

function categoryMouseLeave() {
    readingMask.innerHTML = "";
    readingMask.style.display = 'none';
}

function mouseEnterHandler(){
    const jobItemClone = this.cloneNode(true);
    const jobItemTitle = jobItemClone.querySelector('h5');
    jobItemTitle.style.fontSize = '30px';
    const text=jobItemClone.querySelectorAll('span');
    text.forEach(tex=>{
        tex.style.fontSize = '18px';
     });
    const smallElement=jobItemClone.querySelector('small');
    smallElement.style.marginTop = '50px';
    smallElement.style.fontSize = '14px';


    jobMask.innerHTML = '';
    jobMask.appendChild(jobItemClone);
    jobMask.style.display = 'block';
}

function mouseLeaveHandler(){
    jobMask.innerHTML = '';
    jobMask.style.display = 'none';
}




 // Function to update the reading mask position based on mouse movement
 function updateReadingMaskPosition(event) {
    readingMask.style.transform = `translate(${event.clientX+5}px, ${event.clientY+5}px)`;
    jobMask.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}


function buttonPressed(){
    console.log(enabled);
    if(enabled===false){
        maskButton.style.borderColor="green";
        readingMask.style.display='block';
        jobMask.style.display='block';



        categories.forEach(category=>{
            category.addEventListener('mouseenter', categoryMouseEnter);
            category.addEventListener('mouseleave', categoryMouseLeave);
        })

        tab1JobItems.forEach(jobItem => {
            jobItem.addEventListener('mouseenter',mouseEnterHandler);
            jobItem.addEventListener('mouseleave',mouseLeaveHandler);
        });
        
        // Add an event listener to update the reading mask position on mousemove
        
        document.addEventListener('mousemove', updateReadingMaskPosition);
        enabled=true;
    }
    else if(enabled===true){
        categories.forEach(category=>{
            category.removeEventListener('mouseenter', categoryMouseEnter);
            category.removeEventListener('mouseleave', categoryMouseLeave);
        })

        tab1JobItems.forEach(jobItem => {
            jobItem.removeEventListener('mouseenter',mouseEnterHandler);
            jobItem.removeEventListener('mouseleave',mouseLeaveHandler);
        });

        document.removeEventListener('mousemove', updateReadingMaskPosition);
        readingMask.style.display='none';
        jobMask.style.display='none';
 
        maskButton.style.borderColor="white";

        enabled=false;
    }
}

