const imagen = document.getElementById('imagen-cambiable');

const imagenes = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1055/600/400"
];

let indiceActual = 0;

imagen.addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % imagenes.length;
  imagen.src = imagenes[indiceActual];
  imagen.alt = `Imagen ${indiceActual + 1}`;
});
