const searchInput = document.getElementById("searchValue");
const searchClick = document.getElementById("search");
const API = "https://api.giphy.com/v1/gifs/search?api_key=eNZlPkO49tfPCTfOc4Kp25wFfJIhidnB&q=";
const apiDevam = "&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips";



searchClick.addEventListener("click", async() => {
    const fullAPI = API + searchInput.value + apiDevam;
    const request = await fetch(fullAPI);
    const response = await request.json();
    const data = console.log(response);
});