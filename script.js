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
  ],
 "2° Año - 2° Semestre": [
    { codigo: "ENFEC004", nombre: "Cuidados básicos de enfermería", requisitos: ["ENFEC002"] },
    { codigo: "ENFEC005", nombre: "Taller de habilidades clínicas I", requisitos: ["ENFEC002"] },
    { codigo: "ENFEC006", nombre: "Enfermería en salud pública", requisitos: ["ENFEC003"] },
    { codigo: "ENFEC007", nombre: "Investigación en salud I", requisitos: [] },
    { codigo: "FORMINT3", nombre: "Formación integral III", requisitos: ["FORMINT2"] }
  ],
  "3° Año - 1° Semestre": [
    { codigo: "ENFED001", nombre: "Enfermería en el ciclo vital II", requisitos: ["ENFEC004"] },
    { codigo: "ENFED002", nombre: "Taller de habilidades clínicas II", requisitos: ["ENFEC005"] },
    { codigo: "ENFED003", nombre: "Enfermería en salud mental y psiquiatría", requisitos: [] },
    { codigo: "ENFED004", nombre: "Investigación en salud II", requisitos: ["ENFEC007"] },
    { codigo: "FORMINT4", nombre: "Formación integral IV", requisitos: ["FORMINT3"] }
  ],
  "3° Año - 2° Semestre": [
    { codigo: "ENFED005", nombre: "Enfermería médico quirúrgica I", requisitos: ["ENFEC004"] },
    { codigo: "ENFED006", nombre: "Internado médico quirúrgico I", requisitos: ["ENFEC004"] },
    { codigo: "ENFED007", nombre: "Gestión del cuidado en enfermería", requisitos: [] },
    { codigo: "FORMINT5", nombre: "Formación integral V", requisitos: ["FORMINT4"] }
  ],
  "4° Año - 1° Semestre": [
    { codigo: "ENFEE001", nombre: "Enfermería médico quirúrgica II", requisitos: ["ENFED005"] },
    { codigo: "ENFEE002", nombre: "Internado médico quirúrgico II", requisitos: ["ENFED006"] },
    { codigo: "ENFEE003", nombre: "Seminario de investigación", requisitos: ["ENFED004"] },
    { codigo: "FORMINT6", nombre: "Formación integral VI", requisitos: ["FORMINT5"] }
  ],
  "4° Año - 2° Semestre": [
    { codigo: "ENFEE004", nombre: "Enfermería en pediatría", requisitos: ["ENFEE001"] },
    { codigo: "ENFEE005", nombre: "Internado en pediatría", requisitos: ["ENFEE002"] },
    { codigo: "ENFEE006", nombre: "Gestión del cuidado avanzado", requisitos: ["ENFED007"] },
    { codigo: "ENFEE007", nombre: "Ética profesional", requisitos: [] }
  ],
  "5° Año - 1° Semestre": [
    { codigo: "ENFEF001", nombre: "Internado en salud mental", requisitos: ["ENFED003"] },
    { codigo: "ENFEF002", nombre: "Internado en salud pública", requisitos: ["ENFEC006"] },
    { codigo: "ENFEF003", nombre: "Gestión del cuidado final", requisitos: ["ENFEE006"] },
    { codigo: "ENFEF004", nombre: "Síntesis del proceso de formación profesional", requisitos: [] }
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
