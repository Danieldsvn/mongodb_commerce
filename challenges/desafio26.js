// Query 1
db.produtos.updateMany({
  "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 },
}, {
  $addToSet: {
    tags: "contém sódio", 
  },
});

// Query 2
db.produtos.find({}, {
  nome: 1, tags: 1, _id: 0,
});