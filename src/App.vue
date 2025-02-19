<script setup>

import { onMounted, nextTick, watch } from 'vue';
import Header from '@/components/Header.vue';
import Noise from '@/components/Noise.vue';
import Footer from '@/components/Footer.vue';
import { initScrollReveal } from '@/plugins/scrollreveal';
import { useRoute } from 'vue-router';

// Se ejecuta cuando el componente se monta y cuando la ruta cambia para inicializar el scroll reveal
const route = useRoute()

const initializeScrollReveal = async () => {
    await nextTick()
    initScrollReveal()
}

onMounted(() => {
    initializeScrollReveal();
});

// Observa los cambios en la ruta y ejecuta el scroll reveal cuando la ruta cambia
watch(
    () => route.path,
    () => {
        initializeScrollReveal()
    }
)


</script>

<template>
  <main>
    <!--===========================================
    NOISE
    ===========================================-->
    <Noise />

    <!--===========================================
    HEADER
    ===========================================-->
    <Header />

    <!--========================================================
    SE CREA UN ESPACIO PARA EL COMPONENTE QUE SE VA A RENDERER
    ============================================================-->
    <router-view  />

    <!--===========================================
    FOOTER
    ===========================================-->
    <Footer />
  </main>
</template>
