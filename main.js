// Toggle del menú lateral
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open');
});

// Alertas elegantes con botón único
function showAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.style.position = 'fixed';
  alertBox.style.top = '20%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translateX(-50%)';
  alertBox.style.background = '#fff';
  alertBox.style.border = '2px solid #dc3545';
  alertBox.style.padding = '1.5rem';
  alertBox.style.borderRadius = '10px';
  alertBox.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  alertBox.style.zIndex = '2000';

  const text = document.createElement('p');
  text.innerText = message;
  text.style.marginBottom = '1rem';

  const button = document.createElement('button');
  button.innerText = 'OK';
  button.style.background = '#dc3545';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.padding = '0.5rem 1rem';
  button.style.borderRadius = '10px';
  button.style.cursor = 'pointer';

  button.onclick = () => document.body.removeChild(alertBox);

  alertBox.appendChild(text);
  alertBox.appendChild(button);
  document.body.appendChild(alertBox);
}
