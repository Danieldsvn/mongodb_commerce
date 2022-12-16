// Query 1
db.produtos.updateMany({
  "valoresNutricionais.2.percentual": { $gte: 40 },
}, {
  $addToSet: {
    tags: "muito sódio", 
  },
});

// Query 2
db.produtos.find({}, {
  nome: 1, tags: 1, _id: 0,
});
