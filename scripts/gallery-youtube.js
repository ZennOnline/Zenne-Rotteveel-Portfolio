// Gallery thumbnail loading + single-video handling + fallback for failed videos
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".media-wrapper");

  wrappers.forEach(wrapper => {
    const iframe = wrapper.querySelector("iframe");
    const src = iframe?.getAttribute("src");
    if (!src) return;

    const match = src.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if (!match) return;

    const videoId = match[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    wrapper.style.backgroundImage = `url(${thumbnailUrl})`;
    wrapper.style.backgroundSize = "cover";
    wrapper.style.backgroundPosition = "center";
    wrapper.style.backgroundRepeat = "no-repeat";
    wrapper.style.backgroundColor = "rgba(20,20,20,0.9)";

    let loaded = false;

    // When YouTube iframe finishes rendering
    iframe.addEventListener("load", () => {
      loaded = true;
      wrapper.classList.add("loaded");
    });

    // Handle iframe errors (e.g., Error 153)
    iframe.addEventListener("error", () => {
      iframe.remove(); // remove broken iframe

      // Make wrapper clickable
      wrapper.style.cursor = "pointer";
      wrapper.addEventListener("click", () => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
      });

      // Add overlay icon like your CSS ::after
      const overlay = document.createElement("div");
      overlay.textContent = "🎬";
      overlay.style.position = "absolute";
      overlay.style.top = "50%";
      overlay.style.left = "50%";
      overlay.style.transform = "translate(-50%, -50%)";
      overlay.style.fontSize = "2rem";
      overlay.style.color = "white";
      overlay.style.opacity = "0.7";
      overlay.style.transition = "opacity 0.6s ease";
      overlay.style.zIndex = "2";
      wrapper.appendChild(overlay);

      // Fade overlay on hover like your normal videos
      wrapper.addEventListener("mouseenter", () => overlay.style.opacity = "0");
      wrapper.addEventListener("mouseleave", () => overlay.style.opacity = "0.7");
    });

    // Backup fade: if iframe is slow, fade anyway after 3s
    setTimeout(() => {
      if (!loaded) wrapper.classList.add("loaded");
    }, 3000);
  });

  // Detect if a gallery only has one video
  const galleries = document.querySelectorAll('.gallery-page');
  galleries.forEach(gallery => {
    const items = gallery.querySelectorAll('.gallery-item');
    if (items.length === 1) {
      gallery.classList.add('single-video');
    }
  });
});
