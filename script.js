// Attach Enter key event listener on load
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  if (searchInput) {
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        searchRecommendations();
      }
    });
  }
});

// Main search function
function searchRecommendations() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('resultsContainer');

  // Clear previous results
  resultsContainer.innerHTML = '';

  if (!input) {
    alert('Please enter a search keyword such as "beach", "temple", "country", "Australia", or "Japan".');
    return;
  }

  // Fetch API data
  fetch('travel_recommendation_api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load travel data.');
      }
      return response.json();
    })
    .then(data => {
      let results = [];

      // Keyword 1: Beach / Beaches
      if (input.includes('beach')) {
        results = data.beaches || [];
      } 
      // Keyword 2: Temple / Temples
      else if (input.includes('temple')) {
        results = data.temples || [];
      } 
      // Keyword 3: Country / Countries (Returns cities from ALL countries)
      else if (input.includes('country') || input.includes('countries')) {
        if (data.countries) {
          data.countries.forEach(country => {
            if (country.cities) {
              results.push(...country.cities);
            }
          });
        }
      } 
      // Keyword 4: Specific Country Name (e.g., "Australia", "Japan", "Brazil")
      else {
        if (data.countries) {
          const matchedCountry = data.countries.find(country => 
            country.name.toLowerCase().includes(input) || input.includes(country.name.toLowerCase())
          );
          if (matchedCountry && matchedCountry.cities) {
            results = matchedCountry.cities;
          }
        }
      }

      // Handle no matching results
      if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No matching recommendations found. Try searching for "beach", "temple", "country", "Australia", or "Japan".</p>';
        return;
      }

      // Render cards
      results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}">
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        `;
        resultsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultsContainer.innerHTML = '<p class="no-results">Error loading recommendations. Ensure you are running a live server and travel_recommendation_api.json exists in your root folder.</p>';
    });
}

// Clear search input and results container
function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('resultsContainer').innerHTML = '';
}
