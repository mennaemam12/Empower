document.addEventListener("DOMContentLoaded", function() {
    const jobSelect = document.getElementById("job-select");
    const companySelect = document.getElementById("company-select");
  
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

  function accept(){
    const user=document.getElementById("userId");
    const job=document.getElementById("jobId");
    const accepted=document.getElementById(user.innerHTML);
    $.ajax({
      url: `/dashboard/accept`,
      method: "POST",
      data:{user:user.innerHTML,job:job.innerHTML},
      success: function (success) {
          $(accepted).html("CV Accepted");
      },
      error: function (err) {
          console.log(err);
        },
      });
    
  }

 
 
  
  
  
  
  