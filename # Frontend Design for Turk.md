# Frontend Design for Turkish Kebab Website

## Design Vision
The frontend for "Turkish Kebab" should reflect a modern, sleek aesthetic inspired by Turkish culture, with a focus on Chef Mustafa Koca’s artistry. It must be responsive for both desktop and mobile screens, fast-loading, and easy to navigate. The color scheme should include warm tones (e.g., deep red, gold, earthy browns) to evoke Turkish heritage, paired with clean white or beige backgrounds for readability.

## Structure and Sections
1. **Header**:
   - Restaurant name: "Turkish Kebab - Sai Kung".
   - Navigation bar: Links to "About Us," "Menu," "Recipes," "Reservation".
   - Logo (optional, placeholder if not provided).
   - Responsive hamburger menu for mobile.

2. **Hero Section**:
   - Full-width background image of a signature kebab dish (placeholder if not provided).
   - Overlay text: "Authentic Turkish Cuisine by Chef Mustafa Koca" and a tagline: "Crafted with 45 Years of Mastery".
   - Call-to-action button: "Reserve a Table".

3. **About Us**:
   - Heading: "Our Story".
   - Content: "Welcome to Turkish Kebab, a hidden gem in Sai Kung, Hong Kong. Led by Chef Mustafa Koca, with over 45 years of experience in Turkish gastronomy, we bring the soul of Gaziantep, Turkey, to your plate. Having served world leaders and famous delegations, Chef Mustafa crafts each dish as an art piece, using only the finest ingredients imported from Gaziantep—no artificial flavors, no MSG, just pure, cook-to-order perfection."
   - Image: Chef Mustafa Koca (placeholder if not provided).

4. **Menu**:
   - Heading: "Our Culinary Art".
   - Sample items (expandable):
     - **Adana Kebab**: Hand-minced lamb grilled to perfection, served with fresh flatbread.
     - **Pistachio Baklava**: Layered pastry with Gaziantep’s finest pistachios.
     - **Lahmacun**: Thin Turkish flatbread topped with spiced minced meat.
   - Note: "All dishes made fresh to order with ingredients from Gaziantep, Turkey."

5. **Recipes**:
   - Heading: "A Taste of Turkey".
   - Content: "Chef Mustafa shares his secrets. Try this at home: **Simple Turkish Flatbread** - Mix flour, water, yeast, and salt. Knead, rest, and bake at 220°C for 15 minutes. Pair with our kebabs for an authentic experience."
   - Add 1-2 more simple recipes if desired.

6. **Reservation**:
   - Heading: "Book Your Experience".
   - Form: Fields for Name, Phone, Date, Time, Number of Guests.
   - Button: "Submit Reservation".
   - Note: "We’ll confirm your booking via phone."

7. **Footer**:
   - Address: "Turkish Kebab, Sai Kung, Hong Kong".
   - Phone: "(Placeholder: +852 1234 5678)".
   - Social media icons (placeholders for Instagram, Facebook).

## CSS Guidelines
- Use Flexbox or CSS Grid for layout.
- Media queries for responsiveness (e.g., `max-width: 768px` for mobile).
- Fonts: Google Fonts like "Roboto" (modern) or "Lora" (elegant).
- Animations: Subtle hover effects on buttons and navigation links.
- Images: Optimize with `width: 100%` and `object-fit: cover`.

## JavaScript Functionality
- Hamburger menu toggle for mobile.
- Smooth scrolling to sections on navigation click.
- Basic form validation (e.g., ensure all fields are filled).

## What to Avoid
- No heavy frameworks or unnecessary dependencies.
- No cluttered designs—keep it minimal and sleek.
- No generic stock content unrelated to the restaurant’s story.

## Sample HTML Snippet
```html
<header>
  <h1>Turkish Kebab - Sai Kung</h1>
  <nav>
    <ul>
      <li><a href="#about">About Us</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#recipes">Recipes</a></li>
      <li><a href="#reservation">Reservation</a></li>
    </ul>
  </nav>
</header>
<section class="hero">
  <h2>Authentic Turkish Cuisine by Chef Mustafa Koca</h2>
  <p>Crafted with 45 Years of Mastery</p>
  <button>Reserve a Table</button>
</section>


