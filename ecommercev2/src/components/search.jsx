import React, {useState} from 'react'
import f1 from './search.png'
import f2 from './sneakers.png'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [shoes] = useState([
    { id: 1, brand: 'Adidas Samba', price: 172 },
    { id: 2, brand: 'Adidas Samba', price: 149 },
    { id: 3, brand: 'Adidas Samba', price: 158 },
    { id: 4, brand: 'Adidas Samba', price: 90 },
    { id: 5, brand: 'Nike Dunk', price: 156 },
    { id: 6, brand: 'Nike Dunk', price: 175 },
    { id: 7, brand: 'Nike Dunk', price: 440 },
    { id: 8, brand: 'Nike Dunk', price: 90 },
    { id: 9, brand: 'Jordan 1', price: 442 },
    { id: 10, brand: 'Jordan 1', price: 397 },
    { id: 11, brand: 'Jordan 1', price: 397 },
    { id: 12, brand: 'Jordan 1', price: 90 },
    { id: 13, brand: 'Yeezy Boost 350 V2', price: 384 },
    { id: 14, brand: 'Yeezy Boost 350 V2', price: 516 },
    { id: 15, brand: 'Yeezy Boost 350 V2', price: 257 },
    { id: 16, brand: 'Yeezy Boost 350 V2', price: 90 },
  ]);

  const filteredShoes = shoes.filter((shoe) =>
    shoe.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav id="nav">
        <div className="navTop"></div>
        <div className="navItem">
          <a href="/index">
            <img src={f2} class="logo" alt="sneakers" />
          </a>
        </div>
        <div className="navItem">
          <div className="search">
            <input
              type="text"
              placeholder="Search. . ."
              className="searchInput"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={f1} alt="search" width="20" height="20" class="searchIcon" />
          </div>
        </div>
        <div className="navItem">
          <a href="/products" class="custom-link">
            <span className="limitedOffer">Limited Offer</span>
          </a>
        </div>
        <div className="navBottom">
          <a className="menuItems" href="/home">
            <h3>Home</h3>
          </a>
          <a className="menuItems" href="/products">
            <h3>Products</h3>
          </a>
          <a className="menuItems" href="/contact">
            <h3>Contact Us</h3>
          </a>
        </div>
      </nav>

      <div>
        {filteredShoes.length > 0 ? (
          <div>
            <h1>Shoe Store</h1>
            <div>
              <input
                type="text"
                placeholder="Search by brand"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div>
              {filteredShoes.map((shoe) => (
                <div key={shoe.id}>
                  <h3>{shoe.brand}</h3>
                  <p>Price: ${shoe.price}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>No shoes found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;

