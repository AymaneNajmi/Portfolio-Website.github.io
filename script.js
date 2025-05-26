function openLink(url) {
  window.open(url, '_blank');
}

function showDemoAlert() {
  alert('Download the free demo for The First Berserker: Khazan, available on Steam since January 16, 2025!');
}

document.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('current-date');
  const lastUpdatedElement = document.getElementById('last-updated');
  const updateElement = document.getElementById('update-1');

  // Set the initial date and time to May 26, 2025, 10:59 AM +01
  let currentTime = new Date('2025-05-26T10:59:00+01:00');

  // Function to format the date and time
  function formatDateTime(date) {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Europe/London', // +01 timezone
      hour12: true
    }) + ' +01';
  }

  // Function to update the time
  function updateTime() {
    currentTime.setSeconds(currentTime.getSeconds() + 1); // Increment by 1 second
    const formattedTime = formatDateTime(currentTime);
    dateElement.textContent = `Date: ${formattedTime}`;
    lastUpdatedElement.textContent = formattedTime;
    updateElement.textContent = formattedTime;
  }

  // Initial update
  updateTime();

  // Update every second
  setInterval(updateTime, 1000);
});
