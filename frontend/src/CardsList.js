import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardsList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {    
    const fetchCards = async () => {
      try {        
        const response = await axios.get('/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);        
      }
    };

    fetchCards();
  }, []); 

  return (
    <div>
      {cards.length > 0 ? (
        <ul>
          {cards.map((card) => (
            <li key={card._id}>
              {card.name} - {card.year} - {card.collection}
              {/* Render more card details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cards available.</p>
      )}
    </div>
  );
};

export default CardsList;
