const searchInput = document.getElementById("searchValue");
const searchClick = document.getElementById("search");
const API = "https://api.giphy.com/v1/gifs/search?api_key=eNZlPkO49tfPCTfOc4Kp25wFfJIhidnB&q=";
const apiDevam = "&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips";



searchClick.addEventListener("click", async() => {
    const fullAPI = API + searchInput.value + apiDevam;
    const request = await fetch(fullAPI);
    const response = await request.json();
    clearUI();
    showGiphy(response.data);
});

const showUI = document.getElementById("showGiphy");

const showGiphy = data => {
    data.forEach(function(element) {
        const tag = `
       <div class="col-md-3">
            <div class="card">
                <img src="${element.images.original.url}" alt="${element.title}" class="card-img-top">
            </div>
        </div>
       `;
       showUI.insertAdjacentHTML("beforeend", tag);
    });
};

const clearUI = ()=> {
    showUI.innerHTML = "";
}

