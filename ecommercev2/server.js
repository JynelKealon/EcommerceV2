const fs = require("fs")
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
// // const path = require('path');
const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  


app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'EcommerceV2'
});

connection.connect((err) => {
    if(err) {
        console.log(`cannot connect`);
        console.log(err.errno);
        return;
    }
    console.log(`connection worked`)
})

app.get('/api/products', (req,res) => {
    const query = 'SELECT * FROM products';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Internal Servor Error');
        } else {
            res.status(200).json(results);
        }
    });
});


 // port it will run on.
app.listen(port, () => {  // starts server on this port.
    console.log(`console listening on ${port}`);
});

// const {
//     createPool
// } = require('mysql2')

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "EcommerceV2"
// })

// pool.query(`SELECT * from products`, (err, result, fields) => {
//     if(err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })

// const mysql = require('mysql2');
// const React = require('react');
// const ReactDOM = require('react-dom');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'EcommerceV2'
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');

//   connection.query('SELECT * FROM products', (error, results, fields) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       return;
//     }

//     // Render the component with the products data
//     ReactDOM.render(<ProductList products={results} />, document.getElementById('root'));
//   });
// });

// function ProductList({ products }) {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
