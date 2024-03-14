import React, { useState } from 'react';
import axios from 'axios'; 

const AddCardForm = () => {
  const [cardData, setCardData] = useState({
    name: '',
    year: new Date().getFullYear(), // default to current year
    collection: 'MVP', // default collection
    isCollected: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/cards', cardData);
      alert('Card added successfully!');
      setCardData({ name: '', year: new Date().getFullYear(), collection: 'MVP', isCollected: false });
    } catch (error) {
      console.error('Error adding card:', error);
      alert('Failed to add card.');
    }
  };

  // Generate an array of years for the dropdown
  const years = Array.from({ length: 2030 - 1910 + 1 }, (_, index) => 1910 + index);

  const collections = [
    'MVP', 'O-Pee-Chee', 'O-Pee-Chee Platinum', 'Upper Deck Series 1',
    'Upper Deck Series 2', 'Artifacts', 'Black Diamond', 'Parkhurst',
    'Trilogy', 'Synergy', 'SP Game Used', 'SPX', 'Ice', 'SP Authentic',
    'ULTIMATE', 'Premier', 'THE CUP'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={cardData.name}
        onChange={handleChange}
        placeholder="Card Name"
        required
      />
      <select
        name="year"
        value={cardData.year}
        onChange={handleChange}
        required
      >
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <select
        name="collection"
        value={cardData.collection}
        onChange={handleChange}
        required
      >
        {collections.map(collection => (
          <option key={collection} value={collection}>{collection}</option>
        ))}
      </select>
      <label>
        Is Collected:
        <input
          name="isCollected"
          type="checkbox"
          checked={cardData.isCollected}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;