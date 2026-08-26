function trackRider(socket, riderId) {
  socket.on('locationUpdate', (data) => {
    io.to(`business_${data.businessId}`).emit('riderMoved', data);
  });
}

app.post('/riders/connect', (req, res) => {
  const socket = getSocketById(req.body.socketId);
  trackRider(socket, req.body.riderId);
  res.json({ connected: true });
});
