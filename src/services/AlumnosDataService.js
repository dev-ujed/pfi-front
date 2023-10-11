import http from "../http-common";

class AlumnosDataService {
  getAll() { 
    return http.get("/alumnos");
  }

  get(id) {
    return http.get(`/alumnos/${id}`);
  }

  create(data) {
    return http.post("/alumnos/create/", data);
  }

  update(id, data) {
    return http.put(`/alumnos/update/${id}/`, data);
  }

  delete(id) {
    return http.delete(`/alumnos/delete/${id}`);
  }

  getoalumnos(){
   return http.get('/alumnos/movalumno'); 
  }

  getOaloumno(id) {
    return http.get(`/alumnos/movalumno/${id}`);
  }
}

export default new AlumnosDataService();