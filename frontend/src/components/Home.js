import React from 'react';
import { useNavigate } from 'react-router-dom';

const collections = [
  { name: 'MVP', image: '/collections/mvp/mvp.png' },
  { name: 'O-Pee-Chee', image: '/collections/opeechee/opeechee.png' },
  { name: 'O-Pee-Chee Platinum', image: '/collections/opeecheeplatinum/platinum.png' },
  { name: 'Artifacts', image: '/collections/artifacts/artifacts.png' },
  { name: 'Series 1', image: '/collections/series1/ups1.png' },
  { name: 'Series 2', image: '/collections/series2/ups2.png' },
  { name: 'Black Diamond', image: '/collections/blackdiamond/bd.png' },
  { name: 'Parkhurst', image: '/collections/parkhurst/parkhurst.png' },
  { name: 'Trilogy', image: '/collections/trilogy/tril.png' },
  { name: 'Synergy', image: '/collections/synergy/syn.png' },
  { name: 'SP Game Used', image: '/collections/spgu/spgu.png' },
  { name: 'SPX', image: '/collections/spx/spx.png' },
  { name: 'Ice', image: '/collections/ice/ice.png' },
  { name: 'SP Authentic', image: '/collections/spauth/spauth.png' },  
  { name: 'Premier', image: '/collections/premier/prem.png' },
  
];

const Home = () => {
  const navigate = useNavigate();

  const navigateToCollection = (collectionName) => {
    navigate(`/collection/${collectionName.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <div>
      <h1>Marcus' Hockey Card Collection</h1>
      <div className="collection-grid">
        {collections.map((collection) => (
          <div key={collection.name} onClick={() => navigateToCollection(collection.name)} style={{ cursor: 'pointer' }}>
            <img src={collection.image} alt={collection.name} style={{ width: '100%', maxWidth: '200px' }} />
            <p>{collection.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

