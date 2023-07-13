// Get the user ID
const userId = document.body.dataset.userId;

// Fetch the user's stocks
fetch(`/userstocks/${userId}`)
  .then((response) => response.json())
  .then((stocks) => {
    // Loop over the stocks
    stocks.forEach((stock) => {
      // Fetch the price for each stock
      fetch(`/stocks/${stock.tickerSymbol}`)
        .then((response) => response.json())
        .then((data) => {
          // According to Alpha Vantage API, the price is located under "Global Quote" -> "05. price"
          const price = data["Global Quote"]["05. price"];

          // Use the ticker symbol to get the right cell
          const priceCell = document.getElementById(
            `${stock.tickerSymbol}Price`
          );

          // Insert the price into the cell
          if (priceCell) {
            priceCell.textContent = price;
          }
        })
        .catch((error) => console.error("Error:", error));
    });
  })
  .catch((error) => console.error("Error:", error));
