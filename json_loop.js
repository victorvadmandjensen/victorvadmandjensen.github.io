/*
// below is an example of how the papers should be structured
<p class="mb-1 text-start"><b>Jensen, V. V.</b>, Christensen, E., Christiansen, I., Pham, K., Hansen, N. B., & Persson, J. S. 
    2025. 
    Designing for Digital Mediation of the Volatile Electricity Prices in the European Energy Crisis.
    In <i>Scandinavian Journal of Information Systems</i>.
    <!-- DOI: 10.1007/s10257-025-00704-7. -->
    <p class="text-start">
        <a href = 'https://aisel.aisnet.org/sjis_preprints/1/' target="_blank"> Preprint </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
</p> 

// and a paper might look like this data structure
    "authors": "Jensen, V. V., Christensen, E., Christiansen, I., Pham, K., Hansen, N. B., & Persson, J. S.",
    "year": "2025. ",
    "title": "Designing for Digital Mediation of the Volatile Electricity Prices in the European Energy Crisis.",
    "venue": "Scandinavian Journal of Information Systems",
    "link": "https://aisel.aisnet.org/sjis_preprints/1/"


*/ 



document.addEventListener("DOMContentLoaded", function() {
    // fetch the JSON with GET, resolve the response by returning the JSON in the response, then get the JSON
    var json_data;

    fetch("https://victorvadmandjensen.github.io/academic_papers.json", {
                        method: "GET"
                        })
                        .then(function(response) {
                            return response.json(); 
                        })
                        .then( data => {
                            json_data = data;
                            //console.log(json_data);
                            display_papers(json_data, 2026);
                        
                        });
                        
    const yearButtons = document.querySelectorAll(".year-button");
    yearButtons.forEach(button => {
        button.addEventListener("click", function() {
            const year = Number(this.getAttribute("data"));
            console.log(year);
            document.getElementById("paper_container").innerHTML = "";
            display_papers(json_data, year);
        })
    })
    
});

function display_papers(papers, chosen_year) {
    const container = document.getElementById("paper_container");
    container.innerHTML = "";

    papers.forEach(element => {
            if (element.year.trim() == chosen_year) {
                const paperElement = document.createElement("p");
                paperElement.className = "mb-1 text-start";

                console.log(element);

                paperElement.innerHTML = `
                ${element.authors}
                ${element.year}.
                ${element.title}.
                <i>${element.venue}</i>.
                <p class="text-start"> 
                    <a href = ${element.link} target="_blank">Link</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                `;

                container.appendChild(paperElement);
            }
    });
}

