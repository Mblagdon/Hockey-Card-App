import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  'MVP', 'O-Pee-Chee', 'O-Pee-Chee Platinum', 'Series 1',
  'Series 2', 'Artifacts', 'Black Diamond', 'Parkhurst',
  'Trilogy', 'Synergy', 'SP Game Used', 'SPX', 'Ice', 'SP Authentic',
  'ULTIMATE', 'Premier', 'THE CUP'
];

const CollectionPage = () => {
  return (
    <div>
      <h1>Card Collections</h1>
      <ul>
        {collections.map(collection => (
          <li key={collection}>
            <Link to={`/collection/${collection.replace(/\s+/g, '-').toLowerCase()}`}>
              {collection}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;
