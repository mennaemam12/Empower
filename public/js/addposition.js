document.getElementById('file').addEventListener('change', function (e) {
    const uploadedImage = document.getElementById('uploaded-image');
    const imageframe=document.getElementById("custum-file-upload");
    const file = e.target.files[0];

    if (file) {
        // Display the selected image
        uploadedImage.style.display = 'flex';
        uploadedImage.style.padding="1rem";
        imageframe.style.display="none";
        uploadedImage.src = URL.createObjectURL(file);
    } else {
        // If no file is selected, hide the image
        uploadedImage.style.display = 'none';
        uploadedImage.src = '#'; // Clear the image source
    }
});
let number12=450;
let i=2;
let count=0;
function addSkill() {
    // Get the value from the input field
    var skill = document.getElementById("Skills").value;

    // Create a new span element for the skill
    var skillSpan = document.createElement("span");
    skillSpan.textContent = skill;

    // Append the span to the skillsContainer
    var skillsContainer = document.getElementById("skillsContainer");
    skillsContainer.appendChild(skillSpan);

    // Clear the input field after adding the skill
    document.getElementById("Skills").value = "";

    // Check if the total width of spans exceeds 600px
    let totalWidth = 0;
    var spans = skillsContainer.querySelectorAll('span');
    var ko2;
    spans.forEach(function (span) {
        totalWidth += span.offsetWidth + parseInt(getComputedStyle(span).marginRight);

    });

    // If total width exceeds 600px, add a line break (up to 4 times)
    if (totalWidth > number12) {
        for (var i = 0; i < 2; i++) {
            skillsContainer.appendChild(document.createElement('br')); 
        } 
        count++;
        number12*=i; 
        i+=0.2;  
    }
}


$(document).ready(function () {
    $('#myFrom21').submit(function (event) {
      event.preventDefault(); 
      const skillValues = [];
      const CompanyName = $('#CompanyName').val();
      const loc = $('#loc').val();
      const title = $('#title').val();
      const Salary = $('#Salary').val();
      const description = $('#description1').val();
      $('#skillsContainer span').each(function(index, element) {
        skillValues.push($(element).text());
       });
      const work_models = $('input[name="value-radio"]:checked').val();
      const Disability = $('input[name="value2-radio"]:checked').val();
      const position_nedd = $('input[name="value3-radio"]:checked').val();


      
  
        const formData = new FormData();
        formData.append('CompanyName', CompanyName);
        formData.append('loc', loc);
        formData.append('imageFile', $('#file')[0].files[0]);
        formData.append('title', title);
        formData.append('Salary', Salary);
        formData.append('description', description);
        skillValues.forEach(function(skill) {
            formData.append('skills', skill);
        });
        formData.append('work_models', work_models);
        formData.append('Disability', Disability);
        formData.append('position_need', position_nedd);

// Now, the formData object contains all the variables you want to send in your POST request

    
  
      $.ajax({
        url: '/addposition',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    });
  });