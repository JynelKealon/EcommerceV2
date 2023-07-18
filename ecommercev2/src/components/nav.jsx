import React, { useState, useEffect } from 'react';
import f1 from './search.png';
import f2 from './sneakers.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [showItems, setShowItems] = useState(false);
  const [shoes, setShoes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };


  const handleDropdownChange = () => {
    setShowItems(!showItems);
  };

  useEffect(() => {
    // Fetch shoe data from the backend API
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setShoes(data))
      .catch((error) => console.log('Error fetching products:', error));
  }, []);


  const filteredShoes = shoes.filter((shoe) =>
    shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (minPrice === '' || shoe.price >= parseInt(minPrice))
  );

  return (
    <>
      <nav id="nav">
        <div class="navTop"></div>
        <div class="navItem">
          <a href="/index">
            <img src={f2} class="logo" alt="sneakers" />
          </a>
        </div>
        <div class="navItem">
          <div class="search">
            <input
              type="text"
              placeholder="Search. . ."
              class="searchInput"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={f1} alt="search" width="20" height="20" class="searchIcon" />
          </div>
        </div>
        <div class="navItem">
          <a href="/products" class="custom-link">
            <span class="limitedOffer">Limited Offer</span>
          </a>
        </div>
        <div class="navBottom">
          <a class="menuItems" href="/home">
            <h3>Home</h3>
          </a>
          <a class="menuItems" href="/products">
            <h3>Products</h3>
          </a>
          <a class="menuItems" href="/contact">
            <h3>Contact Us</h3>
          </a>
        </div>
      </nav>

      <div>
        <select onChange={handleDropdownChange}>
          <option value="hide">Hide Items</option>
          <option value="show">Show Items</option>
        </select>

        {showItems && (
          <>
            <div>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              
            </div>

            {filteredShoes.length > 0 ? (
              <div>
                {filteredShoes.map((shoe) => (
                  <div key={shoe.id}>
                    <h3>{shoe.brand}</h3>
                    <p>Price: ${shoe.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h1>No shoes found</h1>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Search;
