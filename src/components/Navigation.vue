<template>

    <nav class="navbar
    absolute lg:[position:initial]

    top-full lg:[top:initial]
    left-0 lg:[left:initial]

    w-full
    lg:[width:auto]

    p-[1rem_3%]
    lg:[padding:initial]

    bg-white
    lg:[background-color:initial]

    [border-top:.1rem_solid_rgba(0,0,0,.2)]
    lg:[border-top:initial]

    [box-shadow:0.5rem_1rem_rgba(0,0,0,.1)]
    lg:[box-shadow:initial]

    hidden
    lg:block"
    ref="navbarRef">

        <ul class="flex
        flex-col
        lg:[flex-direction:row]

        justify-between

        items-start
        lg:items-center

        p-4
        navbar

        space-y-[2rem]
        lg:space-y-[0]

        space-x-[0]
        lg:space-x-[4rem]
        3xl:space-x-[5rem]">

            <li class="px-0 lg:px-4 w-full lg:w-auto">
                <router-link :to="{ name: 'Home', hash: '#hero' }" class="text-[2rem] lg:text-[18px] text-color-text lg:text-white no-underline font-medium relative w-full lg:w-auto inline-block">Inicio</router-link>
            </li>

            <li class="px-0 lg:px-4 w-full lg:w-auto">
                <router-link :to="{ name: 'About', hash: '#about' }" class="text-[2rem] lg:text-[18px] text-color-text lg:text-white no-underline font-medium relative w-full lg:w-auto inline-block">Sobre mi</router-link>
            </li>

            <li class="px-0 lg:px-4 w-full lg:w-auto">
                <router-link :to="{ name: 'Home', hash: '#services' }" class="text-[2rem] lg:text-[18px] text-color-text lg:text-white no-underline font-medium relative w-full lg:w-auto inline-block">Servicios</router-link>
            </li>

            <li class="px-0 lg:px-4 w-full lg:w-auto">
                <router-link :to="{ name: 'Home', hash: '#portfolio' }" class="text-[2rem] lg:text-[18px] text-color-text lg:text-white no-underline font-medium relative w-full lg:w-auto inline-block">Portafolio</router-link>
            </li>

            <li class="px-0 lg:px-4 w-full lg:w-auto">
                <router-link :to="{ name: 'Home', hash: '#contact' }" class="text-[2rem] lg:text-[18px] text-color-text lg:text-white no-underline font-medium relative w-full lg:w-auto inline-block">Contacto</router-link>
            </li>

        </ul>

    </nav>

</template>

<script>
    export default {
        name: 'Navigation',
        setup() {
            return {
                navbarRef: null
            }
        }
    }
</script>