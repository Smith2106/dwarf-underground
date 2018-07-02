import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="expanded row header">
          <Navbar />
          <div className="headline text-center small-12 columns">
            <h1>The Dwarf Underground</h1>
            <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
          </div>
        </div>
    );
}

export default Header;