// Registration of Progressive Web App Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Gen56 ServiceWorker registered with scope: ', registration.scope);
      })
      .catch(error => {
        console.error('Gen56 ServiceWorker registration failed: ', error);
      });
  });
}

// Contact Form submission handling (with offline logic support)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // Simulated API Post or offline LocalStorage queue
    if (navigator.onLine) {
      console.log('Online: Sending inquiry to Gen56 systems...', data);
      displayStatus('Thank you, ' + name + '! Your inquiry has been sent.', 'success');
    } else {
      console.warn('Offline: Queueing inquiry on LocalStorage for synchronization later.');
      const localQueue = JSON.parse(localStorage.getItem('gen56_offline_inquiries') || '[]');
      localQueue.push(data);
      localStorage.setItem('gen56_offline_inquiries', JSON.stringify(localQueue));
      displayStatus('Offline node. Inquiry queued locally. It will auto-synchronize when reconnected!', 'warning');
    }
    contactForm.reset();
  });
}

function displayStatus(text, type) {
  const statusEl = document.getElementById('statusMessage');
  if (statusEl) {
    statusEl.innerText = text;
    statusEl.className = 'status-box ' + type;
    statusEl.style.display = 'block';
  }
}
