let searchInputel = document.getElementById("searchInput");
let searchResultsel = document.getElementById("searchResults");

function createandappendsearchresult(result) {
    let {
        title,
        link,
        description
    } = result;
    // create result item -div container
    let containerEl = document.createElement("div");
    containerEl.classList.add("result-item");
    searchResultsel.appendChild(containerEl);
    //  anchor title 
    let titleel = document.createElement("a");
    titleel.classList.add("result-title");
    titleel.textContent = title;
    titleel.href = link;
    titleel.target = "_blank";
    containerEl.appendChild(titleel);
    // breakel
    let tiltebreakel = document.createElement("br");
    containerEl.appendChild(tiltebreakel);
    // url Element
    let urlel = document.createElement("a");
    urlel.classList.add("result-url");
    urlel.href = link;
    urlel.target = "_blank";
    urlel.textContent = link;
    containerEl.appendChild(urlel);
    let linebreakel = document.createElement("br");
    containerEl.appendChild(linebreakel);
    //description Element
    let parael = document.createElement("p");
    parael.classList.add("link-description");
    parael.textContent = description;
    containerEl.appendChild(parael);
}

function display(searchResults) {
    for (let result of searchResults) {
        createandappendsearchresult(result);
        console.log(result);
    }

}

function search(event) {
    if (event.key === "Enter") {
        let searchInput = searchInputel.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                display(search_results);
            });
    }
}
searchInputel.addEventListener("keydown", search);