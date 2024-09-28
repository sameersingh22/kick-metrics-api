<div align="center">
<img src="https://raw.githubusercontent.com/sameersingh22/kick-metrics/refs/heads/develop/src/assets/images/logo.webp" alt="Project Logo"  width="200" height="200">
</div>

# KickMetricsAPI

KickMetricsAPI is a backend service for the soccer metrics tracker web application KickMetrics. This API provides endpoints for managing player performance metrics, fetching player data, and retrieving team information. Built with Express, it supports Read and Update operations for player metrics and allows seamless data management.

<a href="https://github.com/sameersingh22/kick-metrics">Check out the front end repo</a>


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Player Endpoints](#player-endpoints)
  - [Team Endpoints](#team-endpoints)
- [Data Storage](#data-storage)

## Installation <a name="installation"></a>

To install and set up the KickMetrics API, follow these steps:

- Clone the repository:

```
git clone https://github.com/sameersingh22/kick-metrics-api/
cd kick-metrics-api
```

- Install dependencies: Make sure you have Node.js installed. Then, run:
```
npm install
```
- Start the server: To start the server in development mode with automatic restarts, use:
```
npm run dev
```
Alternatively, to start the server normally, use:
```
npm start
```
- Access the API: Once the server is running, you can access the API at http://localhost:8080/api.

## Usage <a name="usage"></a>
After installing the API, you can interact with it using a tool like Postman or cURL. The API provides endpoints for managing player performance metrics and retrieving team information.

## API Endpoints <a name="api-endpoints"></a>

### Player Endpoints <a name="player-endpoints"></a>
- **GET** `/api/players`
  - Returns a list of all players.

- **GET** `/api/players/:id`
  - Returns detailed information for a specific player identified by `id`.

- **PUT** `/api/update/:id`
  - Updates the goals and assists metrics for a player identified by `id`.

### Team Endpoints <a name="team-endpoints"></a>
- **GET** `/api/teams/:id`
  - Returns the team information and its associated players for the specified `id`.

## Data Storage <a name="data-storage"></a>
Player and team data are stored in a JSON file located in the `data` directory. The API reads from and writes to this file for all operations.
