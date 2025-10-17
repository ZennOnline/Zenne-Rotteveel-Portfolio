// Gallery thumbnail loading
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

    let loaded = false;

    // When YouTube iframe finishes rendering
    iframe.addEventListener("load", () => {
      loaded = true;
      wrapper.classList.add("loaded");
    });

    // Backup fade: if not loaded after 3s, fade anyway
    setTimeout(() => {
      if (!loaded) wrapper.classList.add("loaded");
    }, 3000);
  });
});