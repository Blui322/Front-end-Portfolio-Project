
     const searchForm = document.getElementById('searchForm');

                // Event listener for the search form
                searchForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const animeInput = document.getElementById('search');
                    const animeSearch = animeInput.value;
                    

                    // Redirect to the results page with the search query as a parameter
                    window.location.href = `results.html?q=${encodeURIComponent(animeSearch)}`;
                
                });
