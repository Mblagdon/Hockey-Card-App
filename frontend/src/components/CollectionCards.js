import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CollectionCards = () => {
  const [cards, setCards] = useState([]);
  const { collectionName, year } = useParams();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`/cards?collection=${collectionName}&year=${year}`);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, [collectionName, year]);

  return (
    <div>
      <h2>Cards for {collectionName} {year}</h2>
      {/* Display the cards here */}
    </div>
  );
};

export default CollectionCards;
