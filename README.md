# Web Crawler COVID-19 Data

This is a simple web crawling application built with Node.js and Express.js to fetch historical COVID-19 data from a public API and export it to a JSON and Excel file. The application uses the `axios` library for making HTTP requests, `xlsx` for exporting data to Excel format, and `fs` for writing files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/covid-crawler.git
cd covid-crawler
```

Install the dependencies:

```bash
npm install
```

Ensure the following directory exists for saving the data:

```bash
mkdir data
```

## Usage

To start the application, run:

```bash
npm start
```

The server will start running on [http://localhost:3000](http://localhost:3000).

## API

### Endpoints

**GET /crawl:** Fetches the historical COVID-19 data and saves it to both JSON and Excel files.

#### Example Request

To fetch and store the COVID-19 data, open your browser or use any API client (e.g., Postman) and navigate to:

```bash
GET http://localhost:3000/crawl
```

The data will be saved in the `data/` directory as:

- `results.json`: The raw JSON data.
- `results.xlsx`: The Excel version of the data.

#### Example Response

Upon a successful request, you will receive a response like this:

```json
{
  "message": "Crawling success! Data saved to results.json and results.xlsx",
  "data": [
    {
      "date": "1/22/20",
      "cases": 555,
      "deaths": 17,
      "recovered": 28
    },
    {
      "date": "1/23/20",
      "cases": 654,
      "deaths": 18,
      "recovered": 30
    }
    ...
  ]
}
```

## Project Structure

```plaintext
.
├── data                # Folder to store the results
│   ├── results.json    # Crawled JSON data
│   └── results.xlsx    # Crawled data exported to Excel
├── src
│   └── index.js        # Main server code
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

## Technologies

- **Node.js:** Server-side JavaScript runtime
- **Express.js:** Web framework for Node.js
- **Axios:** HTTP client for making requests
- **xlsx:** Library for generating Excel files
- **FS:** Node.js File System module for reading/writing files

## Contributing

Feel free to contribute to this project by submitting a pull request. If you find a bug or have suggestions for improvement, please open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```

You can copy and paste this into your `README.md` file. Let me know if you need any more modifications!
```
