console.log('Hello!');

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', handleSearch);

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    // Example search results (replace with your own logic)
    const results = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry'];
    const filteredResults = results.filter(item => item.toLowerCase().includes(searchTerm));

    filteredResults.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      searchResults.appendChild(li);
    });
  }
});
