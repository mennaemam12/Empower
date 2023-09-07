document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the common links container
    const viewLinksIndexButton = document.getElementById("viewLinksIndex");


    const linksList = document.getElementById("linksList");



    // Function to display links in the modal container
    function displayLinks(links) {
        // Clear previous content
        linksList.innerHTML = "";

        // Create a list of links
        links.forEach(function (link) {
            const li = document.createElement("li");
            li.style.listStyle = "square"; 
            const myList = document.querySelector("ul"); 
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.text;
            li.appendChild(a);
            myList.appendChild(li);

            ;
        });
        document.getElementById("linksModal").style.display="block";
    }

    // Add click event listener to the "View Links" button
    viewLinksIndexButton.addEventListener("click", function () {
        // Display the links in the modal container
        this.style.borderColor="green";
        displayLinks(getAllLinksOnPage()); // Function to get all links on the page
    });

    // Function to get all links on the page
    function getAllLinksOnPage() {
        const allLinks = [];
        const pageLinks = document.querySelectorAll("a.linkss");
        let i=0;
        pageLinks.forEach(function (link) {
            if(i<=10)
            {
                allLinks.push({ text: link.textContent, url: link.href });
            }
            i++; 

            
        });
        console.log(allLinks);
        return allLinks;
        
    }
});