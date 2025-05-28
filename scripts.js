document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('accept-cookies');

  // Verifica se o usuário já aceitou os cookies
  if (localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'none';
  }

  btn.addEventListener('click', function() {
    banner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });
}); 