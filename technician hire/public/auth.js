// auth.js
document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName') || 'User';

  // Desktop elements
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const userProfile = document.getElementById('userProfile');
  const usernameSpan = document.getElementById('username');

  // Mobile elements
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
  const mobileUserProfile = document.getElementById('mobileUserProfile');
  const mobileUsernameSpan = document.getElementById('mobileUsername');

  if (isLoggedIn) {
    // Desktop
    loginBtn?.classList.add('hidden');
    logoutBtn?.classList.remove('hidden');
    userProfile?.classList.remove('hidden');
    if (usernameSpan) usernameSpan.textContent = userName;

    // Mobile
    mobileLoginBtn?.classList.add('hidden');
    mobileLogoutBtn?.classList.remove('hidden');
    mobileUserProfile?.classList.remove('hidden');
    if (mobileUsernameSpan) mobileUsernameSpan.textContent = userName;
  }

  logoutBtn?.addEventListener('click', handleLogout);
  mobileLogoutBtn?.addEventListener('click', handleLogout);

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    window.location.href = 'index.html'; // Or any page you want after logout
  }
});
