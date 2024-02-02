<template>
  <div>
    <drawer />
    <v-container>
      <v-card>
        <v-carousel height="350" hide-delimiter-background show-arrows-on-hover cycle>
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
          <v-btn
                depressed
                dark
                color="red"
                href="../assets/P.pdf"
                download="Reglamento del programa de formación y desarrollo profesional.pdf "
              >
                Reglamento del programa de formación y desarrollo profesional
                <v-icon>mdi-file-pdf-box</v-icon>
              </v-btn>
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
          src: "https://previews-tu.wetransfer.net/file/wetransfer/j1ot/9c5aa9d1e324f2be32b16b6b02ef86a920240201171945/hl-13730393480?width=512&height=512&source=storm&origin=transfer&quiet=true&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2k2SUtBekF3QT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--1256e4a5cbf579b6c5b1d314185caf131144132de46929febaab54dbc35e0416%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmsyU1V0QmVrRjNRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTEyNTZlNGE1Y2JmNTc5YjZjNWIxZDMxNDE4NWNhZjEzMTE0NDEzMmRlNDY5MjlmZWJhYWI1NGRiYzM1ZTA0MTYiLCJleHAiOjE3MDY4OTkyODMsImlhdCI6MTcwNjg5NTY4Mywia2lkIjoiRnIzciJ9.iFLBD1qmi3QA934Qahqny7Mghw-1l7yFWMQB6IC0LsU&s=69d4af25d00e1f3f6129041396e3f5f5c48716a6&Expires=1706899283&Signature=Hoq~dHQ5~cdpH~A2Hw1RDACF64dHGHPJ03axmpfFGuEgTjg5WPsr7vMSYl-zqKIgFNE4Yslwnkrb3YGGkCjByZEC7oQVPQjwKX9sILMmALEZgdgwupT6rCwUXm7jbJIF04GGyH-~vG8-YKC3pUdGhhEWmesOWhRql46o6gdJnzngejStT~bwFM7ONaXFa2RUyUnlPWIWwdWkzOOlZiBUNSOeS1jk62aZZSSeaymjkafw8HkWiGSQPAdMYSxsqF-1lpAzszyvxAXJUWMvl2KxY3mY00Bfpc6U3fh4HRr8lkOBYspenmAe0I7LyXMtkwInv1NsyP-UDiunSg4hsGr3Ng__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ",
        },
        {
          src: "https://previews-tu.wetransfer.net/file/wetransfer/j1ot/9c5aa9d1e324f2be32b16b6b02ef86a920240201171945/hl-13730393483?width=512&height=512&source=storm&origin=transfer&quiet=true&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2k5SUtBekF3QT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--fd5f84c4b2d43f908ef2281ea9876fe12b494c9711093ee2fb1ed5baa35011cc%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMms1U1V0QmVrRjNRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLWZkNWY4NGM0YjJkNDNmOTA4ZWYyMjgxZWE5ODc2ZmUxMmI0OTRjOTcxMTA5M2VlMmZiMWVkNWJhYTM1MDExY2MiLCJleHAiOjE3MDY4OTkzMDIsImlhdCI6MTcwNjg5NTcwMiwia2lkIjoiRnIzciJ9.e2hh1loY_K5ZyHMiKgdOm528rARRHWdCTuCnL-GSkTM&s=0f50d6da5cf809a5a6f09e2162bd6c4814e33ab6&Expires=1706899302&Signature=Japvx44GKeEpfrGYknKMsQN2OwfvQy4CHrffz-5kmiM9robyQeuiH~vqvHBJ2TW9c13SSAzk8y184cNKh4D4cjbtZJsmQGPUZfuN6AoYalkAIRukhHsn0kAYqeo2HrGqyPvwOHp-BWOhKo8MzQe3C~kl3XIQYwxLevwcCNpfZO5MQiNnb8SVzZfxKkdytuHPEJXTFLfT8cvcjQhXw44v0F-lUrFMn1lRworg3Ins9xidR~PXNqJDFJXBF8ZAhS6cNAxXKdGYfeGRhJ~BfuBNUOVBtinYNH7f8mgDz3uQGoeqZK~rk5pBuiIqpA-6nNdbPe35CAWzg5~SdPdZh-BRsQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ",
        },
        {
          src: "https://previews-tu.wetransfer.net/file/wetransfer/j1ot/9c5aa9d1e324f2be32b16b6b02ef86a920240201171945/hl-13730393482?width=512&height=512&source=storm&origin=transfer&quiet=true&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2k4SUtBekF3QT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--b2b712083ea447c1c7f268922060b08dd8b138dc90d53144cb0556c70045dd24%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMms0U1V0QmVrRjNRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLWIyYjcxMjA4M2VhNDQ3YzFjN2YyNjg5MjIwNjBiMDhkZDhiMTM4ZGM5MGQ1MzE0NGNiMDU1NmM3MDA0NWRkMjQiLCJleHAiOjE3MDY4OTkyODMsImlhdCI6MTcwNjg5NTY4Mywia2lkIjoiRnIzciJ9.9oYORKeU6Kbky-HJ-TPcNB2Y3_sDjiDeLZUJJvp3nsM&s=6fc1dee42921f41ac75a3fbd041081d21fd1b749&Expires=1706899283&Signature=VuSYVf1zF1O-smpvjoZ8I1ig3wNpEEOF7fY3Xc7zpHcQooXQn9TAhF7krXNuahXGCxwuILgvsuceJ7sErVCL5pPE-kJ37SnDbWzmJRDnUjs-Qb3yx4zgFmevgegenuk9xDkVhDqI6KBey-WRf02qWjM0kLNuDA67qB5~ZbgVZX845DAuktGTZazFHk~Rjsgo0PCaWPdtnIa0f5jxZkTBIdU87W5Hz58rKo~7zV0su75TScOOj5W38nBl0aUkgeexvBIRUSrQkobIl3I~y9YGEjNfBh-~2A24bwwufDslTEBBrPuH-8x~pvS~gO7ogxxv1ZtpUvTUD1AP6zAZvk-l7g__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ",
        },
        {
          src: "https://previews-tu.wetransfer.net/file/wetransfer/j1ot/9c5aa9d1e324f2be32b16b6b02ef86a920240201171945/hl-13730393471?width=512&height=512&source=storm&origin=transfer&quiet=true&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2l4SUtBekF3QT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--4bc492bb8d36e4418d92468c552291cca9565641e8a9dbf46b3d1eb730008c75%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmw0U1V0QmVrRjNRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTRiYzQ5MmJiOGQzNmU0NDE4ZDkyNDY4YzU1MjI5MWNjYTk1NjU2NDFlOGE5ZGJmNDZiM2QxZWI3MzAwMDhjNzUiLCJleHAiOjE3MDY4OTkyODMsImlhdCI6MTcwNjg5NTY4Mywia2lkIjoiRnIzciJ9.rLaoaEZMzs49xFRJF12zRJ0uDCX1NP7OIt1FIniGELg&s=08467440af868f8cc66f28a84a6009a153e1cad9&Expires=1706899283&Signature=dH~KrwBENyRg1XU9kOgB0gJdKmx~~ufPFnSPYX-M48SHeKV3SsEngXi6Bdyu1x2pGGDSfI7CmGMSLIWVY7W1zla1VNoN85mdKgjQf8irgz54noLmtP7odrb5yd8JAX89WMZkFOal0BB-tKZmg4EgR9xdZJWLfZU~7KABmU6dfP4fasxn7Bxmi8mLDE7fWG~9PTx3JmSMuX4482UzhW9dTYVIKn6Mq9hX2x8fKcRfa6DAhR7tA1hH70Zs6FcwYT4CyjtYlFVi1t9ZY6lQU5ooYbqKvs7-5q1n4jU2eXjJmahVm2rO9F9XLtfmyG3H3tTcbxlKgTO9mBDzO1HKcvmaqg__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ",
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
