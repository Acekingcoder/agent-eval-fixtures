app.post('/riders/:id/location', (req, res) => {
  Rider.findByIdAndUpdate(req.params.id, {
    location: req.body.location,
    lastUpdated: new Date()
  });
  res.json({ status: 'ok' });
});
