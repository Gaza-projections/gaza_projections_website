export function setupReportDropdown() {
  const reportsDropdownTrigger = document.getElementById('reports-dropdown-trigger');
  reportsDropdownTrigger.addEventListener('click', toggleDropdown);
}

function toggleDropdown(event) {
  const reportsDropdownTrigger = document.getElementById('reports-dropdown-trigger');
  if (reportsDropdownTrigger.getAttribute('data-open') === 'false') {
    openDropdown(event);
  } else {
    closeDropdown(event);
  }
  event.stopPropagation();
}

function openDropdown(event) {
  const reportsDropdownTrigger = document.getElementById('reports-dropdown-trigger');
  const reportsDropdown = document.getElementById('reports-dropdown');

  reportsDropdownTrigger.setAttribute('data-open', 'true');
  reportsDropdown.setAttribute('data-open', 'true');
  event.stopPropagation();

  document.addEventListener('click', closeDropdown);
}

function closeDropdown(event) {
  const reportsDropdownTrigger = document.getElementById('reports-dropdown-trigger');
  const reportsDropdown = document.getElementById('reports-dropdown');
  reportsDropdownTrigger.setAttribute('data-open', 'false');
  reportsDropdown.setAttribute('data-open', 'false');

  document.removeEventListener('click', closeDropdown);
  event.stopPropagation();
}
