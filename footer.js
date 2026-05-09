function create_footer() {
    console.log("hej")
    fetch("C:\Users\au779167\OneDrive - Aarhus Universitet\Documents\GitHub\victorvadmandjensen.github.io\footer.html", {
        method: "GET"})
        .then((response) => response.text())
        .then(html => {document.getElementById("footer").innerHTML=html;
    });
}

create_footer();