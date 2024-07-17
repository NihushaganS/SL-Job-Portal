import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to JobPortal.LK</h1>
        <p>Your centralized job portal in Sri Lanka</p>
      </header>
      <div className="home-search">
        <input type="text" placeholder="Search for jobs..." className="search-bar" />
        <div className="dropdown-menus">
          <select className="dropdown">
            <option value="">Select Category</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
          </select>
          <select className="dropdown">
            <option value="">Select Location</option>
            <option value="colombo">Colombo</option>
            <option value="kandy">Kandy</option>
            <option value="galle">Galle</option>
          </select>
          <select className="dropdown">
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <button className="home-button search-button">Search</button>
      </div>
    </div>
  );
};

export default Home;
