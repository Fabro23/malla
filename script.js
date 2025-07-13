function toggleMateria(div) {
  div.classList.toggle('aprobada');
  checkUnlocks();
}

function checkUnlocks() {
  const materias = document.querySelectorAll('.materia');
  const aprobadas = Array.from(materias)
    .filter(m => m.classList.contains('aprobada'))
    .map(m => m.dataset.id);

  materias.forEach(m => {
    const prereqs = m.dataset.prereqs?.split(',') || [];
    if (prereqs.every(pr => aprobadas.includes(pr))) {
      m.classList.remove('bloqueada');
      m.style.pointerEvents = 'auto';
    }
  });
}
