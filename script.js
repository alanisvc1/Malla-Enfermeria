const ramos = [
  { codigo: "DBIO1069", nombre: "Biología celular", requisitos: [], abre: ["DBIO1075", "DMOR0012", "DBIO1076", "DBIO1072"] },
  { codigo: "DMOR0003", nombre: "Anatomía humana", requisitos: [], abre: ["DBIO1075"] },
  { codigo: "DQUI1035", nombre: "Química general y orgánica", requisitos: [], abre: ["DBIO1076"] },
  { codigo: "ENFEA001", nombre: "Bases conceptuales de la gestión del cuidado", requisitos: [], abre: ["ENFEB001", "ENFEB002", "ENFEC003"] },
  { codigo: "ENFEA0002", nombre: "Psicología del desarrollo y aprendizaje", requisitos: [], abre: ["ENFEC002"] },

  { codigo: "ASIGESA01", nombre: "Estrategias para el aprendizaje", requisitos: [] },
  { codigo: "DBIO1075", nombre: "Fisiología humana", requisitos: ["DBIO1069", "DMOR0003"], abre: ["DBIO1044", "DBIO1045", "ENFEC001", "ENFEC002"] },
  { codigo: "DMOR0012", nombre: "Histoembriología", requisitos: ["DBIO1069"] },
  { codigo: "DBIO1076", nombre: "Bioquímica general", requisitos: ["DBIO1069", "DQUI1035"] },
  { codigo: "ENFEB001", nombre: "Primeros auxilios", requisitos: ["ENFEA001"] },
  { codigo: "ENFEB002", nombre: "Socioantropología en la Salud", requisitos: ["ENFEA001"] },
  { codigo: "FORMINT1", nombre: "Formación integral I", requisitos: [] },

  { codigo: "DBIO1072", nombre: "Microbiología general", requisitos: ["DBIO1069"] },
  { codigo: "DBIO1044", nombre: "Farmacología general", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
  { codigo: "DBIO1045", nombre: "Farmacología aplicada", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
  { codigo: "ENFEC001", nombre: "Fisiopatología", requisitos: ["DBIO1075", "DMOR0012", "DBIO1076"] },
  { codigo: "ENFEC002", nombre: "Enfermería en el ciclo vital", requisitos: ["ENFEA0002", "DBIO1075", "DMOR0012", "DBIO1076", "ENFEB001"] },
  { codigo: "ENFEC003", nombre: "Educación en salud", requisitos: ["ENFEA001"] },
  { codigo: "FILS0001", nombre: "Antropología", requisitos: [] },
  { codigo: "FORMINT2", nombre: "Formación integral II", requisitos: ["FORMINT1"] },

  { codigo: "ENFED001", nombre: "Enfermería en Salud Comunitaria I", requisitos: ["ENFEC002", "ENFEC003"] },
  { codigo: "ENFED002", nombre: "Metodologías de enseñanza y aprendizaje en salud", requisitos: ["DBIO1072", "DBIO1044", "DBIO1045", "ENFEC001", "ENFEC002", "ENFEC003"] },
  { codigo: "ENFED003", nombre: "Gestión del cuidado en la persona", requisitos: ["DBIO1072", "DBIO1044", "DBIO1045", "ENFEC001", "ENFEC002"] },
  { codigo: "ENFED004", nombre: "Comunicación e interacción humana", requisitos: [] },
  { codigo: "ENFE0014", nombre: "Epidemiología", requisitos: [] },
  { codigo: "FILS0002", nombre: "Ética", requisitos: ["FILS0001"] },
  { codigo: "FORMINT3", nombre: "Formación integral III", requisitos: ["FORMINT2"] },

  { codigo: "ELEFORIN01", nombre: "Electivo de formación integral", requisitos: ["FILS0002"] },
  { codigo: "ENFEE001", nombre: "Gestión del cuidado en el adulto", requisitos: ["ENFED001", "ENFED002", "ENFED003", "ENFED004"] },
  { codigo: "ENFEE002", nombre: "Enfermería en Salud Mental", requisitos: ["ENFED001", "ENFED002", "ENFED003", "ENFED004"] },
  { codigo: "ENFEE003", nombre: "Administración en enfermería", requisitos: [] },
  { codigo: "FORMINT4", nombre: "Formación integral IV", requisitos: ["FORMINT3"] },

  { codigo: "ENFEF001", nombre: "Gestión del cuidado en el Adulto Mayor", requisitos: ["ENFEE001", "ENFEE002"] },
  { codigo: "ENFEF002", nombre: "Gestión del cuidado en la Mujer y en el Recién Nacido", requisitos: ["ENFEE001", "ENFEE002"] },
  { codigo: "ENFEF003", nombre: "Enfermería en alteraciones de la salud mental", requisitos: ["ENFEE001", "ENFEE002"] },
  { codigo: "ENFEF004", nombre: "Gestión de enfermería en Servicios Clínicos", requisitos: ["ENFEE003"] },
  { codigo: "DMAEE003", nombre: "Estadística", requisitos: ["ENFE0014"] },

  { codigo: "ELE01ENFE", nombre: "Electivo profesional", requisitos: [] },
  { codigo: "ENFEG001", nombre: "Enfermería de Urgencia", requisitos: ["ENFEF001", "ENFEF002", "ENFEF003"] },
  { codigo: "ENFEG002", nombre: "Gestión del cuidado en el Niño y la Niña", requisitos: ["ENFEF001", "ENFEF002", "ENFEF003"] },
  { codigo: "ENFE0028", nombre: "Investigación I", requisitos: ["DMAEE003"] },
  { codigo: "ENFE0031", nombre: "Ética en enfermería", requisitos: ["ENFEE001"] },

  { codigo: "ENFEH001", nombre: "Enfermería en Salud Comunitaria II", requisitos: ["ENFEG001", "ENFEG002"] },
  { codigo: "ENFE0033", nombre: "Investigación II", requisitos: ["ENFE0028"] },
  { codigo: "ENFE0034", nombre: "Gestión del cuidado en los Servicios de Urgencia", requisitos: ["ENFEG001", "ENFEG002"] },
  { codigo: "ENFE0035", nombre: "Gestión del cuidado en el adolescente", requisitos: ["ENFEG002"] },

  { codigo: "ENFEI001", nombre: "Internado intrahospitalario", requisitos: ["ENFEH001", "ENFE0033", "ENFE0034", "ENFE0035", "FORMINT4"] },
  { codigo: "ENFEI002", nombre: "Internado extrahospitalario", requisitos: ["ENFEH001", "ENFE0033", "ENFE0034", "ENFE0035", "FORMINT4"] }
];

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

  malla.appendChild(div);
}

function desbloquearRamos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.dataset.codigo;
    const ramo = ramos.find(r => r.codigo === codigo);
    if (
      !ramosAprobados.includes(codigo) &&
      ramo.requisitos.length > 0 &&
      ramo.requisitos.every(c => ramosAprobados.includes(c))
    ) {
      div.classList.add("activo");
    }
  });
}

ramos.forEach(crearRamo);
desbloquearRamos();
