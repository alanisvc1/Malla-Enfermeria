const ramosPorSemestre = {
  "1° Año - 1° Semestre": [
    { codigo: "DBIO1069", nombre: "Biología celular", requisitos: [], abre: ["DBIO1075", "DMOR0012", "DBIO1076", "DBIO1072"] },
    { codigo: "DMOR0003", nombre: "Anatomía humana", requisitos: [], abre: ["DBIO1075"] },
    { codigo: "DQUI1035", nombre: "Química general y orgánica", requisitos: [], abre: ["DBIO1076"] },
    { codigo: "ENFEA001", nombre: "Bases conceptuales de la gestión del cuidado", requisitos: [], abre: ["ENFEB001", "ENFEB002", "ENFEC003"] },
    { codigo: "ENFEA0002", nombre: "Psicología del desarrollo y aprendizaje", requisitos: [], abre: ["ENFEC002"] },
    { codigo: "ASIGESA01", nombre: "Estrategias para el aprendizaje", requisitos: [] }
  ],
  "1° Año - 2° Semestre": [
    { codigo: "DBIO1075", nombre: "Fisiología humana", requisitos: ["DBIO1069", "DMOR0003"], abre: ["DBIO1044", "DBIO1045", "ENFEC001", "ENFEC002"] },
    { codigo: "DMOR0012", nombre: "Histoembriología", requisitos: ["DBIO1069"] },
    { codigo: "DBIO1076", nombre: "Bioquímica general", requisitos: ["DBIO1069", "DQUI1035"] },
    { codigo: "ENFEB001", nombre: "Primeros auxilios", requisitos: ["ENFEA001"] },
    { codigo: "ENFEB002", nombre: "Socioantropología en la Salud", requisitos: ["ENFEA001"] },
    { codigo: "FORMINT1", nombre: "Formación integral I", requisitos: [] }
  ],
  "2° Año - 1° Semestre": [
    { codigo: "DBIO1072", nombre: "Microbiología general", requisitos: ["DBIO1069"] },
    { codigo: "DBIO1044", nombre: "Farmacología general", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
    { codigo: "DBIO1045", nombre: "Farmacología aplicada", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
    { codigo: "ENFEC001", nombre: "Fisiopatología", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
    { codigo: "ENFEC002", nombre: "Enfermería en el ciclo vital", requisitos: ["ENFEA0002", "DBIO1075", "DMOR0012", "DBIO1076", "ENFEB001"] },
    { codigo: "ENFEC003", nombre: "Educación en salud", requisitos: ["ENFEA001"] },
    { codigo: "FILS0001", nombre: "Antropología", requisitos: [] },
    { codigo: "FORMINT2", nombre: "Formación integral II", requisitos: ["FORMINT1"] }
  ]
};

const malla = document.getElementById("malla");

function cargarProgreso() {
  const datos = localStorage.getItem("ramosAprobados");
  return datos ? JSON.parse(datos) : [];
}

function guardarProgreso(lista) {
  localStorage.setItem("ramosAprobados", JSON.stringify(lista));
}

let ramosAprobados = cargarProgreso();

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.dataset.codigo = ramo.codigo;
  div.innerHTML = `<h3>${ramo.nombre}</h3><p>${ramo.codigo}</p>`;

  if (ramo.requisitos.length === 0 || ramo.requisitos.every(c => ramosAprobados.includes(c))) {
    div.classList.add("activo");
  }

  if (ramosAprobados.includes(ramo.codigo)) {
    div.classList.add("aprobado");
  }

  div.addEventListener("click", () => {
    if (!div.classList.contains("activo") || div.classList.contains("aprobado")) return;

    div.classList.add("aprobado");
    ramosAprobados.push(ramo.codigo);
    guardarProgreso(ramosAprobados);

    desbloquearRamos();
  });

  return div;
}

function crearBloqueSemestre(titulo, ramos) {
  const bloque = document.createElement("section");
  bloque.classList.add("bloque-semestre");
  const encabezado = document.createElement("h2");
  encabezado.textContent = titulo;
  bloque.appendChild(encabezado);

  ramos.forEach(ramo => bloque.appendChild(crearRamo(ramo)));
  malla.appendChild(bloque);
}

function desbloquearRamos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.dataset.codigo;
    const ramo = Object.values(ramosPorSemestre).flat().find(r => r.codigo === codigo);
    if (
      !ramosAprobados.includes(codigo) &&
      ramo.requisitos.length > 0 &&
      ramo.requisitos.every(c => ramosAprobados.includes(c))
    ) {
      div.classList.add("activo");
    }
  });
}

Object.entries(ramosPorSemestre).forEach(([titulo, lista]) => crearBloqueSemestre(titulo, lista));
desbloquearRamos();
