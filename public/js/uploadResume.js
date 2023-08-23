const openPopupButton = document.getElementById('openPopup');
const editButton = document.getElementById('edit-button');
const closePopupButton = document.getElementById('closePopup');
const pdfPopup = document.getElementById('pdfPopup');
const pdfFrame = document.getElementById('pdfFrame');
const pdfUrl = '/uploads/resume.pdf'; // Replace with actual URL 

fetch(pdfUrl)
  .then(response => {
    if (response.ok) {
      openPopupButton.style.display = 'block';
      editButton.style.display = 'block';
      document.getElementById("uploadLabel").innerHTML="Resume Uploaded";
      pdfToText();
    } else {
      openPopupButton.style.display = 'none';
      editButton.style.display = 'none';
    }
  })
  .catch(error => {
    console.error('Error checking PDF availability:', error);
  });

openPopupButton.addEventListener('click', () => {
  pdfFrame.src = pdfUrl;
  pdfPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  pdfPopup.style.display = 'none';
});

function pdfToText(){
  $.ajax({
    url:`/uploadResume/filter`,
    method: 'POST',
    data: {Path:pdfUrl},
    success: function (response) {
      if(response){
        const jobList = $('#job-list'); // Get the element where you want to display jobs

        // Clear existing content
        jobList.empty();

          response.forEach(data=>{
            const jobItem = `
                <div class="job-item p-4 mb-4">
                <div class="row g-4">
                <div class="col-sm-12 col-md-8 d-flex align-items-center">
                    <img class="flex-shrink-0 img-fluid border rounded" id="cimg"  src="/img/${data.job.Company}.jpg" alt="${data.job.Company} Logo" style="width: 80px; height: 80px;">
                    <div class="text-start ps-4">
                        <h5 class="mb-3">${data.job.Name}</h5>
                        <h5 id="company" style="display:none;">${data.job.Company}</h5>
                        <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${data.job.Location}</span>
                        <span class="text-truncate me-3"><i class="fa-solid fa-map-pin" style="color:rgb(18, 18, 104)"></i> ${data.job.Place}</span>
                        <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${data.job.Salary}</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                    </div>
                    <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                </div>
            </div>
                </div>
            `;
            jobList.append(jobItem);
          })
      }
        
    },
    error: function (err) {
         console.log(err);
    }
});
}



