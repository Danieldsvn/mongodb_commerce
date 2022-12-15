db.produtos.find({
  $nor: [
     { tags: { $exists: true } },
     { vendidos: { $eq: 50 } },
    ],    
}, {
  nome: 1, vendidos: 1, _id: 0,
});