/**
 * Removes the hash from the URL when the target element is not visible.
 * Example, if the user goes to #about then scrolls away from the about section,
 * the #about hash will be removed from the URL. This prevents accidental section sharing
 * of the URL instead of the whole site.
 */

export function initSectionObserver() {
  // Check browser support
  if (typeof IntersectionObserver === 'undefined') {
    return;
  }

  // Function to remove hash from URL without page refresh
  const removeHash = () => {
    history.pushState('', document.title, `${window.location.pathname}${window.location.search}`);
  };

  // Options for the observer (which part of the item should be visible to trigger callback)
  const options = {
    root: null, // Use the viewport as the bounding box.
    threshold: 0.1 // Trigger if at least 10% of the element is visible.
  };

  // // Callback function for the observer
  const callback = (entries) => {
    entries.forEach((entry) => {
      // If the entry is not intersecting (visible) and matches the URL hash
      if (!entry.isIntersecting && window.location.hash === `#${entry.target.id}`) {
        removeHash(); // Remove the hash from the URL
      }
    });
  };

  // Create a new observer
  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('#project,section[id]').forEach((section) => {
    observer.observe(section);
  });
}
