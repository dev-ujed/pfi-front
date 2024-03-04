<template>
<div>
    <drawer />
    <v-container>
        <form @click.prevent="validarEmail">
            <div class="form-group">
                <label for="exampleInputEmail1">Correo</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <v-btn
                class="btn-primary"
                variant="flat"
                type="submit"
              >
                validar Email
              </v-btn>
        </form>
    </v-container>
</div>
</template>

<script>

import drawer from '../Drawer/Drawer.vue';
//import AlumnosDataService from "../../services/AlumnosDataService";
import axios from "axios";

export default {
    data(){
        return{
            email: " ",
        }
    },
    components: { drawer },
    methods: {
        async validarEmail(){
            try {
                const response = await axios.post('/api/validar-email', { email: this.email });
                if (response.data.emailEncontrado) {
                    alert('Email encontrado');
                } else {
                    alert('Email no encontrado');
                }
            }catch (error) {
                console.error('Error al validar email:', error);
                alert('Hubo un error al validar el email. Por favor, inténtalo de nuevo.');
            }
        }
    }
}
</script>

<sty
Drawerle>

</style>