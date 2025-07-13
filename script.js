const materias = [
  // Primer cuatrimestre
  { nombre: "Orientación Universitaria", codigo: "OU", cuatri: 1 },
  { nombre: "Lengua Española I", codigo: "LE1", cuatri: 1 },
  { nombre: "Matemática Básica", codigo: "MB", cuatri: 1 },
  { nombre: "Química General", codigo: "QG", cuatri: 1 },
  { nombre: "Biología General", codigo: "BG", cuatri: 1 },

  // Segundo cuatrimestre
  { nombre: "Lengua Española II", codigo: "LE2", cuatri: 2, prerequisitos: ["LE1"] },
  { nombre: "Anatomía I", codigo: "A1", cuatri: 2, prerequisitos: ["BG"] },
  { nombre: "Química Orgánica", codigo: "QO", cuatri: 2, prerequisitos: ["QG"] },
  { nombre: "Inglés I", codigo: "IN1", cuatri: 2 },

  // Tercer cuatrimestre
  { nombre: "Inglés II", codigo: "IN2", cuatri: 3, prerequisitos: ["IN1"] },
  { nombre: "Anatomía II", codigo: "A2", cuatri: 3, prerequisitos: ["A1"] },
  { nombre: "Bioquímica I", codigo: "BQI", cuatri: 3, prerequisitos: ["QO"] },
  { nombre: "Embriología", codigo: "EMB", cuatri: 3, prerequisitos: ["BG"] },

  // Cuarto cuatrimestre
  { nombre: "Filosofía", codigo: "FIL", cuatri: 4 },
  { nombre: "Fisiología I", codigo: "F1", cuatri: 4, prerequisitos: ["A2"] },
  { nombre: "Bioquímica II", codigo: "BQII", cuatri: 4, prerequisitos: ["BQI"] },
  { nombre: "Histología", codigo: "HIS", cuatri: 4, prerequisitos: ["A2"] },

  // Quinto cuatrimestre
  { nombre: "Fisiología II", codigo: "F2", cuatri: 5, prerequisitos: ["F1"] },
  { nombre: "Parasitología", codigo: "PAR", cuatri: 5, prerequisitos: ["BQII"] },
  { nombre: "Microbiología I", codigo: "MI1", cuatri: 5, prerequisitos: ["BQII"] },
  { nombre: "Psicología Médica", codigo: "PSM", cuatri: 5 },

  // Sexto cuatrimestre
  { nombre: "Salud Pública I", codigo: "SP1", cuatri: 6 },
  { nombre: "Medicina Preventiva", codigo: "MP", cuatri: 6, prerequisitos: ["SP1"] },
  { nombre: "Microbiología II", codigo: "MI2", cuatri: 6, prerequisitos: ["MI1"] },
  { nombre: "Inmunología", codigo: "INM", cuatri: 6, prerequisitos: ["MI1"] },

  // Séptimo cuatrimestre
  { nombre: "Patología General I", codigo: "PG1", cuatri: 7, prerequisitos: ["MI2"] },
  { nombre: "Farmacología I", codigo: "FA1", cuatri: 7, prerequisitos: ["F2"] },
  { nombre: "Bioestadística", codigo: "BES", cuatri: 7 },
  { nombre: "Salud Pública II", codigo: "SP2", cuatri: 7, prerequisitos: ["SP1"] },

  // Octavo cuatrimestre
  { nombre: "Patología General II", codigo: "PG2", cuatri: 8, prerequisitos: ["PG1"] },
  { nombre: "Farmacología II", codigo: "FA2", cuatri: 8, prerequisitos: ["FA1"] },
  { nombre: "Diagnóstico por Imagen I", codigo: "DI1", cuatri: 8 },
  { nombre: "Ética Médica", codigo: "ETM", cuatri: 8 },

  // Noveno cuatrimestre
  { nombre: "Medicina Legal", codigo: "ML", cuatri: 9 },
  { nombre: "Propedéutica Clínica I", codigo: "PC1", cuatri: 9, prerequisitos: ["FA2"] },
  { nombre: "Diagnóstico por Imagen II", codigo: "DI2", cuatri: 9, prerequisitos: ["DI1"] },
  { nombre: "Nutrición Clínica", codigo: "NC", cuatri: 9 },

  // Décimo cuatrimestre
  { nombre: "Propedéutica Clínica II", codigo: "PC2", cuatri: 10, prerequisitos: ["PC1"] },
  { nombre: "Clínica Médica I", codigo: "CM1", cuatri: 10, prerequisitos: ["PC1"] },
  { nombre: "Clínica Quirúrgica I", codigo: "CQ1", cuatri: 10 },
  { nombre: "Clínica Pediátrica I", codigo: "CP1", cuatri: 10 },

  // Onceavo cuatrimestre
  { nombre: "Clínica Ginecológica I", codigo: "CG1", cuatri: 11 },
  { nombre: "Clínica Psiquiátrica", codigo: "CPS", cuatri: 11 },
  { nombre: "Clínica Médica II", codigo: "CM2", cuatri: 11, prerequisitos: ["CM1"] },
  { nombre: "Clínica Quirúrgica II", codigo: "CQ2", cuatri: 11, prerequisitos: ["CQ1"] },

  // Doceavo cuatrimestre
  { nombre: "Clínica Pediátrica II", codigo: "CP2", cuatri: 12, prerequisitos: ["CP1"] },
  { nombre: "Clínica Ginecológica II", codigo: "CG2", cuatri: 12, prerequisitos: ["CG1"] },
  { nombre: "Bioética", codigo: "BIO", cuatri: 12 },
  { nombre: "Clínica Médica III", codigo: "CM3", cuatri: 12, prerequisitos: ["CM2"] },

  // Treceavo cuatrimestre
  { nombre: "Rotación Internado - Medicina Interna", codigo: "RI1", cuatri: 13 },

  // Catorceavo cuatrimestre
  { nombre: "Rotación Internado - Cirugía", codigo: "RI2", cuatri: 14 },

  // Quinceavo cuatrimestre
  { nombre: "Rotación Internado - Pediatría", codigo: "RI3", cuatri: 15 },

  // Dieciséisavo cuatrimestre
  { nombre: "Rotación Internado - Ginecología y Obstetricia", codigo: "RI4", cuatri: 16 },

  // Diecisieteavo cuatrimestre
  { nombre: "Rotación Internado - Medicina Familiar", codigo: "RI5", cuatri: 17 },

  // Dieciochoavo cuatrimestre
  { nombre: "Rotación Internado - Emergencias", codigo: "RI6", cuatri: 18 },
];

function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
}

function cargarEstado() {
  const estadoGuardado = localStorage.getItem("estadoMaterias");
  return estadoGuardado ? JSON.parse(estadoGuardado) : {};
}

const estadoMaterias = cargarEstado();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.textContent = materia.nombre;

    const estado = estadoMaterias[materia.codigo];
    const bloqueado = materia.prerequisitos?.some(
      (pre) => !estadoMaterias[pre]
    );

    if (estado) div.classList.add("aprobado");
    else if (bloqueado) div.classList.add("bloqueado");

    div.onclick = () => {
      if (bloqueado) return;
      estadoMaterias[materia.codigo] = !estado;
      guardarEstado();
      crearMalla();
    };

    contenedor.appendChild(div);
  });
}

crearMalla();
