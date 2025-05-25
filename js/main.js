// Menú desplegable con mouseover y mouseout
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(menu) {
  menu.addEventListener('mouseover', function() {
    menu.classList.add('active');
  });
  menu.addEventListener('mouseout', function() {
    menu.classList.remove('active');
  });
});

// Mensaje personalizado según hora/idioma
document.addEventListener('DOMContentLoaded', function() {
  const mensaje = document.getElementById('mensaje-bienvenida');
  if (mensaje) {
    const hora = new Date().getHours();
    let saludo = '';
    if (hora < 12) saludo = '¡Buenos días!';
    else if (hora < 18) saludo = '¡Buenas tardes!';
    else saludo = '¡Buenas noches!';
    const idioma = navigator.language || navigator.userLanguage;
    if (idioma.startsWith('en')) saludo = 'Welcome!';
    if (idioma.startsWith('fr')) saludo = 'Bienvenue!';
    mensaje.textContent = saludo + ' Bienvenido/a a Colombia Travel.';
  }
}); 