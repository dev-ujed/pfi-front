import http from "../http-common";
import axios from "axios";
const API = "https://fibackend.ujed.mx"; /*"http://127.0.0.1:8000";*/

class EventosDataService {
  getAll() {
    return http.get("/eventos");
  }

  getevento(id) {
    return http.get(`/eventos/${id}/`);
  }

  create(data) {
    const formData = new FormData();
    formData.append("tituloEvento", data.tituloEvento);
    formData.append("unidadResponsable", data.unidadResponsable);
    formData.append("cveUnidadResponsable", data.cveUnidadResponsable);
    formData.append("descripcionEvento", data.descripcionEvento);
    formData.append("eventoDedicadoA", data.eventoDedicadoA);
    formData.append("responsable", data.responsable);
    formData.append("fechaFin", data.fechaFin);
    formData.append("fechaInicio", data.fechaInicio);
    formData.append("inicioEvento", data.inicioEvento);
    formData.append("finEvento", data.finEvento);
    formData.append("sede", data.sede);
    formData.append("cupo", data.cupo);
    formData.append("descripcion", data.descripcion);
    formData.append("creditos", data.creditos);
    formData.append("categorias", data.categorias);
    formData.append("horas_totales", data.horas_totales);
    formData.append("contacto", data.contacto);
    formData.append("flayer", data.flayer);

    
    
    if(data.subCategoria1){
      formData.append("subCategoria1", data.subCategoria1);
    }

    if(data.subCategoria2){
      formData.append("subCategoria2", data.subCategoria2);
    }

    if(data.subCategoriaArte){
      formData.append("subCategoriaArte", data.subCategoriaArte);
    }


    return axios.post(API + "/eventos/create/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }


  update(id, data) {
    console.log(data.cveUnidadResponsable);
    return http.put(`/eventos/update/${id}/`, data);
  }

  filtroCategoria(categoria) {
    return http.get(`/eventos?categorias=${categoria}`);
  }

  delete(id) {
    return http.delete(`/eventos/delete/${id}`);
  }

  findByTitle(tituloEvento) {
    return http.get(`/eventos?tituloEvento=${tituloEvento}`);
  }

  /* Calendario */
  createCalendario(data) {
    return http.post("/eventos/create/calendario/", data);
  }

  getAllCalendario() {
    return http.get("/eventos/calendario");
  }

  getTodayEvents(today) {
    return http.get(`/eventos?fechaEvento=${today}`);
  }

  /* Evidencias */
  createEvidencia(formData) {
    return axios.post(API + "/eventos/create/evidencia", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  updateEvidencia(formData, evidencia) {
    return axios.put(
      API + `/eventos/update/evidencia/${evidencia}/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  getEvidencias(evento, alumno) {
    return http.get(`/eventos/evidencia?evento=${evento}&alumno=${alumno}`);
  }

  getClasificacion() {
    return http.get("/eventos/clasificacion_eve");
  }

  getCategorias1(clasif_id) {
    return http.get(`/eventos/categorias1_eve?clasificacion=${clasif_id}`);
  }

  getCategorias2(cat_id) {
    return http.get(`/eventos/categorias2_eve?catalogo=${cat_id}`);
  }

  getCategoriasArte(cat_id) {
    return http.get(`/eventos/categoriasArte_eve?categoria=${cat_id}`);
  }
}

export default new EventosDataService();
