<template>
  <div>
    <v-navigation-drawer v-model="drawer" app id="sideBar" color="#202428" dark>
      <v-list-item style="background-color: #282420" class="px-4">
        <v-list-item-content>
          <img
            src="../../assets/uje-removebg-preview.png"
            width="40px"
            :height="'48px'"
          />
        </v-list-item-content>
      </v-list-item>

      <v-list v-for="item in items" :key="item.title" link>
        <v-list-item :to="item.route" color="#50ab87">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#202428" dark app>
      <v-toolbar-title style="width: 1500px" class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down" id="pageName"
          >Programa de Formación y Desarrollo Profesional
        </span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-btn rounded style="margin-right: 20px" @click="logout" color="#50ab87"
        >Cerrar sesión</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "drawer",

  components: {},

  data: () => ({
    drawer: true,
    items: [
      { title: "Inicio", icon: "mdi-home", route: "/inicio" },
      { title: "Eventos", icon: "mdi-calendar-text", route: "/eventos" },
      { title: "Capturar eventos", icon: "mdi-calendar-plus", route: "/add" },
      {
        title: "Asistencia y registro",
        icon: "mdi-home-city",
        route: "/formacionI",
      },
      {
        title: "Estudiantes",
        icon: "mdi-account-box-multiple",
        route: "/fi-alumnos",
      },
      {
        title: "Calendario de eventos",
        icon: "mdi-calendar",
        route: "/calendario",
      },
      {
        title: "Nuevo Campo",
        icon: "mdi-home-city",
        route: "/nuevo",
      },
    ],

    callback: (response) => {
      console.log(response);
    },
  }),

  methods: {
    async logout() {
      try {
        await axios.post(
          /*"https://fibackend.ujed.mx/alumnos/logout/"*/ "http://127.0.0.1:8000/alumnos/logout/"
        );
        window.location.href = "/";
      } catch (error) {
        console.error("Error al cerrar sesión", error);
      }
    },
  },
};
</script>
