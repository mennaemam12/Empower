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
            const jobSelect = $("#job-select");
            jobSelect.empty();
            jobSelect.append($('<option>', {
                value: "",
                text: "select job"
              }));
            $.each(companies, function(index, option) {
                jobSelect.append($('<option>', {
                  value: option.value,
                  text: option.text
                }));
            });
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
            const compSelect = $("#company-select");
            compSelect.empty();
            compSelect.append($('<option>', {
                value: "",
                text: "select company"
              }));
            $.each(jobs, function(index, option) {
                jobSelect.append($('<option>', {
                  value: option.value,
                  text: option.text
                }));
            });
        },
        error: function (err) {
            console.log(err);
          },
        });
    });
  });