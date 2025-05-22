# Pamono “Quick View” Chrome Snippet

This repo contains a small Chrome “User JavaScript and CSS” snippet that injects a **Quick View** button onto each product card on [pamono.com/furniture](https://www.pamono.com/furniture).  
Clicking **Quick View** opens a centered modal with a simple image carousel.

---

## 📋 Task Description

- **Goal:** Add a “Quick View” overlay to each product on the Pamono furniture collection page.
- **Requirements:**
  - Show a “Quick View” button on hover (no jQuery).
  - Clicking the button opens a modal popup with a carousel of product images.
  - Close popup when clicking the “×” or outside the modal.
  - Carousel can be a simple vanilla-JS slider (placeholders used in this snippet).

---

## 🛠 Installation & Usage

1. Install the [**User JavaScript and CSS** Chrome extension](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld).
2. Click the extension’s icon, then **New snippet**.
3. In the **URL pattern** field, enter:
4. **CSS** tab: paste the contents of [`quick-view-carousel.css`](./quick-view-carousel.css).
5. **JavaScript** tab: paste the contents of [`quick-view-carousel.js`](./quick-view-carousel.js).
6. Save and refresh the Pamono furniture page—hover over any product to see **Quick View**.

---

## 📂 File Overview

- **quick-view-carousel.js**  
- Injects the Quick View button  
- Builds & shows the modal + carousel  
- Handles open/close events  
- **quick-view-carousel.css**  
- Styles the button, overlay, modal, carousel & nav arrows  

---

## 🚀 Testing

1. Follow the installation steps above.
2. Hover over a product card → **Quick View** button appears.
3. Click it → modal opens with placeholder images.
4. Navigate with the left/right arrows.
5. Click outside or on “×” to close.

---

## 📝 Next Steps

- Replace placeholder URLs with real product images (via AJAX parsing).
- Enhance carousel (e.g. dot indicators, swipe support).
- Add zoom or “Add to cart” integrations.

---

## 📄 License

This snippet is released under the MIT License.  

