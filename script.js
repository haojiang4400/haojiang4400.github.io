// Dark mode toggle
(function () {
  const btn = document.getElementById('darkToggle');
  const icon = document.getElementById('darkIcon');

  function apply(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      document.documentElement.removeAttribute('data-theme');
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  }

  const saved = localStorage.getItem('theme');
  apply(saved === 'dark');

  btn.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    apply(!isDark);
  });
})();
