function openLink(url) {
  window.open(url, '_blank');
}

function showDemoAlert() {
  alert('Download the free demo for The First Berserker: Khazan, available on Steam since January 16, 2025!');
}

document.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('current-date');
  const today = new Date('2025-05-25T22:35:00+01:00');
  dateElement.textContent = `Date: ${today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;
});
