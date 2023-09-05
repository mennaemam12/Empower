document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the common links container
    const viewLinksIndexButton = document.getElementById("viewLinksIndex");


    const linksList = document.getElementById("linksList");


    const links = tempDiv.querySelectorAll('a');


    // Function to display links in the modal container
    function displayLinks() {
        // Clear previous content
        linksList.innerHTML = "";

        // Create a list of links
        links.forEach(function (link) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.href;
            a.textContent = link.innerHTML;
            li.appendChild(a);
            linksList.appendChild(li);
        });
    }

    // Add click event listener to the "View Links" button
    viewLinksIndexButton.addEventListener("click", function () {
        // Display the links in the modal container
        displayLinks(getAllLinksOnPage()); // Function to get all links on the page
    });

    // Function to get all links on the page
    function getAllLinksOnPage() {
        const allLinks = [];
        const pageLinks = document.querySelectorAll("a"); // Adjust the selector as needed

        pageLinks.forEach(function (link) {
            allLinks.push({ text: link.textContent, url: link.href });
        });

        return allLinks;
    }
});