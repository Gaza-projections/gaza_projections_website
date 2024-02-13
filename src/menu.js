import { Accordion } from './accordion';

/**
 * Performs the following functionality:
 *
 * - On mobile, when a link is clicked, the navigation is closed.
 * - On tablet/desktop, when a section is scrolled to, the corresponding link in the navigation is highlighted.
 * - On all screens, when a section is scrolled away from, the hash is removed from the URL.
 */
export function setupMenu() {
  // Set up nav accordion on mobile
  const navAccordion = new Accordion(document.querySelector('.js-nav'));

  // Close nav accordion (on mobile) when a link is clicked
  document.getElementById('nav-list').addEventListener('click', () => {
    navAccordion.close();
  });

  // Check browser support
  if (typeof IntersectionObserver === 'undefined') {
    return;
  }

  const links = [...document.querySelectorAll('#nav-list a[href^="#"]')];
  const linkMap = new Map();

  for (let link of links) {
    const sectionId = link.hash.replace('#', '');
    // When a link is clicked, update which link is active. This is not required as once the browser scrolls
    // to a section its link will automatically be activated thanks to the intersection observer.
    // However calling `updateActiveLinks` explicitly creates a faster feedback for the user
    // (doesn't have to wait for the scroll to complete).
    link.addEventListener('click', () => {
      updateActiveLinks(link.hash.replace('#', ''));
    });

    // This information is used to determine which link is active, it's updated by the intersection observer.
    linkMap.set(sectionId, {
      isActive: false,
      intersection: 0
    });
  }

  function updateActiveLinks(urlId = window.location.hash.replace('#', '')) {
    // Find the section that is in the URL hash. URL hash takes priority.
    let selectedId = [...linkMap.keys()].find((sectionId) => sectionId === urlId);

    // If the URL doesn't have a hash, find the section that is most visible
    if (!selectedId) {
      const active = [...linkMap.entries()]
        .filter(([, record]) => record.isActive)
        .sort(([, a], [, b]) => b.intersection - a.intersection)[0];

      selectedId = active?.[0] ?? null;
    }

    const activeLinkClasses = ['md:text-primary', 'md:font-bold', 'md:underline'];
    // Unselect all links except the one with the selectedId
    document.querySelectorAll('#nav-list a[href^="#"]').forEach((link) => {
      const id = link.hash.replace('#', '');
      if (selectedId && id === selectedId) {
        link.classList.add(...activeLinkClasses);
      } else {
        link.classList.remove(...activeLinkClasses);
      }
    });
  }

  // Set up intersection observer
  let timeout;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Update info about the sections' visibility
        const mapRecord = linkMap.get(entry.target.id);
        mapRecord.isActive = entry.isIntersecting;
        // Intersection indicates how visible in the viewport a section is
        mapRecord.intersection = entry.intersectionRatio;
        // If the entry is not intersecting (visible) and matches the URL hash
        if (!entry.isIntersecting && window.location.hash === `#${entry.target.id}`) {
          // Remove the hash from the URL
          history.pushState('', document.title, `${window.location.pathname}${window.location.search}`);
        }
      });

      // Debounce updating the active links. Debounce is not needed but reduces redundant processing.
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateActiveLinks();
      }, 100);
    },
    {
      root: null, // Use the viewport as the bounding box.
      threshold: 0.1 // Trigger if at least 10% of the element is visible.
    }
  );

  // Observe all sections the menu links might point to
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
}
