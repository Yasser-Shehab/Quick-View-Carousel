document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("article.product-card").forEach((card) => {
    const wrapper = card.querySelector("a.link-wrapper");
    if (!wrapper) return;

    const btn = document.createElement("button");
    btn.className = "quick-view-btn";
    btn.textContent = "Quick View";
    wrapper.appendChild(btn);

    // On click: open popup with placeholder carousel
    // it contains some placholder images from https://placehold.co/
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const placeholders = [
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
      ];
      openQuickView(placeholders);
    });
  });
});

function openQuickView(images) {
  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "quickview-overlay";

  // Modal container
  const modal = document.createElement("div");
  modal.className = "quickview-modal";

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "quickview-close";
  closeBtn.textContent = "×";
  modal.appendChild(closeBtn);

  // Carousel wrapper
  const carousel = document.createElement("div");
  carousel.className = "quickview-carousel";

  // Track (flex container)
  const track = document.createElement("div");
  track.className = "quickview-track";
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
  });
  carousel.appendChild(track);

  // Nav buttons
  const prev = document.createElement("button");
  prev.className = "quickview-prev";
  prev.textContent = "<";
  const next = document.createElement("button");
  next.className = "quickview-next";
  next.textContent = ">";
  carousel.appendChild(prev);
  carousel.appendChild(next);

  modal.appendChild(carousel);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  //for this task its gonna be done nativly no need for a package

  // Close handlers
  function close() {
    overlay.remove();
  }
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Carousel logic
  let idx = 0;
  function update() {
    track.style.transform = `translateX(${-idx * 100}%)`;
  }
  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = idx > 0 ? idx - 1 : images.length - 1;
    update();
  });
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = idx < images.length - 1 ? idx + 1 : 0;
    update();
  });
}
