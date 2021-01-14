/* eslint-disable no-console */
/* eslint-disable no-alert */
// Script DE FrontEnd
// Impoertar los Estilos
import './styles/styles.css';
console.log('Modern JS Working Thanks Babel-...');
const show = (message = 'Saludo por defecto') => {
  alert(message);
};
// EJEMPLO
show();
show('Mi saludo');
