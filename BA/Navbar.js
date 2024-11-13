import React from 'react';
import './Navbar.css'; // Assuming CSS is in a separate file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="path_to_logo.png" alt="Auction Logo" />
        <h1>AuctionApp</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="/my-bids">My Bids</a></li>
        <li><a href="/watchlist">Watchlist</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>

      {/* Profile Icon */}
      <div className="navbar-profile">
        <img src="path_to_profile_icon.png" alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
