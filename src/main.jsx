import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css'; // Import CSS file

function Main() {
  return (
    <div className="main-container">
      {/* Navigation Bar */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="images/logo.png" alt="EventPlanner" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Elegant Events</h1>
          <p>Your go-to platform for planning and RSVP'ing to the most exciting events!</p>
          <p>You dream of it, we make it happen !</p>
          <Link to="/signup" className="btn-main">Join Now</Link>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <h2>Our Most Popular Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <img src="images/event1.jpg" alt="Event 1" />
            <div className="event-details">
              <h3>New Year's Eve Party</h3>
              <p>Celebrate the new year with us!</p>
              <Link to="/rsvp" className="btn-rsvp">RSVP Now</Link>
            </div>
          </div>

          <div className="event-card">
            <img src="images/event2.jpg" alt="Event 2" />
            <div className="event-details">
              <h3>Wedding Celebration Reception</h3>
              <p>Celebrate your special day with us!</p>
              <Link to="/rsvp" className="btn-rsvp">RSVP Now</Link>
            </div>
          </div>

          <div className="event-card">
            <img src="images/event3.jpg" alt="Event 3" />
            <div className="event-details">
              <h3>Baby Shower </h3>
              <p>Experience the magic of a baby shower with us!</p>
              <Link to="/rsvp" className="btn-rsvp">RSVP Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 EventPlanner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Main;