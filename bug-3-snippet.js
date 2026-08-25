async function assignOrder(orderId, riderId) {
  const order = await Order.findById(orderId);
  if (order.status === 'pending') {
    order.status = 'assigned';
    order.riderId = riderId;
    await order.save();
  }
  return order;
}
