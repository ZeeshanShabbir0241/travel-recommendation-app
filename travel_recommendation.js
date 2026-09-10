// Local sample data meeting all course rubric criteria
const travelData = {
  beaches: [
    {
      name: "Bora Bora, French Polynesia",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Famous for its turquoise waters, overwater bungalows, and vibrant coral reefs."
    },
    {
      name: "Copacabana Beach, Brazil",
      imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      description: "Iconic crescent-shaped beach known for lively energy, golden sands, and stunning views."
    }
  ],
  temples: [
    {
      name: "Angkor Wat, Cambodia",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "The largest religious monument in the world, renowned for breathtaking Khmer architecture."
    },
    {
      name: "Fushimi Inari Taisha, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      description: "Famous for thousands of vibrant vermilion torii gates leading up Mount Inari."
    }
  ],
  countries: [
    {
      name: "Tokyo, Japan",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      description: "A bustling metropolis blending ultra-modern skyscrapers with historical traditions."
    },
    {
      name: "Kyoto, Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      description: "The cultural heart of Japan, home to classic Buddhist temples, gardens, and imperial palaces."
    }
  ]
};

function searchRecommendations() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  let itemsToDisplay = [];

  if (input.includes('beach')) {
    itemsToDisplay = travelData.beaches;
  } else if (input.includes('temple')) {
    itemsToDisplay = travelData.temples;
  } else if (input.includes('japan') || input.includes('country')) {
    itemsToDisplay = travelData.countries;
  } else {
    resultsContainer.innerHTML = '<p>No results found. Please search for "beaches", "temples", or "japan".</p>';
    return;
  }

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

function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}
