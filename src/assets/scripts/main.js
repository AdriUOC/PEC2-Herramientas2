/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

 // JavaScript para manejar el evento de clic en el botón
 document.getElementById('mostrarToast').addEventListener('click', function() {
  // Crear un nuevo toast
  var toast = new bootstrap.Toast(document.getElementById('miToast'));
  // Mostrar el toast
  toast.show();
});