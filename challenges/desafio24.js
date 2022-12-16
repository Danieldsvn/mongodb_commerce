// Query 1
db.produtos.updateMany({}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 },      
    }, 
  },
});

// Query 2
db.produtos.find({}, {
  nome: 1, valoresNutricionais: 1, _id: 0,
});