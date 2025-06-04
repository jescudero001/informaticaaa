function mostrarInfo(id) {
  const taller = document.getElementById(id);
  const descripcion = taller.querySelector('.descripcion');
 
  if (descripcion.classList.contains('oculto')) {
    descripcion.classList.remove('oculto');
    descripcion.style.display = 'block';
  } else {
    descripcion.classList.add('oculto');
    descripcion.style.display = 'none';
  }
}
