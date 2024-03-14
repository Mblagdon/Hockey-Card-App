const express = require('express');
const router = express.Router(); // Create a router object
const Card = require('../models/Card'); // Import the Card model

// Fetch all cards
router.get('/cards', async (req, res) => {
  const { collection, year } = req.query;
  let query = {};
  if (collection) query.collection = collection;
  if (year) query.year = year;

  try {
    const cards = await Card.find(query);
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Create a new card
router.post('/cards', async (req, res) => {
    const card = new Card({
      name: req.body.name,
      year: req.body.year,
      collection: req.body.collection,
      series: req.body.series,
      isCollected: req.body.isCollected
    });
  
    try {
      const newCard = await card.save();
      res.status(201).json(newCard);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update an existing card
  router.patch('/cards/:id', async (req, res) => {
    try {
      const card = await Card.findById(req.params.id);
      if (!card) res.status(404).json({ message: 'Card not found' });
  
      Object.assign(card, req.body);
      const updatedCard = await card.save();
      res.json(updatedCard);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a card
  router.delete('/cards/:id', async (req, res) => {
    try {
      const card = await Card.findById(req.params.id);
      if (!card) res.status(404).json({ message: 'Card not found' });
  
      await card.remove();
      res.json({ message: 'Card deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Export the router
module.exports = router;
