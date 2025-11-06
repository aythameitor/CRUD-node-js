var express = require('express');
const faker= require('faker');

const router= express.Router();

router.get('/', function(req, res){
  const products=[];
  const {size}=req.query;
  const limit=size ||5;
  for (let index=0; index<limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

router.get('/:id', function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Tecapplado',
    'price': 2800,
    'category': 'tecnology'
  });
});

module.exports = router;
