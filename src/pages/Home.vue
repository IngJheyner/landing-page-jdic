<script setup>
import { ref, defineExpose } from 'vue';
import Hero from '@/sections/Hero.vue';
import Services from '@/sections/Services.vue';
import Portfolio from '@/sections/Portfolio.vue';
import Contact from '@/sections/Contact.vue';


</script>

<template>
  <!--===========================================
    HERO
    ===========================================-->
  <Hero />
  <!--===========================================
    Services
    ===========================================-->
  <Services />
  <!--===========================================
    PORTFOLIO
    ===========================================-->
  <Portfolio/>
  <!--===========================================
    CONTACT
    ===========================================-->
  <Contact/>

</template>
