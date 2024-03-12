import React, { useState } from 'react';
import axios from 'axios'; 

const AddCardForm = () => {
  const [cardData, setCardData] = useState({
    name: '',
    year: '',
    collection: '',
    series: '',
    isCollected: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('http://localhost:5000/cards', cardData);
      alert('Card added successfully!');
      setCardData({ name: '', year: '', collection: '', series: '', isCollected: false }); // Reset form
    } catch (error) {
      console.error('Error adding card:', error);
      alert('Failed to add card.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={cardData.name}
        onChange={handleChange}
        placeholder="Card Name"
        required
      />
      <input
        name="year"
        value={cardData.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <input
        name="collection"
        value={cardData.collection}
        onChange={handleChange}
        placeholder="Collection"
        required
      />
      <input
        name="series"
        value={cardData.series}
        onChange={handleChange}
        placeholder="Series"
        required
      />
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
