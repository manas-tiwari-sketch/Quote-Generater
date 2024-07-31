document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#new-quote');
  const quoteElement = document.querySelector('.quote');
  const personElement = document.querySelector('.person');

  // Ensure the elements are found
  if (!btn) {
    console.error('Button with ID "new-quote" not found.');
    return;
  }
  if (!quoteElement) {
    console.error('Element with class "quote" not found.');
    return;
  }
  if (!personElement) {
    console.error('Element with class "person" not found.');
    return;
  }

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      quoteElement.innerHTML = data.content;
      personElement.innerHTML = `- ${data.author}`;
    } catch (error) {
      console.error('Fetch error:', error);
      quoteElement.innerHTML = 'An error occurred while fetching the quote.';
      personElement.innerHTML = '';
    }
  };

  btn.addEventListener('click', fetchQuote);

  // Fetch a quote when the page loads
  fetchQuote();
});
