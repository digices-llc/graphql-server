/**
 * GraphQL Server
 *
 * @file      index
 * @url       https://github.com/digices-llc/graphql.git
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * @version   0.1.0
 * @since     0.1.0
 */

// Require Modules

const express = require('express');

// Create the Server

const server = express();

// Define Routes

server.get('/', (request, response) => {
  response.send('<h1>☕️ Hello Express</h1>');
});

// Start the Server

server.listen(4000, () => {
  console.log('Server listening at http://localhost:4000');
});
