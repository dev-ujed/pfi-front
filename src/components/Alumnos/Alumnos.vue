<template>
  <div>
    <drawer />
    <v-container>
      <v-row>
        <v-data-table
          :headers="headers"
          :items="alumnos"
          :search="search"
          item-key="id"
          class="elevation-1"
        >
        <template v-slot:no-data>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
          </template>
       
          <v-spacer></v-spacer>
          <template v-slot:top>
            <v-toolbar-title class="px-3 py-2">Estudiantes</v-toolbar-title>
            <v-toolbar flat>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar por Matrícula"
                single-line
                hide-details
              ></v-text-field>
              <v-btn class="btn-buscar" @click="buscarAlumno">
                Buscar
              </v-btn>
              <v-spacer></v-spacer>
              <v-select
                v-model="selectedCiclo"
                :items="ciclos"
                label="Seleccionar Ciclo"
                @change="getCiclo"
                style="padding-top: 22px"
              >
              </v-select>
            </v-toolbar>
          </template>
          <template v-slot:item.detalles="{ item }">
            <v-btn class="ma-2" @click="sendStudent(item.cve_alumno)">
              <v-icon> mdi-account-details </v-icon>
            </v-btn>
          </template>
        </v-data-table>

        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import AlumnosDataService from "../../services/AlumnosDataService";
import drawer from "../Drawer/Drawer.vue";
import swal from "sweetalert";

export default {
  name: "alumnos",
  data() {
    return {
      alumnos: [],
      selectedCiclo: null,
      alumnosCicloSeleccionado: [],
      search: "",
      headers: [
        {
          text: "Matricula",
          align: "center",
          sortable: true,
          value: "cve_alumno",
        },
        { text: "Nombres", value: "alumno.nombre" },
        { text: "Apellido paterno", value: "alumno.paterno" },
        { text: "Apellido materno", value: "alumno.materno" },
        { text: "Carrera", sortable: true, value: "desc_carrera" },
        { text: "Ciclo", align: "center", value: "semestre" },
        { text: "Ver detalles", align: "center", value: "detalles" },
      ],

      //ciclos: ["2024-ENE/JUL 1/2 (795)", "2024-AGO/DIC-2/2 (800)"],
      ciclos: [],
      cve_ciclo: [],
    };
  },
  components: {
    drawer,
  },
  methods: {
    retrieveAlumnos() {
      /*axios
        .get("http://127.0.0.1:8000/alumnos/movalumno/")
        .then((response) => {
          console.log(response.data);
          this.alumnos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });*/
      AlumnosDataService.getoalumnos()
        .then((response) => {
          this.alumnos = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sendStudent(id) {
      console.log(id);
      this.$router.push("/fi-alumnos/" + id);
    },

    buscarAlumno(){
      console.log("Busqueda: ", this.search);
      if(this.search){
        axios
        .get(
          "https://fibackend.ujed.mx/alumnos/movalumno/" + this.search
          /*"http://127.0.0.1:8000/alumnos/movalumno/" + this.search*/
        )
        .then((response) => {
          console.log(response.data);
          console.log(response.data[0]);
          //this.alumnos = response.data;
          this.alumnos = [response.data];
        })
        .catch((error) => {
          console.log(error);
          if(error.response && error.response.status === 404){
            swal("Estudiante no encontrado", "No se encontró ningun estudiante con esa matrícula", "warning");
          }
        })
      }else{
        swal("Ingresa una matrícula", "", "warning");
      }
      
    },

    async getCiclo() {
      const token = sessionStorage.getItem("jwtToken");

      try {
        const cicloValue = await this.getCicloValue(this.ciclos);
        console.log(cicloValue);

        if (cicloValue) {
          if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            
            try {
              const response = await axios.get("https://fibackend.ujed.mx/alumnos/get_coordinator?cve_ciclo=" + cicloValue);
              console.log(response.data);
              console.log(cicloValue);
              this.alumnosCicloSeleccionado = response.data;
              this.alumnos = response.data;  
              //this.retrieveAlumnos();
            } catch (error) {
              console.log("Error en la solicitud de alumnos: ", error);
            }
          } else {
            console.error("No token disponible");
          }
        }
      } catch (error) {
        console.error('Error al obtener el ciclo:', error);
      }

    },

    getCiclosFromAPI() {
      axios
        .get("http://127.0.0.1:8000/eventos/cicloActual/id=101")
        .then((response) => {
          console.log([response.data.id]);
          console.log([response.data.valor]);
          this.ciclos = [response.data.valor + " (" + response.data.id + ")"];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCicloValue(){
      return axios.get(`http://127.0.0.1:8000/eventos/cicloActual/id=61`)
      .then((response) => {
        console.log("cve_ciclo: " + [response.data.valor]);
        this.cve_ciclo = [response.data.valor];
        return response.data.valor;
      })
      .catch((error) => {
        console.error("error", error);
      });
    },

    /*getCicloValue(selection) {
      const matches = selection.match(/\((\d+)\)$/);
      return matches ? matches[1] : null;
    },*/
  },
  async mounted() {
    //this.retrieveAlumnos();
    this.getCiclosFromAPI();

    const token = sessionStorage.getItem("jwtToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Access-Control-Allow-Headers"] =
        "Origin, X-Requested-With, Content-Type, Accept";
      axios.defaults.headers.common["Access-Control-Allow-Methods"] =
        "GET, POST, PUT, DELETE, OPTIONS";

      try {
        const response = await axios.request("https://fibackend.ujed.mx/alumnos/get_coordinator");
        if (Array.isArray(response.data)) { // Verificar si los datos son un array
          this.alumnos = response.data;
        }else {
          this.alumnos = [response.data]; // Envolver el objeto en un array
        }
      }catch (error) {
        console.error("Error", error);
      }
    }else {
      console.error("No token");
    }
  },
};
</script>

<style>
  .custom-spacer{
    
  }
</style>
