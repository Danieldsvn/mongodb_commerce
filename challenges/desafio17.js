db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.findOne({}, {
  _id: 0,
});