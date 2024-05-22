<template>
  <div>
    <drawer/>
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            depressed
            elevation="2"
            plain
            block
            @click="sendEvent()"
          >Registro</v-btn>
        </v-col>
        <v-col>
          <v-btn
            depressed
            elevation="2"
            block
            color = "#a4010b"
            class="white--text"
          >Asistencia</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

        </v-col>
        <v-col>
          <v-btn
            depressed
            elevation="2"
            block
            color = "success"
            class="white--text"
            @click="aplicarAsistenciaGrupal()"
          >Aplicar Asistencia a todos</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-data-table
          :headers="headers"
          :items="alumnos"
          :search="search"
          item-key="id"
          class="elevation-8"
          show-select
          @change="retrieveAlumnos($route.params.id)"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Estudiantes Registrados al evento</v-toolbar-title>
              <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Buscar Alumnos"
                    single-line
                    hide-details
                  ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.eliminar="{ item }">
            <v-btn
              class="ma-2"
              color="red"
              dark
              @click="deleteAlumno(item.id)"
            >
              <v-icon
                dark
              >
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:item.evidencia="{ item }">
            <v-btn
              class="ma-2"
              color=""
              @click="retrievEvidencia(item), datosValidacion == item"
              @click.stop="dialog = true"
            >
              <v-icon>
                mdi-account-details
              </v-icon>
            </v-btn> 
          </template>
          <template v-slot:item.apAsistencia="{ item }">
          <v-btn v-if="item.asistencia != 1"
              class="ma-2"
              @click="aplicarAsistencia(item, 1)"
            >
              <v-icon>
                mdi-checkbox-marked-circle
              </v-icon>
            </v-btn>
            <v-btn v-if="item.asistencia == 1"
              class="ma-2"
              color="success"
              dark
              @click="aplicarAsistencia(item, 1)"
            >
              <v-icon>
                mdi-checkbox-marked-circle
              </v-icon>
            </v-btn>
            <v-btn v-if="item.asistencia != 0"
              class="ma-2"
              color=""
              @click="aplicarAsistencia(item, 0)"
            >
              <v-icon
                dark
              >
                mdi-cancel
              </v-icon>
            </v-btn>
            <v-btn v-if="item.asistencia == 0"
              class="ma-2"
              color="red"
              dark
              @click="aplicarAsistencia(item, 0)"
            >
              <v-icon
                dark
              >
                mdi-cancel
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:no-data>
            No se encuentran alumnos registrados actualmente!
          </template>
          
        </v-data-table>
      </v-row>
      <v-dialog
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="600"
      >
        <v-card>
          <v-toolbar
            color="#A4010B"
            dark
          >Evidencia del estudiante: {{datosValidacion.nombre}}</v-toolbar>
          <v-card-text>
            <v-container fluid>
              <v-row justify="space-around" style="padding-top: 10px">
                <template v-if="evidencia.length == 0">
                  <v-img
                    lazy-src="https://st3.depositphotos.com/2927609/32461/v/600/depositphotos_324611032-stock-illustration-no-image-vector-icon-no.jpg"
                    max-height="300"
                    max-width="300"
                    src="https://st3.depositphotos.com/2927609/32461/v/600/depositphotos_324611032-stock-illustration-no-image-vector-icon-no.jpg"
                  ></v-img>
                </template>
                <template v-else>
                  <template v-if="isImage(evidencia[0].img)">
                    <v-img
                      :lazy-src="evidencia[0].img"
                      max-height="600"
                      max-width="600"
                      :src="evidencia[0].img"
                    ></v-img>
                  </template>
                  <template v-else>
                    <img class="img-pdf" src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/filetype-pdf-512.png" alt="PDF Icon" style="width: 200px; height: 200;">
                    <a class="text-center pdf-link" :href="evidencia[0].img" target="_blank" rel="noopener noreferrer">Ver PDF</a>
                  </template>
                </template>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              class="ma-2"
              color="red"
              dark
              @click.stop="dialog = false"
            >Cerrar</v-btn>
            <v-btn
              class="ma-2"
              color="ligthen"
              @click="descargarEvidencia()"
            >Descargar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import FormacionInDataService from "../../services/FormacionInDataService";
import EventosDataService from "../../services/EventosDataService";
import swal from 'sweetalert'
import drawer from "../Drawer/Drawer.vue"; 


export default {
    name: "asistencia",
    data() {
      return {
        alumnos: [],
        search: '',
        headers: [
          { text: 'Nombres', value: 'nombre' },
          { text: 'Matricula', value: 'matricula'},
          { text: 'Verificar Evidencia', align: 'center', value: 'evidencia'},
          { text: 'Aplicar Asistencia', align: 'center', value: 'apAsistencia'},
          { text: 'Eliminar', align: 'center', value: 'eliminar'}
        ],
        evento: [],
        dialog: false,
        evidencia: [],
        datosValidacion: [],
        rutaImg: '',
      };
    },
    components:{
      drawer
    }, 
    methods: {

      retrieveAlumnos(retrive_id) {
        FormacionInDataService.getAll(retrive_id)
          .then(response => {
            this.alumnos = response.data;
            console.log(this.alumnos);
          }) 
          .catch(e => {
            console.log(e);
          });
      },

      isImage(file) {
        return /\.(jpg|jpeg|png|gif|bmp)$/i.test(file);
      },

      mostrarRuta(){
        if(this.evidencia.length > 0){
          return this.rutaImg = this.evidencia[0].img;
        }
        return null;
      },

      descargarEvidencia(){
        console.log(this.mostrarRuta());
        const url = this.mostrarRuta();

        if(url){
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', '');
          link.setAttribute('target', '_blanck');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }else{
          console.log('No hay ruta de imagen para descargar');
        }
      },

      sendEvent() {
        console.log(this.$route.params.id)
        this.$router.push("/fi-registro/"+this.$route.params.id);
      },

      aplicarAsistencia(item, asistencia){
        item.asistencia = asistencia;

        FormacionInDataService.update(item.id, item)
        .then(response => {
          console.log(response.data);
            if(asistencia == 1){
              swal("Asistio al evento","","success")
            }else{
              swal("No asistio al evento","","error")
            }
        })
        .catch(e => {
          console.log(e);
           swal("No se pudo actualizar la asistencia","","error")
        });
      },

      aplicarAsistenciaGrupal(){
        for (let alumno of this.alumnos) {
          this.aplicarAsistencia(alumno, 1);
        }
      },

      getEvent(){
        EventosDataService.getevento(this.$route.params.id)
          .then(response => {
            this.evento = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      },

      deleteAlumno(id){
        FormacionInDataService.delete(id)
        .then(response => {
          console.log(response.data);
          swal("El alumno se elimino correctamente!","","success")
          this.retrieveAlumnos(this.$route.params.id);
        })
        .catch(e => {
          console.log(e);
          swal("Ocurrio un error al eliminar al Alumno","","error")
        });
      },

      retrievEvidencia(data){
            EventosDataService.getEvidencias(this.$route.params.id, data.alumno)
                .then(response => {
                    console.log(response.data);
                    this.evidencia = response.data;
                    this.datosValidacion = data;
                })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    mounted() {
      this.retrieveAlumnos(this.$route.params.id);
    },
    
    created (){
      this.retrieveAlumnos(this.$route.params.id);
      this.getEvent();
    },
}
</script>

<style>
.pdf-link{
  padding: 10px 16px;
}

.img-pdf{
  justify-content: center;
}
</style>