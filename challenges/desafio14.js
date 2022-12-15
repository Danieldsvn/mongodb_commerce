db.produtos.find({
  ingredientes: { $eq: "picles" },  
}, {
  nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 }, _id: 0,
});
