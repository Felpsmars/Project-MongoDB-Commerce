db.produtos
.find({ vendidos: { $ne: 50 }, tags: null },
    { nome: 1, _id: 0, vendidos: 1, tags: 1 });  