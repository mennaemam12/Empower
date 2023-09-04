const readingMask = document.querySelector('.reading-mask');
const parent=document.getElementsByClassName("row g-4");
const categories=parent[0].childNodes;
const texts=document.getElementsByClassName("text-center mb-5 wow fadeInUp");
const tab1=document.getElementById("tab-1");
const jobs = tab1.querySelectorAll('.job-item.p-4.mb-4');
const tab1JobItems = document.querySelectorAll('#tab-1 .job-item');
const jobMask=document.getElementById("job-mask");

var enabled=false;

while(!enabled){
    readingMask.style.display='none';
    jobMask.style.display='none';
}

function buttonPressed(id){
    if(!enabled){
        document.getElementById(id).style.borderColor="green";
        enabled=true;
        readingMask.style.display='block';
        jobMask.style.display='block';
    }
    else{
        enabled=false;
        readingMask.style.display='none';
        jobMask.style.display='none';
    }
}



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

console.log(jobs);
jobs.forEach(job=>{
    job.addEventListener('mouseenter', ()=>{
        readingMask.innerHTML=job.innerHTML;
        //readingMask.querySelector('h5').style.fontSize='35px';
       
        readingMask.style.display = 'block';
    });
    job.addEventListener('mouseleave', () => {
        readingMask.innerHTML="";
        readingMask.style.display = 'none';
    });
});


function handleJobItemHover(jobItem, readingmask) {
    jobItem.addEventListener('mouseenter', () => {
        const jobItemClone = jobItem.cloneNode(true);
        const jobItemTitle = jobItemClone.querySelector('h5');
        jobItemTitle.style.fontSize = '30px';
        const text=jobItemClone.querySelectorAll('span');
        text.forEach(tex=>{
            tex.style.fontSize = '18px';
        });
        const smallElement=jobItemClone.querySelector('small');
        smallElement.style.marginTop = '50px';
        smallElement.style.fontSize = '14px';


        readingmask.innerHTML = '';
        readingmask.appendChild(jobItemClone);
        readingmask.style.display = 'block';
    });

    jobItem.addEventListener('mouseleave', () => {
        readingmask.innerHTML = '';
        readingmask.style.display = 'none';
    });
}

tab1JobItems.forEach(jobItem => {
    handleJobItemHover(jobItem, jobMask);
});

// Function to update the reading mask position based on mouse movement
function updateReadingMaskPosition(event) {
    readingMask.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    jobMask.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}



// Add an event listener to update the reading mask position on mousemove

document.addEventListener('mousemove', updateReadingMaskPosition);

