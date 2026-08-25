app.get('/business/:id/orders', async (req, res) => {
  const business = await Business.findById(req.params.id);
  const orders = await Order.find({ businessId: business._id });
  for (const order of orders) {
    order.rider = await Rider.findById(order.riderId);
  }
  res.json(orders);
});
