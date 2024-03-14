import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddCardForm from './components/AddCardForm';
import CollectionPage from './components/CollectionPage';
import Navigation from './components/Navigation';
import CollectionCards from './components/CollectionCards';
import CollectionYearSelector from './components/CollectionYearSelector';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCardForm />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/collection/:collectionName" element={<CollectionYearSelector />} />
        <Route path="/collection/:collectionName/:year" element={<CollectionCards />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


