const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

app.use(cors({
  origin: ['http://localhost:4200'],
  exposedHeaders: ['content-disposition']
}));

// parse application/json
app.use(bodyParser.json({ limit: '64mb' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 200);
});

app.get('/products/:id', (req, res) => {
  fs.readFile('./JSON/products.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      const products = JSON.parse(data);
      const id = +req.params.id;
      const product = products.find(product => product.id === id);
      if(!!product) {
        res.send(product);
      } else {
        res.sendStatus(404);
      }
    }
  });
});

app.get('/products', (req, res) => {
  fs.readFile('./JSON/products.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/products', (req, res) => {
  fs.readFile('./JSON/products.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      const request = req.body;
      if(!request['name'] || !request['description'] || !request['price']) {
        res.sendStatus(400);
      } else {
        const products = JSON.parse(data);
        const last = !!products?.length ? products.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current) : undefined;
        const id = !!last ? last['id'] + 1 : 1;
        products.push({
          id,
          name: request['name'],
          description: request['description'],
          price: request['price'],
          quantity: request['quantity'] ?? 0
        });

        const json = JSON.stringify(products);
        fs.writeFile('./JSON/products.json', json, 'utf8', (err) => {
          if(!!err) {
            res.sendStatus(500);
          } else {
            res.send({ id });
          }
        });
      }
    }
  });
});

app.delete('/products/:id', (req, res) => {
  fs.readFile('./JSON/products.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      let products = JSON.parse(data);
      const id = +req.params.id;
      if(!products.some(product => product.id === id)) {
        res.sendStatus(404);
      } else {
        products = products.filter(product => product.id !== id);

        const json = JSON.stringify(products);
        fs.writeFile('./JSON/products.json', json, 'utf8', (err) => {
          if(!!err) {
            res.sendStatus(500);
          } else {
            res.send({ id });
          }
        });
      }
    }
  });
});

app.patch('/products/:id', (req, res) => {
  fs.readFile('./JSON/products.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      const request = req.body;
      if(!request['name'] && !request['description'] && !request['quantity'] && !request['price']) {
        res.sendStatus(400);
      } else {
        let products = JSON.parse(data);
        const id = +req.params.id;
        let product = products.find(product => product.id === id);
        let index = products.findIndex(product => product.id === id);
        if(!product) {
          res.sendStatus(404);
        } else {
          products[index] = {
            'id': id,
            'name': !!request['name'] ? request['name'] : product['name'],
            'description': !!request['description'] ? request['description'] : product['description'],
            'quantity': !!request['quantity'] || request['quantity'] === 0 ? request['quantity'] : product['quantity'],
            'price': !!request['price'] || request['price'] === 0 ? request['price'] : product['price']
          };
          const json = JSON.stringify(products);
          fs.writeFile('./JSON/products.json', json, 'utf8', (err) => {
            if(!!err) {
              res.sendStatus(500);
            } else {
              res.send({ id });
            }
          });
        }
      }
    }
  });
});

app.get('/customers', (req, res) => {
  fs.readFile('./JSON/customers.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.get('/customers/:id', (req, res) => {
  fs.readFile('./JSON/customers.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      const customers = JSON.parse(data);
      const id = +req.params.id;
      const customer = customers.find(customer => customer.id === id);
      if(!!customer) {
        res.send(customer);
      } else {
        res.sendStatus(404);
      }
    }
  });
});

app.get('/orders', (req, res) => {
  fs.readFile('./JSON/orders.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/orders', (req, res) => {
  fs.readFile('./JSON/orders.json', 'utf8', (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      const request = req.body;
      if(!request['productId'] || !request['customerId'] || !request['description'] || !request['total']) {
        res.sendStatus(400);
      } else {
        fs.readFile('./JSON/customers.json', 'utf8', (err, customersData) => {
          const customers = JSON.parse(customersData);
          if(!customers.some(customer => customer.id === request['customerId'])) {
            res.sendStatus(404);
          } else {
            fs.readFile('./JSON/products.json', 'utf8', (err, productsData) => {
              const products = JSON.parse(productsData);
              if(!products.some(product => product.id === request['productId'])) {
                res.sendStatus(404);
              } else {
                const orders = JSON.parse(data);
                const last = !!orders?.length ? orders.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current) : undefined;
                const id = !!last ? last['id'] + 1 : 1;
                orders.push({
                  id,
                  productId: request['productId'],
                  customerId: request['customerId'],
                  description: request['description'],
                  total: request['total'] ?? 0
                });

                const json = JSON.stringify(orders);
                fs.writeFile('./JSON/orders.json', json, 'utf8', (err) => {
                  if(!!err) {
                    res.sendStatus(500);
                  } else {
                    res.send({ id });
                  }
                });
              }
            })
          }
        });
      }
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
