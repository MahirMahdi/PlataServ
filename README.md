<a name="readme-top"></a><!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://ik.imagekit.io/y4cguk6dk/plataserv.png?updatedAt=1682949861978" alt="Logo" width="128" height="128">
  </a>

  <h1 align="center">Plataserv - Restaurant Management System</h3>
</div>

<!-- ABOUT THE PROJECT -->

## About Plataserv

This is a comprehensive restaurant management system that includes a point-of-sale (POS) system, speed of service tracking, financial reporting, inventory management, and a PAR (Periodic Automatic Replenishment) builder. This project is built using React, Express, MongoDB, Node.js, Chakra UI, React-Chartjs-2, Imagekit, and Axios.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Node.js][Node.js]][Node.js-url]
- [![Express][Express]][Express-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- [![ChakraUI][Chakra]][Chakra-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- **POS system**: Users can create orders, and track order statuses.

- **Speed of service tracking**: The system records the time it takes to serve orders and provides reports on average service times.

- **Financial reporting**: The system generates reports and charts on revenue, expenses, and wastes, with the ability to filter by date range.

- **Inventory management**: The system is capable of monitoring the inventory levels and providing automatic alerts for items that are either running low on stock or approaching their expiration dates.

- **PAR builder**: The system generates PARs based on inventory levels, sales, and waste data, helping users manage their inventory more effectively.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Clone the repo
   ```sh
     git clone https://github.com/MahirMahdi/PlataServ.git
   ```
### Client

1. Change directory and install dependencies
   ```sh
   cd client
   npm install
   ```
2. Create a `.env`
   ```
   cp .env.example .env
   ```
3. Go to `.env` and fill up the credential using your [imagekit](https://imagekit.io/) url
   ```
   VITE_CDN_URL = 'YOUR_IMAGEKIT_URL'
   ```
4. Start the server
    ```bash
    npm start
    ```
This will start the server on http://localhost:5173

### Server

1. Change directory and install dependencies
   ```sh
   cd server
   npm install
   ```
2. Create a `.env`
   ```
   cp .env.example .env
   ```
3. Go to `.env` and fill up the credentials using your [imagekit](https://imagekit.io/) URL, private key, and public key
   ```
   CDN_URL = 'YOUR_IMAGEKIT_URL'
   CDN_PRIVATE_KEY = 'YOUR_IMAGEKIT_PRIVATE_KEY'
   CDN_PUBLIC_KEY = 'YOUR_IMAGEKIT_PUBLIC_KEY'
   ```
4. Start the server
    ```bash
    npm start
    ```
This will start the server on http://localhost:5000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[MongoDB]: https://img.shields.io/badge/MongoDB-126149?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://refine.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-333333?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://openai.com/
[Express]: https://img.shields.io/badge/Express-FDFDFD?style=for-the-badge&logo=express&logoColor=black
[Express-url]: https://appwrite.io/
[Chakra]: https://img.shields.io/badge/Chakra-67CACB?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-url]: https://chakra-ui.com/
