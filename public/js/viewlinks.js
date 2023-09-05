document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the common links container
    const viewLinksIndexButton = document.getElementById("viewLinksIndex");
    const linksContainer = document.getElementById("linksContainer");

    // Define the links for each page
    const indexLinks = [
        { text: "Link 1", url: "https://example.com/link1" },
        { text: "Link 2", url: "https://example.com/link2" },
        // Add more links as needed
    ];

    const categoryLinks = [
        { text: "Category Link 1", url: "https://example.com/category/link1" },
        { text: "Category Link 2", url: "https://example.com/category/link2" },
        // Add more links as needed
    ];

    // Function to display links in the common links container
    function displayLinks(links) {
        // Clear previous content
        linksContainer.innerHTML = "";

        // Create a list of links
        const ul = document.createElement("ul");

        links.forEach(function (link) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        });

        // Append the list to the container
        linksContainer.appendChild(ul);
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

