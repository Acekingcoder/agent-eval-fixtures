async function markDelivered(orderId) {
  const order = Order.findById(orderId);
  order.status = 'delivered';
  order.deliveredAt = new Date();
  order.save();
  return { success: true };
}
