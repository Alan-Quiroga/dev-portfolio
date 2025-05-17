  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = prefersDark ? 'dark' : 'light';

  // Cargar tema guardado al iniciar
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('theme-style').href = `/css/${savedTheme}.css`;

  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const icon = themeToggle.querySelector('i');
    
    // Cargar tema guardado o usar el predeterminado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeStyle.href = `/css/${savedTheme}.css`;
    
    // Actualizar icono según el tema actual
    updateIcon(savedTheme);
    
    // Cambiar tema al hacer clic
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Aplicar nuevo tema
      document.documentElement.setAttribute('data-theme', newTheme);
      themeStyle.href = `/css/${newTheme}.css`;
      localStorage.setItem('theme', newTheme);
      
      // Actualizar icono
      updateIcon(newTheme);
    });
    
    function updateIcon(theme) {
      if (theme === 'light') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    }
  });
  