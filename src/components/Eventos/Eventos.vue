<template lang="html">
  <div v-if="currentEvento" class="edit-form">
    <drawer />
    <v-container>
      <v-card>
        <v-card-title> Actualizar Evento </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Titulo de Evento"
                    id="tituloEvento"
                    v-model="currentEvento.tituloEvento"
                    name="tituloEvento"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    :rules="[(v) => !!v || 'Campo requerido']"
                    v-model="currentEvento.unidadResponsable"
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
                    v-model="currentEvento.responsable"
                    name="responsable"
                    required
                    outlined
                    filled
                    readonly
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-textarea
                    v-model="currentEvento.descripcionEvento"
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
                    v-model="currentEvento.eventoDedicadoA"
                    name="eventoDedicadoA"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="100"
                    label="Tipo de evento"
                    :items="tipoEventos"
                    outlined
                  ></v-combobox>
                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                  <v-text-field
                    id="fechaEvento"
                    v-model="currentEvento.fechaInicio"
                    name="fechaEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Fecha de inicio de REGISTRO del evento"
                    required
                    outlined
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                  <v-text-field
                    id="fechaEvento"
                    v-model="currentEvento.fechaFin"
                    name="fechaEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Fecha fin de REGISTRO del evento"
                    required
                    outlined
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="inicioEvento"
                    required
                    v-model="currentEvento.inicioEvento"
                    name="inicioEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Hora de inicio de REGISTRO del evento"
                    outlined
                    type="time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="finEvento"
                    required
                    v-model="currentEvento.finEvento"
                    name="finEvento"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Hora final de REGISTRO del evento"
                    outlined
                    type="time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="fecha"
                    required
                    v-model="currentEvento.fecha"
                    name="fecha"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Fecha del Evento"
                    outlined
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="hora"
                    required
                    v-model="currentEvento.hora"
                    name="fecha"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Hora del Evento"
                    outlined
                    type="time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    v-model="currentEvento.sede"
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
                    v-model="currentEvento.cupo"
                    name="cupo"
                    type="number"
                    maxlength="4"
                    min="1"
                    max="1000"
                    placeholder="maximo mil personas"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Cupo del evento"
                    outlined
                  ></v-text-field>
                </v-col>
              
                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="descripcion"
                    required
                    v-model="currentEvento.descripcion"
                    name="descripcion"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :counter="150"
                    label="Descripción del lugar"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="creditosOtorgados"
                    required
                    v-model="currentEvento.creditos"
                    name="creditos"
                    type="number"
                    maxlength="4"
                    min="0"
                    max="10"
                    placeholder="maximo 1 creditos"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Creditos otorgados en el evento"
                    outlined
                    readonly
                    filled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="contacto"
                    required
                    v-model="currentEvento.contacto"
                    name="contacto"
                    type="text"
                    maxlength="100"
                    min="0"
                    max="100"
                    placeholder="Numero o correo de contacto"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="Numero o correo de contacto"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-file-input
                    id="flayer"
                    name="flayer"
                    variant="outlined"
                    v-model="currentEvento.flayer"
                    label="Subir Nuevo Flyer (.jpg, .png, .jpeg, .img)"
                  ></v-file-input>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-text-field
                    id="horas_totales"
                    required
                    v-model="currentEvento.horas_totales"
                    name="horas_totales"
                    type="number"
                    maxlength="2"
                    min="2"
                    max="2"
                    placeholder="maximo 20 horas"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    label="horas totales del evento"
                    outlined
                    @input="calcularCreditos"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                  <v-combobox
                    v-model="currentEvento.categorias"
                    id="categorias"
                    name="categorias"
                    :items="clasificacion"
                    label="Categoria del evento"
                    required
                    outlined
                    :rules="[(v) => !!v || 'Campo requerido']"
                    @change="getCategorias1($event.id, true)"
                  ></v-combobox>
                </v-col>

                <v-col
                  v-if="currentEvento.categorias != ''"
                  cols="12"
                  md="4"
                  sm="6"
                  lg="4"
                  xl="4"
                >
                  <v-combobox
                    v-model="currentEvento.subCategoria1"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :items="categoria1"
                    id="categorias_1"
                    name="categorias_1"
                    label="Categoria"
                    outlined
                    :counter="100"
                    required
                    @change="getCategorias2($event.id, true)"
                  ></v-combobox>
                </v-col>

                <p
                  v-if="
                    currentEvento.subCategoria1 != '' &&
                    currentEvento.subCategoria1.id >= 23
                  "
                >
                  Objetivo: {{ currentEvento.subCategoria1.objetivo }}
                </p>

                <template v-if="currentEvento.subCategoria1 != ''">
                  <v-col
                    v-if="
                      currentEvento.categorias.id == 18 ||
                      currentEvento.subCategoria1.id >= 23
                    "
                    cols="12"
                    md="6"
                    sm="12"
                    lg="6"
                    xl="6"
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
                      currentEvento.subCategoria1 != '' &&
                      currentEvento.subCategoria1.id != '18'
                    "
                    cols="12"
                    md="4"
                    sm="6"
                    lg="4"
                    xl="4"
                  >
                    <v-combobox
                      v-model="currentEvento.subCategoria2"
                      :rules="[(v) => !!v || 'Campo requerido']"
                      :items="categoria2"
                      id="categorias_2"
                      name="categorias_2"
                      label="Categoria"
                      outlined
                      :counter="100"
                      required
                      @change="getCategoriasArte($event.id)"
                    ></v-combobox>
                  </v-col>
                </template>

                <v-col
                  v-if="
                    currentEvento.subCategoria2 != '' &&
                    currentEvento.categorias.id == 1 &&
                    currentEvento.subCategoria2.id < 64
                  "
                  cols="12"
                  md="4"
                  sm="6"
                  lg="4"
                  xl="4"
                >
                  <v-combobox
                    v-model="currentEvento.subCategoriaArte"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    :items="categoriaArte"
                    id="categorias_arte"
                    name="categorias_arte"
                    label="Categoria Arte"
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

                <button
                  type="submit"
                  class="btn btn-outline-success"
                  @click.prevent="updateEvento"
                >
                  Actualizar evento
                </button>
                <p>{{ message }}</p>
              </div>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
    <br />
  </div>
  <div v-else>
    <br />
    <p>Por favor selecciona un evento...</p>
  </div>
</template>

<script>
import EventosDataService from "../../services/EventosDataService";
import swal from "sweetalert";
import drawer from "../Drawer/Drawer.vue";
import axios from "axios";
export default {
  name: "evento",
  data() {
    return {
      currentEvento: null,
      valid: true,
      message: "",
      clasificacion: [],
      categoria1: [],
      categoria2: [],
      categoriaArte: [],
      tipoEventos: ["Abierto", "Cerrado"],
      unidades: [
        "CEDDU",
        "IMAC",
        "ICED",
        "EDITORIAL",
        "RECTORIA",
        "FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS",
        "FACULTAD DE CIENCIAS EXACTAS",
        "ESCUELA DE LENGUAS",
        "FACULTAD DE ODONTOLOGÍA",
        "FACULTAD DE CIENCIAS QUÍMICAS DGO.",
        "FACULTAD DE CIENCIAS, CULTURA FÍSICA",
        "ESCUELA SUPERIOR DE MÚSICA",
        "ESCUELA DE PINTURA, ESCULTURA Y ARTE",
        "FACULTAD DE PSICOLOGÍA Y TERAPIA COM",
        "FACULTAD DE CIENCIAS FORESTALES",
        "FACULTAD DE ENFERMERÍA Y OBSTETRICIA",
        "FACULTAD DE MEDICINA VETERINARIA Y ZOOT",
        "FACULTAD DE CIENCIAS DE LA SALUD",
        "FACULTAD DE CIENCIAS BIOLÓGICAS",
        "FACULTAD DE INGENIERÍA, CIENCIAS Y ARQUI",
        "FACULTAD DE AGRICULTURA Y ZOOTECNIA",
        "FACULTAD DE TRABAJO SOCIAL (*)",
        "FACULTAD DE MEDICINA Y NUTRICIÓN",
        "MUSEO REGIONAL",
        "FACULTAD DE CIENCIAS QUIMICAS DE GOMEZ PALACIO (*)",
        "FACULTAD DE CIENCIAS QUIMICAS DE GOMEZ PALACIO (*)",
        "Facultad de Ciencias de la Cultura Fisica y Deporte",
        "FACULTAD DE AGRICULTURA Y ZOOTECNIA GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS BIOLÓGICAS GOMEZ PALACIO",
        "ESCUELA DE LENGUAS GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS DE LA SALUD GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS QUÍMICAS",
        "DIRECCIÓN DE DIFUSIÓN CULTURAL",
        "FACULTAD DE TRABAJO SOCIAL",
        "FACULTAD DE ECONOMÍA, CONTADURÍA Y ADM",
        "RADIO UNIVERSIDAD",
        "DIRECCIÓN DE EXTENSIÓN UNIVERSITARIA",
        "TV UJED",
        "DIRECCIÓN DE PLAN Y DESARROLLO ACAD",
        "COORDINACION INSTITUCIONAL FI",
        "UNIVERSIDAD JUÁREZ DEL ESTADO DE DURANGO",
        "COORDINACIÓN DE VINCULACIÓN EMPRES",
        "FACULTAD DE INGENIERÍA, CIENCIAS Y ARQUI GOMEZ PALACIO",
        " ",
        "Bellas Artes UJED",
        "Bellas Artes UJED Lerdo",
        "CIENCIAS SOCIALES",
        "INVESTIGACION CIENTIFICA",
        "INVESTIGACION HISTORICAS",
        "INVESTIGACION JURIDICAS",
        "SILVICULTURA E INDUSTRIA DE LA MADERA",
        "Biblioteca Central Universitaria",
        "Bicentenario",
        "BIOPARQUE, DURANGO",
        "Bioparque estrella, Mty., NL.",
        "Bolsón de Mapimí",
        "Bosque Venustiano Carranza. Torreón, Coah.",
        "Calle 5 de Febrero Esquina con Bruno Martínez, Zona Centro",
        "Campus Gómez Palacio",
        "Cancha de Santa Lucía",
        "Cancha de usos múltiples, FCF",
        "Cancha Frente a Facultad de Ciencias Químicas",
        'Cancha "Robelto Silva", Carretera a Mazatlán km 1.5',
        "Cancún, Quintana Roo",
        "Carretera Durango Mazatlan y Calle Opalo",
        "Casa Cuervo, Guadalajara, Jalisco",
        "Casa de Cultura CITIBANAMEX",
        "Casa de la Cultura de Cd. Lerdo,Durango",
        "Casa de la Cultura de Ciudad Lerdo Durango.  Av. Francisco I. Madero 52 Nte. Col. Centro CP 35150, Lerdo, Durango ",
        "Casa de la cultura de Gómez Palacio, Campestre GP",
        "Casa de la Cultura Durango, Calle Negrete 900 poniente",
        "Casa de las Banquetas Altas,Gómez Palacio Dgo.",
        "Casa Municipal del Arte y la Cultura, Hacienda de los Laureles112, Fracc. Hacienda de Tapias ",
        "Casa Nava avenida, Madero esquina con Ocampo., Ciudad Lerdo, Dgo.",
        "Casino Murano, Hotel las Rosas, Gómez Palacio, Dgo.",
        "Catedral Basílica Menor, Ave. 20 de Noviembre y Constitución",
        "CBTA 3",
        "CBTIS 110",
        "CBTIS 89",
        "CCH",
        "Cd. de Mexico",
        "Cdu (Promocion Deportiva)",
        "CENTRAL UJED",
        "Centro Cultural BANAMEX , 5 de Febrero Esq. con Francisco I. Madero",
        "Centro Cultural y de Convenciones Bicentenario",
        "Centro de Convenciones Bicentenario",
        "Centro de Convenciones, Gómez Palacio ",
        "Centro de Convenciones, Posada del Río. Gómez Palacio, Dgo.",
        "Centro de Integración Laboral, Fracc. Huizache",
        "CENTRO DE INV. Y DE ESTUDIOS AVANZADOS CINVESTAV ",
        "centro de la ciudad de durango ",
        "Centro Escolar Revolución, Sección A Gómez Farías entre Luna y Urrea, Barrio de Tierra Blanca",
        "Centro Especializado de Reintegración y Tratamiento para menores infractores (CERMI)",
        "Centro Monterrey, Nuevo León",
        "Centro Recreativo Tapias ",
        "Centro Regional de Educación para la Conservación (CRECO)",
        "Cerro de Los Remedios, Durango,Dgo.",
        "CIAC (Aquiles Serdán y Bruno Martínez)",
        "CIIDIR IPN,Calle Sigma 119 Fracc. 20 de Noviembre II",
        "Cine CITICINEMAS, Real del Mezquital 101 ",
        "Cinemex",
        "Cineteca Municipal Silvestre Revueltas. Juárez 217 Nte., Zona Centro",
        "CIUDAD DE MEXICO",
        "Ciudad del anciano",
        "CIUDAD UNIVERSITARIA, CDMX",
        "Club de Leones de Durango ",
        "COLEGIO DE BACHILLERES DEL ESTADO DE DURANGO",
        "Colegio De Ciencias Y Humanidades",
        "Colegio de Ginecología",
        "Escuela de ciencias y tecnologia",
        "Escuela preparatoria Diurna",
        "Escuela preparatoria Nocturna",
        "MOVILIDAD",
        "EXTENSION UNIVERSITARIA",
        "VINCULACION INSTITUCIONAL",
        "CENTRO DE NEGOCIOS",
        "DIFUSION CULTURAL",
        "CENTRO DE DESARROLLO DEL DEPORTE UNIVERSITARIO",
        "FORMACION INTEGRAL INSTITUCIONAL",
      ],
      escuelas:[
        { key: '1250', value: 'Facultad de Ingeniería, Ciencias y Arquitectura (Gómez Palacio).' },
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
        "CEDDU",
        "IMAC",
        "ICED",
        "EDITORIAL",
        "RECTORIA",
        "FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS",
        "FACULTAD DE CIENCIAS EXACTAS",
        "ESCUELA DE LENGUAS",
        "FACULTAD DE ODONTOLOGÍA",
        "FACULTAD DE CIENCIAS QUÍMICAS DGO.",
        "FACULTAD DE CIENCIAS, CULTURA FÍSICA",
        "ESCUELA SUPERIOR DE MÚSICA",
        "ESCUELA DE PINTURA, ESCULTURA Y ARTE",
        "FACULTAD DE PSICOLOGÍA Y TERAPIA COM",
        "FACULTAD DE CIENCIAS FORESTALES",
        "FACULTAD DE ENFERMERÍA Y OBSTETRICIA",
        "FACULTAD DE MEDICINA VETERINARIA Y ZOOT",
        "FACULTAD DE CIENCIAS DE LA SALUD",
        "FACULTAD DE CIENCIAS BIOLÓGICAS",
        "FACULTAD DE INGENIERÍA, CIENCIAS Y ARQUI",
        "FACULTAD DE AGRICULTURA Y ZOOTECNIA",
        "FACULTAD DE TRABAJO SOCIAL (*)",
        "FACULTAD DE MEDICINA Y NUTRICIÓN",
        "MUSEO REGIONAL",
        "FACULTAD DE CIENCIAS QUIMICAS DE GOMEZ PALACIO (*)",
        "FACULTAD DE CIENCIAS QUIMICAS DE GOMEZ PALACIO (*)",
        "Facultad de Ciencias de la Cultura Fisica y Deporte",
        "FACULTAD DE AGRICULTURA Y ZOOTECNIA GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS BIOLÓGICAS GOMEZ PALACIO",
        "ESCUELA DE LENGUAS GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS DE LA SALUD GOMEZ PALACIO",
        "FACULTAD DE CIENCIAS QUÍMICAS",
        "DIRECCIÓN DE DIFUSIÓN CULTURAL",
        "FACULTAD DE TRABAJO SOCIAL",
        "FACULTAD DE ECONOMÍA, CONTADURÍA Y ADM",
        "RADIO UNIVERSIDAD",
        "DIRECCIÓN DE EXTENSIÓN UNIVERSITARIA",
        "TV UJED",
        "DIRECCIÓN DE PLAN Y DESARROLLO ACAD",
        "COORDINACION INSTITUCIONAL FI",
        "UNIVERSIDAD JUÁREZ DEL ESTADO DE DURANGO",
        "COORDINACIÓN DE VINCULACIÓN EMPRES",
        "FACULTAD DE INGENIERÍA, CIENCIAS Y ARQUI GOMEZ PALACIO",
        " ",
        "Bellas Artes UJED",
        "Bellas Artes UJED Lerdo",
        "CIENCIAS SOCIALES",
        "INVESTIGACION CIENTIFICA",
        "INVESTIGACION HISTORICAS",
        "INVESTIGACION JURIDICAS",
        "SILVICULTURA E INDUSTRIA DE LA MADERA",

        "Biblioteca Central Universitaria",
        "Bicentenario",
        "BIOPARQUE, DURANGO",
        "Bioparque estrella, Mty., NL.",
        "Bolsón de Mapimí",
        "Bosque Venustiano Carranza. Torreón, Coah.",
        "Calle 5 de Febrero Esquina con Bruno Martínez, Zona Centro",
        "Campus Gómez Palacio",
        "Cancha de Santa Lucía",
        "Cancha de usos múltiples, FCF",
        "Cancha Frente a Facultad de Ciencias Químicas",
        'Cancha "Robelto Silva", Carretera a Mazatlán km 1.5',
        "Cancún, Quintana Roo",
        "Carretera Durango Mazatlan y Calle Opalo",
        "Casa Cuervo, Guadalajara, Jalisco",
        "Casa de Cultura CITIBANAMEX",
        "Casa de la Cultura de Cd. Lerdo,Durango",
        "Casa de la Cultura de Ciudad Lerdo Durango.  Av. Francisco I. Madero 52 Nte. Col. Centro CP 35150, Lerdo, Durango ",
        "Casa de la cultura de Gómez Palacio, Campestre GP",
        "Casa de la Cultura Durango, Calle Negrete 900 poniente",
        "Casa de las Banquetas Altas,Gómez Palacio Dgo.",
        "Casa Municipal del Arte y la Cultura, Hacienda de los Laureles112, Fracc. Hacienda de Tapias ",
        "Casa Nava avenida, Madero esquina con Ocampo., Ciudad Lerdo, Dgo.",
        "Casino Murano, Hotel las Rosas, Gómez Palacio, Dgo.",
        "Catedral Basílica Menor, Ave. 20 de Noviembre y Constitución",
        "CBTA 3",
        "CBTIS 110",
        "CBTIS 89",
        "CCH",
        "Cd. de Mexico",
        "Cdu (Promocion Deportiva)",
        "CENTRAL UJED",
        "Centro Cultural BANAMEX , 5 de Febrero Esq. con Francisco I. Madero",
        "Centro Cultural y de Convenciones Bicentenario",
        "Centro de Convenciones Bicentenario",
        "Centro de Convenciones, Gómez Palacio ",
        "Centro de Convenciones, Posada del Río. Gómez Palacio, Dgo.",
        "Centro de Integración Laboral, Fracc. Huizache",
        "CENTRO DE INV. Y DE ESTUDIOS AVANZADOS CINVESTAV ",
        "centro de la ciudad de durango ",
        "Centro Escolar Revolución, Sección A Gómez Farías entre Luna y Urrea, Barrio de Tierra Blanca",
        "Centro Especializado de Reintegración y Tratamiento para menores infractores (CERMI)",
        "Centro Monterrey, Nuevo León",
        "Centro Recreativo Tapias ",
        "Centro Regional de Educación para la Conservación (CRECO)",
        "Cerro de Los Remedios, Durango,Dgo.",
        "CIAC (Aquiles Serdán y Bruno Martínez)",
        "CIIDIR IPN,Calle Sigma 119 Fracc. 20 de Noviembre II",
        "Cine CITICINEMAS, Real del Mezquital 101 ",
        "Cinemex",
        "Cineteca Municipal Silvestre Revueltas. Juárez 217 Nte., Zona Centro",
        "CIUDAD DE MEXICO",
        "Ciudad del anciano",
        "CIUDAD UNIVERSITARIA, CDMX",
        "Club de Leones de Durango ",
        "COLEGIO DE BACHILLERES DEL ESTADO DE DURANGO",
        "Colegio De Ciencias Y Humanidades",
        "Colegio de Ginecología",
        "Escuela de ciencias y tecnologia",
        "Escuela preparatoria Diurna",
        "Escuela preparatoria Nocturna",
        "MOVILIDAD",
        "EXTENSION UNIVERSITARIA",
        "VINCULACION INSTITUCIONAL",
        "CENTRO DE NEGOCIOS",
        "DIFUSION CULTURAL",
        "CENTRO DE DESARROLLO DEL DEPORTE UNIVERSITARIO",
        "FORMACION INTEGRAL INSTITUCIONAL",
      ],
      responsable: "",
      fechaInicio: "",
      fechaFin: "",
      creditosOtorgados: "",
    };
  },
  components: { drawer },
  methods: {
    getEvento(id) {
      EventosDataService.getevento(id)
        .then((response) => {
          console.log(response.data);
          this.currentEvento = response.data;
          this.getCategorias1(this.currentEvento.categorias.id);
          this.getCategorias2(this.currentEvento.subCategoria1.id);
          if (this.currentEvento.subCategoriaArte) {
            this.getCategoriasArte(this.currentEvento.subCategoria2.id);
          }
          this.calcularCreditos();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    validate() {
      this.valid = this.$refs.form.validate();
    },
    getClasificacion() {
      EventosDataService.getClasificacion()
        .then((response) => {
          this.clasificacion = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategorias1(clasf_id, limpiar) {
      if (limpiar == true) {
        this.currentEvento.subCategoria1 = "";
        this.currentEvento.subCategoria2 = "";
        this.currentEvento.subCategoriaArte = "";
      }
      EventosDataService.getCategorias1(clasf_id)
        .then((response) => {
          this.categoria1 = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategorias2(cat_1, limpiar) {
      if (limpiar == true) {
        this.currentEvento.subCategoria2 = "";
        this.currentEvento.subCategoriaArte = "";
      }
      EventosDataService.getCategorias2(cat_1)
        .then((response) => {
          this.categoria2 = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategoriasArte(cat, limpiar) {
      if (limpiar == true) {
        this.currentEvento.subCategoriaArte = "";
      }
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

    updateEvento() {
      console.log(this.currentEvento.unidadResponsable.key);
      console.log(this.currentEvento.unidadResponsable.value);
      console.log(this.currentEvento.flayer);
      
      const formData = new FormData();
      formData.append('tituloEvento', this.currentEvento.tituloEvento);
      
      // Verificar si los valores de unidadResponsable están definidos antes de agregarlos al FormData
      if (this.currentEvento.unidadResponsable && this.currentEvento.unidadResponsable.key) {
        formData.append('unidadResponsable', this.currentEvento.unidadResponsable.value);
        formData.append('cveUnidadResponsable', this.currentEvento.unidadResponsable.key);
      }
      
      formData.append('descripcionEvento', this.currentEvento.descripcionEvento);
      formData.append('eventoDedicadoA', this.currentEvento.eventoDedicadoA);
      formData.append('fechaInicio', this.currentEvento.fechaInicio);
      formData.append('fechaFin', this.currentEvento.fechaFin);
      formData.append('inicioEvento', this.currentEvento.inicioEvento);
      formData.append('finEvento', this.currentEvento.finEvento);
      formData.append('sede', this.currentEvento.sede);
      formData.append('cupo', this.currentEvento.cupo);
      formData.append('descripcion', this.currentEvento.descripcion);
      formData.append('creditos', this.currentEvento.creditos);
      formData.append('categorias', this.currentEvento.categorias.id);
      formData.append('responsable', this.currentEvento.responsable);
      formData.append('horas_totales', this.currentEvento.horas_totales);
      formData.append('contacto', this.currentEvento.contacto);
      formData.append('fecha', this.currentEvento.fecha);
      formData.append('hora', this.currentEvento.hora);
      
      if (this.currentEvento.flayer instanceof File) {
        formData.append('flayer', this.currentEvento.flayer);
      }
      if (this.currentEvento.subCategoria1 !== "") {
        formData.append('subCategoria1', this.currentEvento.subCategoria1.id);
      } else {
        formData.append('subCategoria1', "");
      }
      if (this.currentEvento.subCategoria2 !== "") {
        formData.append('subCategoria2', this.currentEvento.subCategoria2.id);
      } else {
        formData.append('subCategoria2', "");
      }
      if (this.currentEvento.subCategoriaArte !== "") {
        formData.append('subCategoriaArte', this.currentEvento.subCategoriaArte.id);
      } else {
        formData.append('subCategoriaArte', "");
      }
      
      if (this.valid) {
        EventosDataService.update(this.currentEvento.id, formData)
          .then((response) => {
            console.log(response.data);
            swal("El evento se actualizó correctamente!", "", "success");
            window.location.href = "/eventos";
          })
          .catch((e) => {
            console.log(e);
            swal(
              "No se pudo actualizar el evento correctamente (asegúrese de llenar los campos correctamente)",
              "",
              "error"
            );
          });
      } else {
        console.log("Evento no validado");
      }
    },
    calcularCreditos() {
      const horasTotales = parseFloat(this.currentEvento.horas_totales) || 0;
      const creditos = horasTotales / 20;

      this.currentEvento.creditos = creditos;
    },

    // deleteEvento() {
    //   EventosDataService.delete(this.currentEvento.id)
    //     .then((response) => {
    //       console.log(response.data);
    //       swal("El evento se elimino correctamente!", "", "success");
    //       this.$router.push({ name: "eventos" });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //       swal("Ocurrio un error al eliminar el evento", "", "error");
    //     });
    // },
  },
  async mounted() {
    this.message = "";
    this.getEvento(this.$route.params.id);
    this.getClasificacion();
    console.log(this.$route.params.id);

    const token = sessionStorage.getItem("jwtToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const response = await axios.get(
          "https://fibackend.ujed.mx/alumnos/user"/*"http://127.0.0.1:8000/alumnos/user"*/
        );

        this.userEmail = response.data.email;
        this.currentEvento.responsable = response.data.email;
      } catch (error) {
        console.error("Error ", error);
      }
    } else {
      console.error("No token");
    }
  },
};
</script>

<style></style>
