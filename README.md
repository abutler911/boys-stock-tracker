# Boys Stock Tracker

## Description

Boys Stock Tracker is a web application that allows users to keep track of their stock portfolio. Users can add stocks to their portfolio, providing details like stock symbol, number of shares, purchase price, and date of purchase.

## Technologies

- Node.js
- Express.js
- MongoDB
- EJS Templating Engine
- Passport.js for Authentication
- Bcrypt.js for Password Hashing

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abutler911/boys-stock-tracker.git

    Navigate into the project directory:

    bash
   ```

cd boys-stock-tracker

Install the dependencies:

bash

npm install

Create a .env file in the root directory and add your MongoDB connection string and session secret:

bash

DB_STRING=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
SESSION_SECRET=your_secret

Run the server:

bash

    npm start

    The application should now be running at http://localhost:3000.

Features

    User registration and login functionality.
    Ability for a user to add stocks to their portfolio.
    Fetching live stock prices from the Alpha Vantage API.

Future Enhancements

    Ability to remove or edit stocks from the portfolio.
    More comprehensive dashboard to display changes in stock value over time.
    Enhance stock search and add functionality.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
License

MIT
