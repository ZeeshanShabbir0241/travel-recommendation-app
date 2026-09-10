// Data store with recommendations and reliable images
const travelData = {
  beaches: [
    {
      name: "Bora Bora, French Polynesia",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Famous for its turquoise lagoons, overwater bungalows, and vibrant coral reefs ideal for snorkeling."
    },
    {
      name: "Copacabana Beach, Rio de Janeiro",
      imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
      description: "An iconic 4km stretch of golden sand known for its lively boardwalk energy, volleyball, and mountain backdrop."
    }
  ],
  temples: [
    {
      name: "Angkor Wat, Cambodia",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "The largest religious monument in the world, renowned for its ancient Khmer architecture and grand towers."
    },
    {
      name: "Fushimi Inari Taisha, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "Famous for thousands of vibrant vermilion torii gates winding up scenic Mount Inari."
    }
  ],
  countries: [
    {
      name: "Tokyo, Japan",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      description: "A dynamic metropolis blending neon-lit skyscrapers with historic temples and world-class cuisine."
    },
    {
      name: "Kyoto, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "The cultural heart of Japan, featuring traditional wooden houses, classical gardens, and imperial palaces."
    }
  ]
};

// Main search execution function
function searchRecommendations() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('results');
  
  // Clear previous search output
  resultsContainer.innerHTML = '';

  if (!input) {
    resultsContainer.innerHTML = '<p style="text-align:center; width:100%;">Please enter a search term (e.g., "beach", "temple", "japan").</p>';
    return;
  }

  let itemsToDisplay = [];

  // Match keyword variations for Beaches, Temples, and Countries
  if (input.includes('beach')) {
    itemsToDisplay = travelData.beaches;
  } else if (input.includes('temple')) {
    itemsToDisplay = travelData.temples;
  } else if (input.includes('japan') || input.includes('country') || input.includes('countries')) {
    itemsToDisplay = travelData.countries;
  } else {
    resultsContainer.innerHTML = '<p style="text-align:center; width:100%;">No matches found. Try searching for "beach", "temple", or "japan".</p>';
    return;
  }

  // Render cards to DOM
  itemsToDisplay.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

// Clear button functionality
function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}
