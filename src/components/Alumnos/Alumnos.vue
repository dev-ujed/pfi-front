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
          <v-spacer></v-spacer>
          <template v-slot:top>
            <v-toolbar-title class="px-3 py-2">Estudiantes</v-toolbar-title>
            <v-toolbar flat>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar alumnos"
                single-line
                hide-details
              ></v-text-field>
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

export default {
  name: "alumnos",
  data() {
    return {
      alumnos: [],
      selectedCiclo: null,
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
        { text: "Semestre", align: "center", value: "semestre" },
        { text: "Ver detalles", align: "center", value: "detalles" },
      ],

      ciclos: ["2024-ENE/JUL 1/2 (795)"],
    };
  },
  components: {
    drawer,
  },
  methods: {
    retrieveAlumnos() {
      AlumnosDataService.getoalumnos()
        .then((response) => {
          this.alumnos = response.data;
          console.log(this.alumnos);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sendStudent(id) {
      console.log(id);
      this.$router.push("/fi-alumnos/" + id);
    },

    getCiclo() {
      const cicloValue = this.getCicloValue(this.selectedCiclo);
      if (cicloValue) {
        axios
          .get(
            "https://fibackend.ujed.mx/alumnos/get_coordinator?cve_ciclo=" +
              /*"http://127.0.0.1:8000/alumnos/get_coordinator?cve_ciclo="*/ cicloValue
          )
          .then((response) => {
            console.log(response.data);
            console.log(cicloValue);
            this.alumnos = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    getCicloValue(selection) {
      const matches = selection.match(/\((\d+)\)$/);
      return matches ? matches[1] : null;
    },
  },
  async mounted() {
    //this.retrieveAlumnos();

    const token = sessionStorage.getItem("jwtToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Access-Control-Allow-Headers"] =
        "Origin, X-Requested-With, Content-Type, Accept";
      axios.defaults.headers.common["Access-Control-Allow-Methods"] =
        "GET, POST, PUT, DELETE, OPTIONS";

      try {
        const response = await axios.request(
          "https://fibackend.ujed.mx/alumnos/get_coordinator"
          /*"http://127.0.0.1:8000/alumnos/get_coordinator"*/
        );
        this.alumnos = response.data;
        console.log(this.alumnos);
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      console.error("No token");
    }
  },
};
</script>

<style></style>
