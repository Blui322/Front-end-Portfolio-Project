//console.log('Results.js is loaded!');


const resultsContainer = document.getElementById('results');

document.addEventListener("DOMContentLoaded", function () {
    const resultsContainer = document.getElementById('results');
    const params = new URLSearchParams(window.location.search);
    const animeSearch = params.get('q');

    if (animeSearch) {
        // Call the function to search for anime
        searchAnime(animeSearch);
    } else {
        resultsContainer.innerHTML = '<h2><p>No search query provided.</p></h2>';
    }
});

// Function to handle dynamic search results
async function searchAnime(animeSearch) {
    //console.log('Searching for:', animeSearch);
    const url = `https://api.jikan.moe/v4/anime?q=${animeSearch}`;
    try {
        const api = await fetch(url);
        const data = await api.json();

        // Clear previous search results
        resultsContainer.innerHTML = "";

        data.data.forEach(item => {
            const divItem = document.createElement("div");
            const imageUrl = item.images.jpg.large_image_url;
            //console.log('Image URL:', item.images.jpg.large_image_url);
            divItem.innerHTML = `
                <div class="card">
                    <img src="${imageUrl}" alt="images" ">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text"><b>background:</b>${item.background}</p>
                        <p class="card-text"><b>source:</b>${item.source}</p>
                        <p class="card-text"><b>episodes:</b>${item.episodes}</p>
                        <p class="card-text"><b>rating:</b>${item.rating}</p>
                        <p class="card-text"><b>synopsis:</b>${item.synopsis}</p>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(divItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
