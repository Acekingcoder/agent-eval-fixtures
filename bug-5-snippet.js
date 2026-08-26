app.post('/orders', async (req, res) => {
  const order = new Order({
    customerId: req.body.customerId,
    amount: req.body.amount,
    deliveryAddress: req.body.deliveryAddress
  });
  await order.save();
  res.status(201).json(order);
});
