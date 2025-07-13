const materias = [
  // Cuatrimestre 1
  { codigo: "ESP-181", nombre: "Lengua Española I", requisitos: [] },
  { codigo: "INF-103", nombre: "Ofimática", requisitos: [] },
  { codigo: "ING-105", nombre: "Inglés I", requisitos: [] },
  { codigo: "MAT-095", nombre: "Matemática Básica", requisitos: [] },
  { codigo: "MED-150", nombre: "Orientación Médica", requisitos: [] },
  { codigo: "ORI-112", nombre: "Orientación Universitaria", requisitos: [] },
  { codigo: "SOC-182", nombre: "Reflexión Filosófica", requisitos: [] },

  // Cuatrimestre 2
  { codigo: "ESP-189", nombre: "Lengua Española II", requisitos: ["ESP-181"] },
  { codigo: "INF-113", nombre: "Tecnología de la Información", requisitos: ["INF-103"] },
  { codigo: "ING-115", nombre: "Inglés II", requisitos: ["ING-105"] },
  { codigo: "MAT-100", nombre: "Matemática I", requisitos: ["MAT-095"] },
  { codigo: "MED-010", nombre: "Laboratorio de Biología I", requisitos: [] },
  { codigo: "MED-100", nombre: "Biología I", requisitos: [] },
  { codigo: "MED-110", nombre: "Historia de la Medicina", requisitos: ["MED-150"] },
  { codigo: "MED-750", nombre: "Química Inorgánica I", requisitos: ["MAT-095"] },
  { codigo: "MED-755", nombre: "Lab. Química Inorgánica I", requisitos: ["MAT-095"] },

  // Cuatrimestre 3
  { codigo: "ESP-302", nombre: "Redacción Profesional", requisitos: ["ESP-189"] },
  { codigo: "ING-125", nombre: "Inglés III", requisitos: ["ING-115"] },
  { codigo: "MAT-194", nombre: "Física General", requisitos: ["MAT-100"] },
  { codigo: "MAT-196", nombre: "Lab. Física General I", requisitos: ["MAT-100"] },
  { codigo: "MAT-306", nombre: "Pensamiento Lógico", requisitos: ["MAT-100"] },
  { codigo: "MED-105", nombre: "Biología II", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-115", nombre: "Lab. Biología II", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-760", nombre: "Química Inorgánica II", requisitos: ["MED-750", "MED-755"] },
  { codigo: "MED-765", nombre: "Lab. Química Inorgánica II", requisitos: ["MED-750", "MED-755"] },
  { codigo: "SOC-114", nombre: "Metodología de la Investigación I", requisitos: [] },

  // Cuatrimestre 4
  { codigo: "ING-135", nombre: "Inglés IV", requisitos: ["ING-125"] },
  { codigo: "MAT-134", nombre: "Fundamentos de Estadística", requisitos: ["MAT-100"] },
  { codigo: "MED-203", nombre: "Las TIC aplicadas en la Salud", requisitos: ["INF-113"] },
  { codigo: "MED-770", nombre: "Química Orgánica I", requisitos: ["MED-760", "MED-765"] },
  { codigo: "MED-774", nombre: "Lab. Química Orgánica I", requisitos: ["MED-760", "MED-765"] },
  { codigo: "SOC-118", nombre: "Metodología Investigación II", requisitos: ["SOC-114"] },
  { codigo: "SOC-172", nombre: "Temas de Historia Dominicana", requisitos: [] },

  // Cuatrimestre 5
  { codigo: "ING-147", nombre: "Inglés V", requisitos: ["ING-135"] },
  { codigo: "MED-160", nombre: "Bioestadística", requisitos: ["MAT-134"] },
  { codigo: "MED-401", nombre: "Biofísica", requisitos: ["MAT-194", "MAT-196"] },
  { codigo: "MED-775", nombre: "Química Orgánica II", requisitos: ["MED-770", "MED-774"] },
  { codigo: "MED-776", nombre: "Lab. Química Orgánica II", requisitos: ["MED-770", "MED-774"] },
  { codigo: "SIC-400", nombre: "Psicología Clínica I", requisitos: [] },
  { codigo: "SOC-502", nombre: "Ciudadanía y Globalización", requisitos: [] },

  // Cuatrimestre 6
  { codigo: "ING-167", nombre: "Inglés Profesional", requisitos: ["ING-147"] },
  { codigo: "MED-344", nombre: "Medicina Social", requisitos: [] },
  { codigo: "MED-395", nombre: "Fundamentos de Anatomía", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-396", nombre: "Lab. de Anatomía", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-397", nombre: "Fundamentos de Fisiología", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-398", nombre: "Lab. Fisiología", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-872", nombre: "Fundamentos de Histología", requisitos: ["MED-010", "MED-100"] },
  { codigo: "MED-874", nombre: "Lab. de Histología", requisitos: ["MED-010", "MED-100"] },
  { codigo: "SOC-155", nombre: "Medio Ambiente y Sostenibilidad", requisitos: [] },
  { codigo: "SOC-160", nombre: "Ética Profesional", requisitos: [] },

  // Cuatrimestre 7
  { codigo: "MED-172", nombre: "Anatomía I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-175", nombre: "Lab. Anatomía I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-192", nombre: "Bioquímica I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-197", nombre: "Lab. Bioquímica I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-200", nombre: "Embriología", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-232", nombre: "Fisiología I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-235", nombre: "Lab. Fisiología I", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-862", nombre: "Histología", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "MED-866", nombre: "Lab. Histología", requisitos: ["CUATRIMESTRE_6"] },
  { codigo: "SIC-766", nombre: "Inteligencia Emocional", requisitos: ["CUATRIMESTRE_6"] },

  // Cuatrimestre 8
  { codigo: "ECO-525", nombre: "Finanzas Personales", requisitos: [] },
  { codigo: "MED-212", nombre: "Anatomía II", requisitos: ["MED-172", "MED-175"] },
  { codigo: "MED-214", nombre: "Lab. Anatomía II", requisitos: ["MED-172", "MED-175"] },
  { codigo: "MED-292", nombre: "Fisiología II", requisitos: ["MED-232", "MED-235"] },
  { codigo: "MED-295", nombre: "Lab. Fisiología II", requisitos: ["MED-232", "MED-235"] },
  { codigo: "MED-304", nombre: "Patología I", requisitos: ["MED-862", "MED-866"] },
  { codigo: "MED-305", nombre: "Lab. Patología I", requisitos: ["MED-862", "MED-866"] },
  { codigo: "MED-606", nombre: "Bioquímica II", requisitos: ["MED-192", "MED-197"] },
  { codigo: "MED-607", nombre: "Lab. Bioquímica II", requisitos: ["MED-192", "MED-197"] },

  // Cuatrimestre 9
  { codigo: "MED-224", nombre: "Neuroanatomía", requisitos: ["MED-212", "MED-214"] },
  { codigo: "MED-225", nombre: "Lab. Neuroanatomía", requisitos: ["MED-212", "MED-214"] },
  { codigo: "MED-272", nombre: "Microbiología Médica", requisitos: ["MED-862", "MED-866"] },
  { codigo: "MED-274", nombre: "Lab. Microbiología", requisitos: ["MED-862", "MED-866"] },
  { codigo: "MED-312", nombre: "Patología II", requisitos: ["MED-304", "MED-305"] },
  { codigo: "MED-315", nombre: "Lab. Patología II", requisitos: ["MED-304", "MED-305"] },
  { codigo: "MED-322", nombre: "Farmacología", requisitos: ["MED-606", "MED-607"] },
  { codigo: "MED-325", nombre: "Lab. Farmacología", requisitos: ["MED-606", "MED-607"] },
  { codigo: "MED-357", nombre: "Fisiopatología I", requisitos: ["MED-292", "MED-295"] },
  { codigo: "MED-964", nombre: "Investigación en Salud", requisitos: ["SOC-118"] },

  // Cuatrimestre 10
  { codigo: "ADM-900", nombre: "Formación de Emprendedores", requisitos: ["CUATRIMESTRE_9"] },
  { codigo: "MED-254", nombre: "Parasitología", requisitos: ["MED-272", "MED-274"] },
  { codigo: "MED-255", nombre: "Lab. Parasitología", requisitos: ["MED-272", "MED-274"] },
  { codigo: "MED-264", nombre: "Semiología Clínica", requisitos: ["MED-312", "MED-315"] },
  { codigo: "MED-267", nombre: "Práctica Semiología", requisitos: ["MED-312", "MED-315"] },
  { codigo: "MED-358", nombre: "Fisiopatología II", requisitos: ["MED-357"] },
  { codigo: "MED-450", nombre: "Nutrición", requisitos: ["MED-606", "MED-607"] },
  { codigo: "MED-634", nombre: "Biología Molecular", requisitos: ["MED-200"] },
  { codigo: "MED-635", nombre: "Lab. Biología Molecular", requisitos: ["MED-200"] },
  { codigo: "MED-662", nombre: "Epidemiología", requisitos: ["MED-160"] },
  { codigo: "MED-975", nombre: "Prevención y Promoción", requisitos: ["MED-964"] },

  // Cuatrimestre 11
  { codigo: "MED-411", nombre: "Terapéutica", requisitos: ["MED-322", "MED-325"] },
  { codigo: "MED-414", nombre: "Prácticas Terapéutica", requisitos: ["MED-322", "MED-325"] },
  { codigo: "MED-416", nombre: "Semiología Quirúrgica", requisitos: ["MED-264", "MED-267"] },
  { codigo: "MED-419", nombre: "Práctica Semiología Quirúrgica", requisitos: ["MED-264", "MED-267"] },
  { codigo: "MED-506", nombre: "Bioética", requisitos: ["MED-634", "MED-635"] },
  { codigo: "MED-930", nombre: "Psicopatología Clínica", requisitos: [] },
  { codigo: "MED-943", nombre: "Bioseguridad", requisitos: [] },
  { codigo: "MED-967", nombre: "Habilidades Comunicativas", requisitos: [] },
  { codigo: "MED-997", nombre: "Servicio Administrativo Salud", requisitos: [] },
  { codigo: "MED-999", nombre: "Legislación Médica", requisitos: [] },
  { codigo: "SOC-140", nombre: "Relaciones Humanas", requisitos: [] },
];

const contenedor = document.getElementById("malla");
const estadoMaterias = {}; // Almacena el estado de aprobación

function crearBoton(materia) {
  const boton = document.createElement("button");
  boton.innerText = materia.nombre;
  boton.className = "materia bloqueada";
  boton.disabled = true;

  boton.onclick = () => {
    boton.classList.toggle("aprobada");
    estadoMaterias[materia.codigo] = boton.classList.contains("aprobada");
    actualizarDisponibilidad();
  };

  return boton;
}

function actualizarDisponibilidad() {
  materias.forEach((materia, index) => {
    const aprobada = estadoMaterias[materia.codigo];
    const requisitosListos = materia.requisitos.every(req => estadoMaterias[req] || req === "CUATRIMESTRE_6" || req === "CUATRIMESTRE_9");
    const boton = contenedor.children[index];
