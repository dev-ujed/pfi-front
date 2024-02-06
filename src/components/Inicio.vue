<template>
  <div>
    <drawer />
    <v-container>
      <v-card>
        <v-carousel height="550" hide-delimiter-background show-arrows-on-hover cycle>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
      <v-card elevation="12">
        <v-card-title>Funciones</v-card-title>
        <v-card-text>
          <ul>
            <li>
              Permitir que los egresados de la UJED cuenten con las competencias
              y principios, para ser mujeres y hombres íntegros, con valores y
              actitudes para la conformación de una sociedad unida y armónica,
              con ideales de justicia y sean mexicanos con gran responsabilidad
              civil y patriotismo.
            </li>
            <br />
            <li>
              Complementar la formación de nuestros estudiantes en atención, no
              sólo a sus necesidades como futuros profesionistas, sino también
              como personas cuyo desarrollo integral implica la consideración de
              dimensiones conceptuales, procedimentales y actitudinales que
              propicien la alineación profesional, humanista, ética y
              tecnológica (en lo instructivo): formar profesionales
              competitivos, seres humanos abiertos al equilibrio y armonía del
              lugar donde viven, del planeta que habitamos.
            </li>
          </ul>
          
        </v-card-text>
        <v-card-title>Programa</v-card-title>
        <v-card-text>
          <div style="text-align: center;">
            <a href="https://publuu.com/flip-book/386097/875945/page/2?cover" target="_blank" style="width: auto; height: 240px; position: relative; display: inline-block;">
              <img src="https://p6aqvvqp5i.execute-api.us-east-2.amazonaws.com/images/cover/386097/875945" style="height: 100%;">
            </a>
          </div>
        </v-card-text>
      </v-card>

      <v-card>
        <v-img height="480" src="../assets/8.png" contain></v-img>
      </v-card>
      <v-card>
        <v-img height="480" src="../assets/10o9.png" contain></v-img>
      </v-card>
      <br />

      <!-- <v-container id="botones">
          <v-row>
            <v-col>
              <v-btn
                color="blue-grey"
                x-large
                block
                dark
                outlined
                @click="selected(1)"
              >
                Información General del PIFI
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="blue-grey"
                x-large
                block
                dark
                outlined
                @click="selected(2)"
              >
                ProDES y ProGES
                <v-icon>mdi-domain</v-icon>
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn
                color="blue-grey"
                x-large
                block
                dark
                outlined
                target="_blank"
                href="http://transparencia.ujed.mx"
              >
                Transparencia
                <v-icon>mdi-alpha-t-box</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="blue-grey"
                x-large
                block
                dark
                outlined
                @click="selected(4)"
              >
                Contacto
                <v-icon>mdi-account-box-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container> -->
    </v-container>
  </div>
</template>

<script>
import drawer from "../components/Drawer/Drawer.vue";
export default {
  data() {
    return {
      select: 0,
      items: [
        {
          src: "https://i.ibb.co/Khksh7X/IMG-8693.jpg",
        },
        {
          src: "https://i.ibb.co/17y2LPm/IMG-9029.jpg",
        },
        {
          src: "https://i.ibb.co/HKZWbNn/DSC-0015.jpg",
        },
        {
          src: "https://i.ibb.co/zGtBvyg/IMG-8930.jpg",
        },
      ],
    };
  },
  components: { drawer },
  methods: {
    selected(num) {
      this.select = num;
      setTimeout(this.scrollView, 10);
      console.log("smn")
    },

    scrollView() {
      const el = this.$el.querySelector("#show");
      if (el) {
        el.scrollIntoView();
      }
    },
  },
};
</script>

<style scoped>
.v-card__text {
  padding: 40px;
}
.v-card__text > label {
  margin-bottom: 25px;
}
.v-card__text > h5 {
  color: #a4010b;
}
.v-card__title {
  color: #a4010b;
  margin-left: 10px;
  margin-right: 10px;
}
.v-card {
  margin-bottom: 20px;
}
#botones {
  margin-bottom: 20px;
}
</style>
