export function setupAnalyticsEvents() {
  const EVENTS = {
    download_report: {
      category: 'engagement',
      label: 'Download Report'
    },
    download_previous_report: {
      category: 'engagement',
      label: 'Download Previous Report'
    },
    download_methods_annex: {
      category: 'engagement',
      label: 'Download Methods Annex'
    },
    download_arabic_summary: {
      category: 'engagement',
      label: 'Download Arabic Summary'
    },
    download_hebrew_summary: {
      category: 'engagement',
      label: 'Download Hebrew Summary'
    },
    github: {
      category: 'engagement',
      label: 'GitHub'
    }
  };
  for (let element of document.querySelectorAll('[data-event-name]')) {
    const eventName = element.getAttribute('data-event-name');
    const event = EVENTS[eventName];
    element.addEventListener('click', () => {
      gtag('event', eventName, {
        event_category: event.category,
        event_label: event.label
      });
    });
  }
}
