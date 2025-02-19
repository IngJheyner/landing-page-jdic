<script setup>

    import { ref, onMounted, watchEffect } from 'vue'
    import { useRoute } from 'vue-router'

    import Navigation from './Navigation.vue'

    const route = useRoute()
    const header = ref(null)
    const landingNavbar = ref(null)
    const menuBackdrop = ref(null)

    const navbarElement = ref(null)
    const navLinks = ref([])

    const menuIcon = ref(null)

    watchEffect(() => {

        // Si la ruta actual es 'About', agrega la clase sticky
        if (route.name === 'About') {
            header.value?.classList.add('sticky')
        } else {
            // Si no estamos en About y no hemos scrolleado, remove la clase
            if (window.scrollY <= 100) {
                header.value?.classList.remove('sticky')
            }
        }
        navbarElement.value = landingNavbar.value?.$refs.navbarRef
        navLinks.value = navbarElement.value?.querySelectorAll('li')
    })

    onMounted(() => {

        // Seleccionar el elemento navbar
        const navbarElement = landingNavbar.value?.$refs.navbarRef
        const navLinks = navbarElement?.querySelectorAll('li');

        document.addEventListener('scroll', () => {

            if(route.name !== 'About') {
                if (window.scrollY > 100) {
                    header.value?.classList.add('sticky')
                } else {
                    header.value?.classList.remove('sticky')
                }
            }

            const sections = document.querySelectorAll('section')
            //console.log("🚀 ~ onMounted ~ sections:", sections)

            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 200;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {

                    navLinks?.forEach(link => {

                        const ancla = link.querySelector('a[href*=' + id + ']');
                        // agregar clase active al ancla
                        if(ancla) {
                            ancla.classList.add('active');
                            const { left, top, width, height } = link.getBoundingClientRect();
                            if (menuBackdrop.value) {
                                menuBackdrop.value.style.setProperty('--left', `${left}px`);
                                menuBackdrop.value.style.setProperty('--top', `${top}px`);
                                menuBackdrop.value.style.setProperty('--width', `${width}px`);
                                menuBackdrop.value.style.setProperty('--height', `${height}px`);
                                menuBackdrop.value.style.opacity = '1';
                            }

                        } else {
                            link.querySelector('a').classList.remove('active');
                        }
                    })
                }
            })

            menuIcon.value?.classList.remove('bx-x');
            navbarElement.classList.remove('open');

        })

        navLinks?.forEach(link => {

            link.addEventListener('mouseenter', ({ target }) => {

                const { left, top, width, height } = target.getBoundingClientRect();

                menuBackdrop.value.style.setProperty('--left', `${left}px`);
                menuBackdrop.value.style.setProperty('--top', `${top}px`);
                menuBackdrop.value.style.setProperty('--width', `${width}px`);
                menuBackdrop.value.style.setProperty('--height', `${height}px`);
                menuBackdrop.value.style.opacity = '1';
            })

            link.addEventListener('mouseleave', () => {
                menuBackdrop.value.style.opacity = '0';
            })
        })
    })

    function toggleMenu(event) {
        event.target.classList.toggle('bx-x');
        navbarElement.value.classList.toggle('open');
    }


</script>

<template>

    <header class="fixed
    top-0
    left-0

    w-full

    p-[2rem_7%]
    lg:p-[.5rem_3%]

    bg-white
    lg:bg-transparent

    flex
    items-center

    z-[100]
    duration-[.5s]"
    ref="header">

        <router-link :to="{ name: 'Home', hash: '#hero' }" class="text-main-color font-semibold cursor-pointer mr-auto">

            <img src="../assets/img/logo.webp" class="h-[55px] sm:h-[80px] max-w-[300px]">

        </router-link>

        <Navigation ref="landingNavbar"/>

        <div ref="menuBackdrop"
        class="
        absolute
        bg-third-color/20
        backdrop-blur-lg
        rounded
        left-[var(--left)]
        top-[var(--top)]
        w-[var(--width)]
        h-[var(--height)]
        transition-all duration-300 ease-in-out
        opacity-0 -z-10
        hidden
        lg:block"></div>

        <div class="bx bx-menu text-[3.6rem] text-color-text block lg:hidden cursor-pointer"
        ref="menuIcon"
        @click="toggleMenu"></div>

    </header>

</template>