const pdfContainer = document.getElementById('pdf-container');
const pdfViewer = document.getElementById('pdf-viewer');
const pdfNotFound = document.getElementById('pdf-not-found');
const pdfUrl = '/uploads/Menna Resume.pdf'; // Replace with actual URL

fetch(pdfUrl)
  .then(response => {
    if (response.status === 200) {
      pdfViewer.src = pdfUrl;
      pdfContainer.style.display = 'block';
      pdfNotFound.style.display = 'none';
      document.getElementById("uploadLabel").innerHTML="Resume Uploaded";
    } else {
      pdfContainer.style.display = 'none';
      pdfNotFound.style.display = 'block';
    }
  })
  .catch(error => {
    console.error('Error checking PDF:', error);
  });