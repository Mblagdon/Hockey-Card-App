import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CollectionYearSelector = () => {
  const navigate = useNavigate();
  const { collectionName } = useParams();
  // Replace spaces and dashes for file naming convention
  const collectionPath = collectionName.replace(/\s+/g, '').replace(/-/g, '').toLowerCase();
  const years = [
    '2020-2021',
    '2021-2022',
    '2022-2023',
    '2023-2024',
  ];

  // Construct image path based on collection name and year
  const getImagePath = (year) => {
    // Remove the collection name prefix from the image file name
    const yearPath = year.replace(/-/g, '');
    return `/collections/${collectionPath}/${yearPath}.png`;
  };

  const handleYearSelect = (year) => {
    navigate(`/collection/${collectionName}/${year}`);
  };

  return (
    <div className="body-content">
      <h2>{collectionName.toUpperCase()} Collection</h2>
      <div className="year-selector">
        {years.map((year) => (
          <div key={year} className="year-item" onClick={() => handleYearSelect(year)}>            
            <img src={getImagePath(year)} alt={year} className="year-image" />
            <button className="year-button">{year}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionYearSelector;

