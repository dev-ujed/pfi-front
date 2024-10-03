<template>
  <div>
    <drawer />
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            depressed
            elevation="2"
            block
            color="#202428"
            class="white--text"
            >Registro</v-btn
          >
        </v-col>
        <v-col>
          <v-btn
            v-if="categoria != 'Externos'"
            depressed
            elevation="2"
            plain
            block
            @click="sendEvent()"
            >Asistencia</v-btn
          >
          <v-btn v-else depressed elevation="2" plain block @click="sendEvent()"
            >Validación de creditos</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="alumnos"
            :search="search"
            item-key="cve_alumno"
            item-selectable="selectable"
            show-select
            class="elevation-8 overflow-auto"
            height="520px"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Estudiantes</v-toolbar-title>
                <v-select
                  v-model="selectedCiclo"
                  :items="ciclos"
                  label="Seleccionar Ciclo"
                  @change="getCiclo"
                  style="padding-top: 22px"
                >
                </v-select>
                <v-spacer></v-spacer>
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
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
          </template>
       
          </v-data-table>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <v-toolbar-title>{{ evento.tituloEvento }}</v-toolbar-title>
            </v-col>
            <v-col>
              <v-toolbar-title
                >Cupo de evento total: {{ evento.cupo }}</v-toolbar-title
              >
              <v-toolbar-title
                v-if="evento.cupo - alumnosRegistrados - selected.length > 0"
                >Disponible:
                {{
                  evento.cupo - alumnosRegistrados - selected.length
                }}</v-toolbar-title
              >
              <v-toolbar-title v-else
                >No hay más lugares disponibles</v-toolbar-title
              >
            </v-col>
          </v-row>
          <v-row align="center">
            <v-data-table
              dense
              :headers="headersRegistrados"
              :items="selected"
              item-key="name"
              class="elevation-8 overflow-auto"
              max-height="520px"
              v-if="selected.length != 0"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-btn
                    block
                    depressed
                    color="#a4010b"
                    class="white--text"
                    @click="validarAlumnos()"
                    >Registrar Estudiantes
                  </v-btn>
                </v-toolbar>
              </template>
              <template v-slot:item.nombre="{ item }">
                {{ item.alumno.nombre }} {{ item.alumno.paterno }}
                {{ item.alumno.materno }}
              </template>
            </v-data-table>
            <v-data-table
              item-key="name"
              class="elevation-8 overflow-auto"
              max-height="480px"
              loading
              loading-text="Seleccionar estudiantes para registrar"
              v-else
            >
              <template v-slot:no-data>
                No se encuentran estudiantes registrados actualmente!
              </template>
            </v-data-table>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FormacionInDataService from "../../services/FormacionInDataService";
import EventosDataService from "../../services/EventosDataService";
import swal from "sweetalert";
import drawer from "../Drawer/Drawer.vue";
import axios from "axios";

export default {
  name: "registro",
  data() {
    return {
      alumnos: [],
      selectedCiclo: null,
      singleSelect: true,
      selected: [],
      evento: [],
      search: "",
      alumnosRegistrados: 0,
      disponible: 0,
      count: 0,
      categoria: "",
      headers: [
        {
          text: "Matricula",
          align: "start",
          sortable: true,
          value: "cve_alumno",
        },
        { text: "Nombres", value: "alumno.nombre" },
        { text: "Paterno", value: "alumno.paterno" },
        { text: "Materno", value: "alumno.materno" },
        { text: "Carrera", sortable: true, value: "desc_carrera" },
        { text: "Ciclo", value: "semestre" },
      ],
      headersRegistrados: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "alumno.nombre",
        },
        {
          text: "Apellido paterno",
          align: "start",
          sortable: false,
          value: "alumno.paterno",
        },
        {
          text: "Apellido materno",
          align: "start",
          sortable: false,
          value: "alumno.materno",
        },
        {
          text: "Matricula",
          align: "start",
          sortable: false,
          value: "cve_alumno",
        },
      ],
      registro: {
        id: null,
        nombre: "",
        matricula: "",
        asistencia: null,
        evento: null,
        alumno: null,
      },
      ciclos: [],
      cve_ciclo: [],
    };
  },
  components: {
    drawer,
  },
  methods: {
    retrieveAlumnos() {},

    sendEvent() {
      if (this.categoria != "Externos") {
        this.$router.push("/fi-asistencia/" + this.$route.params.id);
      } else {
        this.$router.push("/fi-validacion/" + this.$route.params.id);
      }
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
      /*const cicloValue = this.getCicloValue(this.selectedCiclo);
      if (cicloValue) {
        axios
          .get(
            "https://fibackend.ujed.mx/alumnos/get_coordinator?cve_ciclo=" + cicloValue
            /*"http://127.0.0.1:8000/alumnos/get_coordinator?cve_ciclo=" + cicloValue
          )
          .then((response) => {
            console.log(response.data);
            console.log(cicloValue);
            this.alumnos = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }*/
    },

    getCiclosFromAPI() {
      axios
        .get("https://fibackend.ujed.mx/eventos/descCiclo/")
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
      return axios.get(`https://fibackend.ujed.mx/eventos/cicloActual/`)
      .then((response) => {
        const cicloId = response.data.id; //valor del id
        const cicloValor = response.data.valor;
        console.log('Id:', cicloId, 'valor: ', cicloValor)


        //console.log("cve_ciclo: " + [response.data.valor]);
        this.cve_ciclo = `${cicloValor} (${cicloId})`;
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
    validarAlumnos() {
      console.log(this.obtenerDisponible());
      if(this.disponible >= 0){
        for(let alumno of this.selected){
          FormacionInDataService.getUserExist(this.$route.params.id, alumno.cve_alumno)
          .then((response) => {
            if (response.data.length == 1){
              swal("Estudiante ya esta Registrado", "", "warning");
              console.log(
                  "alumno existente: " +
                    alumno.alumno.nombre +
                    " " +
                    alumno.alumno.paterno +
                    " " +
                    alumno.alumno.materno
                );
            }else{
              swal("Estudiante Registrado", "", "success");
              console.log(
                  "alumno registrado: " +
                    alumno.alumno.nombre +
                    " " +
                    alumno.alumno.paterno +
                    " " +
                    alumno.alumno.materno
                );
              this.registrarAlumnos(alumno);
            }
            //console.log(response);
          }).catch((e) => {
            console.log(e);
          });
        }
      }else{
        swal("Excedio el limite de lugares disponibles", "", "warning");
      }
      setTimeout(this.sendEvent, 1000);
      
      /*if (this.disponible >= 0) {
        for (let alumno of this.selected) {
          FormacionInDataService.getUserExist(
            this.$route.params.id,
            alumno.matricula
          )
            .then((response) => {
              if (response.data.length == 1) {
                console.log(
                  "alumno existente: " +
                    alumno.alumno.nombre +
                    " " +
                    alumno.alumno.paterno +
                    " " +
                    alumno.alumno.materno
                );
              } else {
                console.log(
                  "alumno registrado: " +
                    alumno.alumno.nombre +
                    " " +
                    alumno.alumno.paterno +
                    " " +
                    alumno.alumno.materno
                );
                this.registrarAlumnos(alumno);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      } else {
        swal("Excedio el limite de lugares disponibles", "", "warning");
      }
      setTimeout(this.sendEvent, 1000);*/
    },

    registrarAlumnos(alumno) {
      var data = {
        nombre:
          alumno.alumno.nombre +
          " " +
          alumno.alumno.paterno +
          " " +
          alumno.alumno.materno,
        matricula: alumno.cve_alumno,
        asistencia: null,
        evento: this.$route.params.id,
      };
      FormacionInDataService.create(data)
        .then((response) => {
          this.eventos.id = response.data.id;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    infoEvento() {
      EventosDataService.getevento(this.$route.params.id)
        .then((response) => {
          this.evento = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    numAlumnos() {
      FormacionInDataService.getAll(this.$route.params.id)
        .then((response) => {
          this.alumnosRegistrados = response.data.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    obtenerDisponible() {
      this.disponible =
        this.evento.cupo - this.alumnosRegistrados - this.selected.length;
    },

    getEvent() {
      EventosDataService.getevento(this.$route.params.id)
        .then((response) => {
          this.categoria = response.data.categorias;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  async mounted() {
    this.getCiclosFromAPI();

    const token = sessionStorage.getItem("jwtToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.request(
          "https://fibackend.ujed.mx/alumnos/get_coordinator"
        );
        this.alumnos = response.data;
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log("No token");
    }
  },
  created() {
    this.retrieveAlumnos();
    this.infoEvento();
    this.numAlumnos();
    this.getEvent();
  },
};
</script>

<style></style>
