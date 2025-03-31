
---

### File 3: `backend.md`

```markdown
# Backend Setup for Turkish Kebab Website

## Backend Overview
Since the request is for a simple HTML, CSS, and JavaScript website, a full server-side backend (e.g., Node.js, PHP) may not be necessary. Instead, we’ll use lightweight JavaScript-based solutions for interactivity, focusing on the reservation form. This keeps the site fast and aligns with the "simple" requirement. No database is assumed unless specified later.

## Functionality Requirements
1. **Reservation Form Handling**:
   - Collect user input (Name, Phone, Date, Time, Number of Guests).
   - Validate input on the client side.
   - Simulate submission (e.g., alert or console log) since no server is specified.

2. **Future Scalability**:
   - Notes provided for integrating a basic backend if needed later (e.g., email notifications).

## JavaScript Backend Logic
- **Form Validation**:
  - Check that all fields are filled.
  - Validate phone number format (e.g., starts with +852 for Hong Kong).
  - Ensure date is not in the past (relative to March 30, 2025).
- **Submission**:
  - For now, display an alert: "Thank you! We’ll confirm your reservation soon."
  - Log data to console for testing.

## Sample JavaScript Code
```javascript
document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // Basic validation
  if (!name || !phone || !date || !time || !guests) {
    alert('Please fill in all fields.');
    return;
  }
  if (!phone.startsWith('+852') || phone.length < 12) {
    alert('Please enter a valid Hong Kong phone number (e.g., +852 1234 5678).');
    return;
  }
  const today = new Date('2025-03-30');
  if (new Date(date) < today) {
    alert('Please select a future date.');
    return;
  }

  // Simulate submission
  console.log({ name, phone, date, time, guests });
  alert('Thank you! We’ll confirm your reservation soon.');
});



HTML Form Snippet (for Reference)

<form id="reservation-form">
  <input type="text" id="name" placeholder="Name" required>
  <input type="tel" id="phone" placeholder="Phone (+852)" required>
  <input type="date" id="date" required>
  <input type="time" id="time" required>
  <input type="number" id="guests" placeholder="Guests" min="1" required>
  <button type="submit">Submit Reservation</button>
</form>