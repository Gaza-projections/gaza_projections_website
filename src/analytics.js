export function setupAnalyticsEvents() {
  const EVENTS = {
    download_report: {
      category: 'engagement',
      label: 'Download Report 1'
    },
    download_report_2: {
      category: 'engagement',
      label: 'Download Report 2'
    },
    download_report_3: {
      category: 'engagement',
      label: 'Download Report 3'
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
    download_arabic_summary_2: {
      category: 'engagement',
      label: 'Download Arabic Summary 2'
    },
    download_hebrew_summary: {
      category: 'engagement',
      label: 'Download Hebrew Summary'
    },
    github: {
      category: 'engagement',
      label: 'GitHub'
    },
    download_hebrew_summary_2: {
      category: 'engagement',
      label: 'Download Hebrew Summary 2'
    },
    github_2: {
      category: 'engagement',
      label: 'GitHub 2'
    },
    download_briefing_note_3: {
      category: 'engagement',
      label: 'Download Briefing Note Report 3'
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
