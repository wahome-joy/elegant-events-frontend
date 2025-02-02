// app.js

// Get elements
const signupForm = document.querySelector('#signup .auth-form');
const loginForm = document.querySelector('#login .auth-form');
const eventsContainer = document.querySelector('.event-cards');

// Handle Sign Up Form
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = signupForm.querySelector('input[name="name"]').value;
  const email = signupForm.querySelector('input[name="email"]').value;
  const password = signupForm.querySelector('input[name="password"]').value;

  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();
  alert(data.message);
});

// Handle Login Form
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[name="email"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (data.access_token) {
    localStorage.setItem('token', data.access_token);  // Save token in localStorage
    alert('Login successful');
  } else {
    alert(data.message);
  }
});

// Fetch and display events
async function fetchEvents() {
  const response = await fetch('http://localhost:5000/api/events');
  const data = await response.json();
  
  if (data.events && data.events.length > 0) {
    data.events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');

      eventCard.innerHTML = `
        <img src="https://placekitten.com/400/200" alt="${event.name}">
        <div class="event-details">
          <h3>${event.name}</h3>
          <p>${event.description}</p>
          <button class="btn-rsvp" data-event-id="${event.id}">RSVP Now</button>
        </div>
      `;

      // RSVP button click event
      eventCard.querySelector('.btn-rsvp').addEventListener('click', async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('Please log in first');
          return;
        }

        const response = await fetch(`http://localhost:5000/api/events/${event.id}/rsvp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        alert(data.message);
      });

      eventsContainer.appendChild(eventCard);
    });
  } else {
    eventsContainer.innerHTML = `<p>No events found</p>`;
  }
}

// Fetch events on page load
fetchEvents();
