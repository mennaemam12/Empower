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
    
    },
    error: function (err) {
         console.log(err);
    }
});
}

