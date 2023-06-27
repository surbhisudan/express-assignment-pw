const http = require('http');

const PORT = 3015;
// Sample data for men and women products
const menProducts = [
  { id: 1, name: "shirt" },
  { id: 2, name: "Jeans" },
  { id: 3, name: "Shoes "},
  // Add more products here...
];

const womenProducts = [
  { id: 1, name: "Dresses" },
  { id: 2, name: "Heels" },
  { id: 3, name: "Jwellery" },
  
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
   
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(menProducts.slice(0, 10)));
  } else if (req.url === '/women') {
   
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(womenProducts.slice(0, 10)));
  } else {
    // Page not found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
