<template>
  <div class="submit-form">
    <drawer />
    <v-card>
      <v-card-title> Registro de evento </v-card-title>
      <div v-if="!submitted">
        <v-container style="padding: 0px 40px 40px 40px">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Título"
                    id="tituloEvento"
                    v-model="eventos.tituloEvento"
                    name="tituloEvento"
                    required
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    :rules="[(v) => !!v || 'Campo requerido']"
                    v-model="unidadResponsable"
                    :items="escuelas"
                    item-value="key"
                    item-text="value"
                    label="Unidad Responsable"
                    outlined
                    :counter="100"
                    required
                  ></v-combobox>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Responsable"
                    id="responsable"
                    v-model="eventos.responsable"
                    name="responsable"
                    required
                    outlined
                    filled
                    readonly
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-textarea
                    v-model="eventos.descripcionEvento"
                    id="descripcionEvento"
                    name="descripcionEvento"
                    label="Descripción del evento"
                    :counter="1000"
                    rows="2"
                    required
                    outlined
                    :rules="[(v) => !!v || 'Campo requerido']"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    id="eventoDedicadoA"
                    required
                    v-model="eventos.eventoDedicadoA"
                    name="eventoDedicadoA"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Tipo de evento"
                    :items="tipoEventos"
                    outlined
                  ></v-combobox>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="fechaInicio"
                    v-model="eventos.fechaInicio"
                    name="fechaInicio"
                    :rules="[(v) => !!v || 'Campo requerido', validarFechas]"
                    label="Fecha de inicio"
                    required
                    outlined
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="inicioEvento"
                    required
                    v-model="eventos.inicioEvento"
                    name="inicioEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Hora de inicio"
                    outlined
                    type="time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="fechaFin"
                    v-model="eventos.fechaFin"
                    name="fechaFin"
                    :rules="[(v) => !!v || 'Campo requerido', validarFechas]"
                    label="Fecha fin del evento"
                    required
                    outlined
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="finEvento"
                    required
                    v-model="eventos.finEvento"
                    name="finEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Hora final del evento"
                    outlined
                    type="time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    v-model="eventos.sede"
                    id="sede"
                    required
                    name="sede"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Sede del evento"
                    outlined
                    :items="sede"
                  ></v-combobox>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="cupo"
                    required
                    v-model="eventos.cupo"
                    name="cupo"
                    type="number"
                    maxlength="4"
                    min="1"
                    max="1000"
                    placeholder="Máximo de personas 1000"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Cupo de evento"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="descripcion"
                    required
                    v-model="eventos.descripcion"
                    name="descripcion"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="150"
                    label="Descripción del lugar"
                    outlined
                  ></v-text-field>
                </v-col>


                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-file-input
                    id="flayer"
                    name="flayer"
                    variant="outlined"
                    v-model="eventos.flayer"
                    label="Subir flyer"
                    @change="onFileChange"
                  ></v-file-input>

                  
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="horas_totales"
                    required
                    v-model="eventos.horas_totales"
                    name="horas_totales"
                    type="number"
                    maxlength="2"
                    min="2"
                    max="2"
                    placeholder="Máximo 20 horas"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Horas totales del evento"
                    outlined
                    @input="calcularCreditos"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="creditosOtorgados"
                    required
                    v-model="eventos.creditosOtorgados"
                    name="creditos"
                    type="number"
                    maxlength="4"
                    min="0"
                    max="10"
                    placeholder="Máximo 1 crédito"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Créditos"
                    filled
                    readonly
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="contacto"
                    required
                    v-model="eventos.contacto"
                    name="contacto"
                    type="text"
                    maxlength="100"
                    min="0"
                    max="100"
                    placeholder="Número o correo de contacto"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Número o correo de contacto"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    v-model="eventos.categorias"
                    id="categorias"
                    name="categorias"
                    :items="clasificacion"
                    label="Categoría del evento"
                    required
                    outlined
                    @change="getCategorias1($event.id)"
                    :rules="[(v) => !!v || 'Campo requerido']"
                  ></v-combobox>
                </v-col>

                <v-col
                  v-if="eventos.categorias != ''"
                  cols="12"
                  md="4"
                  sm="6"
                  lg="4"
                  xl="4"
                >
                  <v-combobox
                    v-model="eventos.categorias_1"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :items="categoria1"
                    id="categorias_1"
                    name="categorias_1"
                    label="Categoría"
                    outlined
                    :counter="100"
                    required
                    @change="getCategorias2($event.id)"
                  ></v-combobox>
                </v-col>

                <p
                  v-if="
                    eventos.categorias_1 != '' && eventos.categorias_1.id >= 23
                  "
                >
                  Objetivo: {{ eventos.categorias_1.objetivo }}
                </p>

                <template v-if="eventos.categorias_1 != ''">
                  <v-col
                    v-if="
                      eventos.categorias.id == 18 ||
                      eventos.categorias_1.id >= 23
                    "
                    cols="12"
                    md="4"
                    sm="6"
                    lg="4"
                    xl="4"
                  >
                    <!-- <v-combobox
                      v-model="eventos.categorias_2"
                      :rules="[(v) => !!v || 'Campo requerido']"
                      :items="categoria2"
                      id="categorias_2"
                      name="categorias_2"
                      label="Categoria s"
                      outlined
                      :counter="100"
                      required
                      @change="imprimirVal($event)"
                    ></v-combobox> -->
                  </v-col>

                  <v-col
                    v-else-if="
                      eventos.categorias_1 != '' &&
                      eventos.categorias_1.id != '18'
                    "
                    cols="12"
                    md="4"
                    sm="6"
                    lg="4"
                    xl="4"
                  >
                    <v-combobox
                      v-model="eventos.categorias_2"
                      :rules="[(v) => !!v || 'Campo requerido']"
                      :items="categoria2"
                      id="categorias_2"
                      name="categorias_2"
                      label="Categoría"
                      outlined
                      :counter="100"
                      required
                      @change="getCategoriasArte($event.id)"
                    ></v-combobox>
                  </v-col>
                </template>

                <v-col
                  v-if="
                    eventos.categorias_2 != '' &&
                    eventos.categorias.id == 1 &&
                    eventos.categorias_2.id < 64
                  "
                  cols="12"
                  md="6"
                  sm="12"
                  lg="6"
                  xl="6"
                >
                  <v-combobox
                    v-model="eventos.categorias_arte"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :items="categoriaArte"
                    id="categorias_arte"
                    name="categorias_arte"
                    label="Categoría Arte"
                    outlined
                    :counter="100"
                    required
                    @change="imprimirVal($event)"
                  ></v-combobox>
                </v-col>
              </v-row>
            </v-container>
            <v-row style="padding: 20px 0px 20px 0px">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <!-- <button class="btn btn-outline-danger mr-2" 
                  @click="deleteEvento"
                >
                  Eliminar
                </button> -->
                <button @click.prevent="saveEvento" class="btn btn-success">
                  CREAR EVENTO
                </button>
              </div>
            </v-row>
            <v-row> </v-row>
          </v-form>
        </v-container>
      </div>
      <div v-else>
        <v-container style="padding: 60px">
          <v-row>
            <button class="btn btn-success" @click="newEvento">
              Capturar otro evento
            </button>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script>
import swal from "sweetalert";
import EventosDataService from "../../services/EventosDataService";
import drawer from "../Drawer/Drawer.vue";
import axios from "axios";

export default {
  name: "add-evento",

  data() {
    return {
      userEmail: "",
      eventos: {
        tituloEvento: "",
        unidadResponsable: "",
        descripcionEvento: "",
        eventoDedicadoA: "",
        fechaInicio: "",
        fechaFin: "",
        inicioEvento: "",
        finEvento: "",
        sede: "",
        cupo: "",
        descripcion: "",
        creditosOtorgados: "",
        categorias: "",
        categorias_1: "",
        categorias_2: "",
        categorias_arte: "",
        responsable: "",
        contacto: "",
        horas_totales: "",
        flyer: "", 
      },
      UserData: "",
      tipoEventos: ["Abierto", "Cerrado"],
      unidades: [
        "Facultad de Ingeniería, Ciencias y Arquitectura (Gómez Palacio).",
        "Facultad de Ciencias de la Salud (Gómez Palacio).",
        "Facultad de Agricultura y Zootecnia (Gómez Palacio).",
        "Facultad de Ciencias Químicas (Gómez Palacio).",
        "Facultad de Ciencias Biológicas (Gómez Palacio).",
        "Escuela de Lenguas (Gómez Palacio).",
        "Facultad de Medicina y Nutrición (Durango).",
        "Facultad de Derecho y Ciencias Políticas (Durango).",
        "Facultad de Economía, Contaduría y Administración (Durango).",
        "Facultad de Medicina Veterinaria y Zootecnia (Durango).",
        "Facultad de Enfermería y Obstetricia (Durango).",
        "Facultad de Trabajo Social (Durango).",
        "Facultad de Psicología y Terapia de Comunicación Humana (Durango).",
        "Facultad de Ciencias Cultura Física y Deporte (Durango).",
        "Facultad de Odontología (Durango).",
        "Escuela superior de Música (Durango).",
        "Facultad de Ciencias Forestales y Ambientales (Durango).",
        "Facultad de Ciencias Químicas (Durango).",
        "Facultad de Ciencias Exactas (Durango).",
        "Escuela Preparatoria Diurna (Durango).",
        "Facultad de Lenguas (Durango).",
        "Instituto de Bellas Artes",
        "Instituto de Ciencias Sociales",
        "Instituto de Investigación Científica",
        "Instituto de Investigaciones Históricas",
        "Instituto de Investigaciones Jurídicas",
        "Instituto de Silvicultura e Industria de la Madera",
        "Dirección de Servicios Escolares",
        "Dirección de Internacionalización",
        "Dirección de Vinculación y Extensión Institucional",
        "Dirección de Difusión Cultural",
        "Dirección de Comunicación Social",
        "Editorial UJED",
        "Librería UJED",
        "Subsecretaría General Académica",
        "Servicios Escolares",
        "Extensión Universitaria",
        "Dirección General de Bibliotecas",
        "Dirección de Desarrollo y Gestión de Recursos Humanos",
        "Coordinación de Capacitación Institucional",
        "Dirección de Vinculación Institucional",
        "Centro de Negocios",
        "Servicios ofrecidos por cada unidad",
        "Difusión Cultural",
        "Centro de Desarrollo del Deporte Universitario",
        "Comunicación Social",
        "TV UJED",
      ],

      escuelas:[
        { key: '1250', value: 'FFacultad de Ingeniería, Ciencias y Arquitectura (Gómez Palacio).' },
        { key: '1300', value: 'Facultad de Ciencias de la Salud (Gómez Palacio).' },
        { key: '1350', value: 'Facultad de Agricultura y Zootecnia (Gómez Palacio).' },
        { key: '1400', value: 'Facultad de Ciencias Químicas (Gómez Palacio).' },
        { key: '1780', value: 'Facultad de Ciencias Biológicas (Gómez Palacio).' },
        { key: '3550', value: 'Escuela de Lenguas (Gómez Palacio).' },
        { key: '1050', value: 'Facultad de Medicina y Nutrición (Durango).' },
        { key: '1100', value: 'Facultad de Derecho y Ciencias Políticas (Durango).' },
        { key: '1150', value: 'Facultad de Economía, Contaduría y Administración (Durango).' },
        { key: '1200', value: 'Facultad de Medicina Veterinaria y Zootecnia (Durango).' },
        { key: '1450', value: 'Facultad de Enfermería y Obstetricia (Durango).' },
        { key: '1500', value: 'Facultad de Trabajo Social (Durango).' },
        { key: '1520', value: 'Facultad de Psicología y Terapia de Comunicación Humana (Durango).' },
        { key: '1540', value: 'Facultad de Ciencias Cultura Física y Deporte (Durango).' },
        { key: '1550', value: 'Facultad de Odontología (Durango).' },
        { key: '1600', value: 'Escuela superior de Música (Durango).' },
        { key: '1650', value: 'Facultad de Ciencias Forestales y Ambientales (Durango).' },
        { key: '1700', value: 'Facultad de Ciencias Químicas (Durango).' },
        { key: '1740', value: 'Facultad de Ciencias Exactas (Durango).' },
        { key: '1860', value: 'Escuela Preparatoria Diurna (Durango).' },
        { key: '3450', value: 'Facultad de Lenguas (Durango).' },
        { key: '305009', value: 'Instituto de Bellas Artes' },
        { key: '2200', value: 'Instituto de Ciencias Sociales' },
        { key: '2100', value: 'Instituto de Investigación Científica' },
        { key: '2400', value: 'Instituto de Investigaciones Históricas' },
        { key: '2300', value: 'Instituto de Investigaciones Jurídicas' },
        { key: '2500', value: 'Instituto de Silvicultura e Industria de la Madera' },
        { key: '1', value: 'Dirección de Servicios Escolares' },
        { key: '2', value: 'Dirección de Internacionalización' },
        { key: '51300', value: 'Dirección de Vinculación y Extensión Institucional' },
        { key: '3050', value: 'Dirección de Difusión Cultural' },
        { key: '4400', value: 'Dirección de Comunicación Social' },
        { key: '51600', value: 'Editorial UJED' },
        { key: '405005', value: 'Librería UJED' },
        { key: '5700', value: 'Subsecretaría General Académica' },
        { key: '3', value: 'Servicios Escolares' },
        { key: '3100', value: 'Extensión Universitaria' },
        { key: '4', value: 'Dirección General de Bibliotecas' },
        { key: '5', value: 'Dirección de Desarrollo y Gestión de Recursos Humanos' },
        { key: '6', value: 'Coordinación de Capacitación Institucional' },
        { key: '0', value: 'Dirección de Vinculación Institucional' },
        { key: '7', value: 'Centro de Negocios' },
        { key: '8', value: 'Servicios ofrecidos por cada unidad' },
        { key: '9', value: 'Difusión Cultural' },
        { key: '10', value: 'Centro de Desarrollo del Deporte Universitario' },
        { key: '51400', value: 'Comunicación Social' },
        { key: '405001', value: 'TV UJED' },
      ],

      sede: [
        "Facultad de Ingeniería, Ciencias y Arquitectura (Gómez Palacio).",
        "Facultad de Ciencias de la Salud (Gómez Palacio).",
        "Facultad de Agricultura y Zootecnia (Gómez Palacio.",
        "Facultad de Ciencias Químicas (Gómez Palacio).",
        "Facultad de Ciencias Biológicas (Gómez Palacio).",
        "Escuela de Lenguas (Gómez Palacio).",
        "Facultad de Medicina y Nutrición (Durango).",
        "Facultad de Derecho y Ciencias Políticas (Durango).",
        "Facultad de Economía, Contaduría y Administración (Durango).",
        "Facultad de Medicina Veterinaria y Zootecnia (Durango).",
        "Facultad de Enfermería y Obstetricia (Durango).",
        "Facultad de Trabajo Social (Durango).",
        "Facultad de Psicología y Terapia de Comunicación Humana (Durango).",
        "Facultad de Ciencias Cultura Física y Deporte (Durango).",
        "Facultad de Odontología (Durango).",
        "Escuela superior de Música (Durango).",
        "Facultad de Ciencias Forestales y Ambientales (Durango).",
        "Facultad de Ciencias Químicas (Durango).",
        "Facultad de Ciencias Exactas (Durango).",
        "Escuela Preparatoria Diurna (Durango).",
        "Facultad de Lenguas (Durango).",
        "Instituto de Bellas Artes",
        "Instituto de Ciencias Sociales",
        "Instituto de Investigación Científica",
        "Instituto de Investigaciones Históricas",
        "Instituto de Investigaciones Jurídicas",
        "Instituto de Silvicultura e Industria de la Madera",
        "Dirección de Servicios Escolares",
        "Dirección de Internacionalización",
        "Dirección de Vinculación y Extensión Institucional",
        "Dirección de Difusión Cultural",
        "Dirección de Comunicación Social",
        "Editorial UJED",
        "Librería UJED",
        "Subsecretaría General Académica",
        "Servicios Escolares",
        "Extensión Universitaria",
        "Dirección General de Bibliotecas",
        "Dirección de Desarrollo y Gestión de Recursos Humanos",
        "Coordinación de Capacitación Institucional",
        "Dirección de Vinculación Institucional",
        "Centro de Negocios",
        "Servicios ofrecidos por cada unidad",
        "Difusión Cultural",
        "Centro de Desarrollo del Deporte Universitario",
        "Comunicación Social",
        "TV UJED",
      ],
      clasificacion: [],
      categoria1: [],
      categoria2: [],
      categoriaArte: [],
      submitted: false,
      valid: true,
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
    };
  },
  created() {
    this.getClasificacion();
  },
  components: {
    drawer,
  },
  async mounted() {
    const token = sessionStorage.getItem("jwtToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const response = await axios.get(
          "https://fibackend.ujed.mx/alumnos/user" /*"http://127.0.0.1:8000/alumnos/user"*/
        );

        this.userEmail = response.data.email;
        this.eventos.responsable = response.data.email;
      } catch (error) {
        console.error("Error ", error);
      }
    } else {
      console.error("No token");
    }
  },

  methods: {
    getClasificacion() {
      EventosDataService.getClasificacion()
        .then((response) => {
          this.clasificacion = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    validarFechas() {
      if (this.eventos.fechaFin && this.eventos.fechaInicio) {
        const fechaFin = new Date(this.eventos.fechaFin);
        const fechaInicio = new Date(this.eventos.fechaInicio);

        if (fechaFin < fechaInicio) {
          return "La fecha de final no puede ser menor que la fecha de inicio";
        }
      }
      return true;
    },

    getCategorias1(clasf_id) {
      EventosDataService.getCategorias1(clasf_id)
        .then((response) => {
          this.eventos.categorias_1 = "";
          this.eventos.categorias_2 = "";
          this.eventos.categorias_arte = "";
          this.categoria1 = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategorias2(cat_1) {
      EventosDataService.getCategorias2(cat_1)
        .then((response) => {
          this.eventos.categorias_2 = "";
          this.categoria2 = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategoriasArte(cat) {
      EventosDataService.getCategoriasArte(cat)
        .then((response) => {
          this.categoriaArte = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    imprimirVal(value) {
      console.log(value);
    },
    validate() {
      this.valid = this.$refs.form.validate();
    },
    saveEvento() {
      this.validate();
      if (this.valid == true) {
        this.createEvento();
      } else {
        console.log("Evento no Validado " + false);
        console.log(false);
      }
    },

    newEvento() {
      location.reload();
    },
    createEvento() {
      console.log(this.eventos.unidadResponsable);
      var data = {
        tituloEvento: this.eventos.tituloEvento,
        unidadResponsable: this.eventos.unidadResponsable,
        descripcionEvento: this.eventos.descripcionEvento,
        eventoDedicadoA: this.eventos.eventoDedicadoA,
        responsable: this.eventos.responsable,
        // fechaEvento: this.eventos.fechaEvento,
        fechaFin: this.eventos.fechaFin,
        fechaInicio: this.eventos.fechaInicio,
        inicioEvento: this.eventos.inicioEvento,
        finEvento: this.eventos.finEvento,
        sede: this.eventos.sede,
        cupo: this.eventos.cupo,
        descripcion: this.eventos.descripcion,
        creditos: this.eventos.creditosOtorgados,
        categorias: this.eventos.categorias.id,
        horas_totales: this.eventos.horas_totales,
        contacto: this.eventos.contacto,
        flayer: this.eventos.flayer,
      };
      if (this.eventos.categorias_1 != "") {
        data.subCategoria1 = this.eventos.categorias_1.id;
      }
      if (this.eventos.categorias_2 != "") {
        data.subCategoria2 = this.eventos.categorias_2.id;
      }
      if (this.eventos.categorias_arte != "") {
        data.subCategoriaArte = this.eventos.categorias_arte.id;
      }

      EventosDataService.create(data)
        .then((response) => {
          this.submitted = true;
          swal("El evento se ha registrado correctamente!!", "", "success");
          this.createCalendario(response.data);
        })
        .catch((e) => {
          console.log(e);
          swal(
            "No se pudo registrar el evento. Verifique que lleno correctamente todos los campos.",
            "",
            "error"
          );
        });
    },

    createCalendario(dataEvento) {
      var campos = {
        name: dataEvento.tituloEvento,
        color: this.colors[this.rnd(0, this.colors.length - 1)],
        start: dataEvento.fechaInicioEvento + " " + dataEvento.inicioEvento,
        end: dataEvento.fechaFinEvento + " " + dataEvento.finEvento,
        details: dataEvento.descripcionEvento,
        evento: dataEvento.id,
      };
      EventosDataService.createCalendario(campos)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
          swal("El evento se registro y agrego al calendario!!", "", "success");
        })
        .catch((e) => {
          console.log(e);
          swal("No se pudo agregar al calendario", "", "error");
        });
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },

    calcularCreditos() {
      const horasTotales = parseFloat(this.eventos.horas_totales) || 0;
      const creditos = horasTotales / 20;

      this.eventos.creditosOtorgados = creditos;

    },
  },
};
</script>

<style></style>
