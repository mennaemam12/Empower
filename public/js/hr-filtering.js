document.addEventListener("DOMContentLoaded", function() {
    const jobSelect = document.getElementById("job-select");
    const companySelect = document.getElementById("company-select");
    var newElement;
  
    jobSelect.addEventListener("change", function() {
      const selectedJob = jobSelect.value;
      console.log("Selected job:", selectedJob);
      $.ajax({
        url: `/dashboard/select`,
        method: "POST",
        data: { job: selectedJob,filterJob:true},
        success: function (companies) {
            const compSelect = $("#company-select");
            compSelect.empty();
     
            for (let i = 0; i < companies.length; i++) {
                const companyName = companies[i];
                compSelect.append($('<option>', {
                  value: companyName,
                  text: companyName
                }));
            }
        },
        error: function (err) {
            console.log(err);
          },
        });
    });
  
    companySelect.addEventListener("change", function() {
      const selectedCompany = companySelect.value;
      console.log("Selected company:", selectedCompany);
      $.ajax({
        url: `/dashboard/select`,
        method: "POST",
        data: { company: selectedCompany,filterJob:false},
        success: function (jobs) {
            console.log(jobs);
            const jobSelect = $("#job-select");
            jobSelect.empty();

            for (let j = 0; j < jobs.length; j++) {
                const jobName = jobs[j];
                jobSelect.append($('<option>', {
                  value: jobName,
                  text: jobName
                }));
            }
        },
        error: function (err) {
            console.log(err);
          },
        });
    });

    const submitButton = document.getElementById("filter-button");
    const form = document.getElementById("myForm");
  
    submitButton.addEventListener("click", function() {
      form.submit();
    });
  });

  function openResumePopup(resumeUrl) {
    const popup = document.getElementById("resume-popup");
    const iframe = document.getElementById("resume-iframe");
    iframe.src = resumeUrl;
    popup.style.display = "block";
  }
  
  function closeResumePopup() {
    const popup = document.getElementById("resume-popup");
    const iframe = document.getElementById("resume-iframe");
    iframe.src = "";
    popup.style.display = "none";
  }

  function accept(id){
    const job=document.getElementById("jobId");
    const accepted=document.getElementById(id);
    $.ajax({
      url: `/dashboard/accept`,
      method: "POST",
      data:{user:id,job:job.innerHTML},
      success: function (response) {
        if(response==="true"){
        
          newElement = document.createElement('a');
          newElement.setAttribute('class', 'cv-accepted');
          newElement.setAttribute('href', '#');
          newElement.setAttribute('id', "curr");
          newElement.textContent = 'Send Offer';
          newElement.onclick = function() {
            finalAcceptance(id); // Make sure 'id' is defined in this context
            return false; // Prevent the default behavior of the anchor link
          };
          accepted.replaceWith(newElement)
          
        }
      },
      error: function (err) {
          console.log(err);
        },
      });
    
  }

  function finalAcceptance(id){
    const job=document.getElementById("jobId");
    const button = document.getElementById("curr");
    console.log(button);
    $.ajax({
      url: `/dashboard/final`,
      method: "POST",
      data:{user:id,job:job.innerHTML},
      success: function (response) {
        if(response==="true"){
         
          $(button).html("Accepted");
          $(button).prop("disabled", true);
        }
      },
      error: function (err) {
          console.log(err);
        },
      });
    
  }

 
 
  
  
  
  
  