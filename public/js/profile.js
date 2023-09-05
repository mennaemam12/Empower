document.addEventListener("DOMContentLoaded", function () {
    let fileInput = document.getElementById("file-input");
    let fileList = document.getElementById("files-list");
    let numOfFiles = document.getElementById("num-of-files");

    function updateNumOfFiles() {
        const selectedFiles = fileList.querySelectorAll(".file-item").length;
        numOfFiles.textContent = selectedFiles > 0 ? `${selectedFiles} Files Selected` : "No Files Chosen";
    }

    function createFileItem(file) {
        let listItem = document.createElement("div");
        listItem.className = "file-item"; // Add a class for styling
        let fileName = file.name;
        let fileSize = (file.size / 1024).toFixed(1);

        // Create the structure for each file item
        listItem.innerHTML = `
            <span class="img1s">${fileName}</span>
            <span class="filesize">${fileSize}KB</span>
            <div class="btnmarg">
                <button class="buton">Remove</button>
            </div>
        `;

        // Adding event listener to remove button
        let button = listItem.querySelector(".buton");
        button.addEventListener("click", () => {
            listItem.remove();
            fileInput.value = ''; // Clear the file input selection
            updateNumOfFiles();
        });

        return listItem;
    }

    fileInput.addEventListener("change", () => {
        for (const file of fileInput.files) {
            let listItem = createFileItem(file);
            fileList.appendChild(listItem);
        }

        updateNumOfFiles();
    });

    // Prevent the form from submitting and refreshing the page
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();
        // You can perform your AJAX request or other processing here
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone-input");
    const bioInput = document.getElementById("bio-input");
    const submitButton = document.getElementById("submit-button");
  
    // Function to show the submit button when changes occur in input fields
    function showSubmitButton() {
      submitButton.style.display = "block"; // Display the submit button
    }
  
    // Add event listeners to input fields
    phoneInput.addEventListener("input", showSubmitButton);
    bioInput.addEventListener("input", showSubmitButton);
  });
  $(document).ready(function () {
    const skillsList = $("#skills-list");
    const newSkillInput = $("#new-skill");
    const addSkillButton = $("#add-skill-button");
  
    addSkillButton.click(function () {
      let newSkill = newSkillInput.val().trim();
  
      if (newSkill) {
        newSkill = newSkill.toUpperCase();
        $.ajax({
          url: "/myprofile/addskill",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify({ skill: newSkill }),
          success: function (data) {
            if (data.message === "Skill added successfully") {
              // Add the skill to the list
              const skillItem = $("<li>").text(newSkill);
              skillsList.append(skillItem);
  
              // Clear the input field
              newSkillInput.val("");
            } else {
              // Handle errors if needed
              console.error(data.error);
            }
          },
          error: function (error) {
            console.error(error);
          },
        });
      }
    });
  });
  

