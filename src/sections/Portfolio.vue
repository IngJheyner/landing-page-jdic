<template>

    <section class="portfolio
    xl:flex
    xl:flex-col
    xl:items-center
    xl:justify-center
    p-[10rem_3%]
    xl:p-[0_7%_0]"
    id="portfolio">

        <h2 class="heading mb-16">Últimos<span class="font-atomic"> Proyectos</span></h2>

        <div class="portfolio-container grid
        sm:grid-cols-[1fr]
        md:grid-cols-[repeat(2,1fr)]
        lg:grid-cols-[repeat(3,1fr)]
        items-center
        gap-10">

            <div class="portfolio-box relative flex rounded-[2rem] shadow-[0_0_1rem_rgba(0,0,0,.1)] overflow-hidden">

                <img src="../assets/img/projects/procolombia-job.webp" alt="" class="w-full duration-[.5s] ease-in-out min-h-[300px] object-cover aspect-video object-center">

                <ul class="flex items-center justify-center gap-3 absolute bottom-4 left-4 translate-x-2">
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-js" />
                    </li>
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    </li>
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-drupal" />
                    </li>
                </ul>

                <div class="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-linear-main text-white flex justify-center items-center flex-col text-center p-[0_4rem] opacity-0 duration-[.5s] ease-in-out">

                    <h3 class="text-[3rem]">Procolombia</h3>

                    <p class="text-[1.5rem] m-[.3rem_0_1rem]">En este proyecto se cumple con los lineamientos normativos, como transparencia y acceso a la información pública, accesibilidad, protección de datos, entre otros. Se realizó la unificación de las diferentes delegaturas que maneja la entidad, con la implementación de micrositios utilizados para la correcta navegación dentro de la plataforma.
                        <span class="block text-color-red">
                            &copy; 2024 - <a href="https://3dstudioweb.com/" target="__blank" role="nofollow noopener">3dstudio</a>
                        </span>
                    </p>

                    <a href="" class="inline-flex justify-center items-center w-[5rem] h-[5rem] bg-white rounded-[50%]"><i class="bx bx-link-external text-[2rem] text-color-text"></i></a>

                </div>

            </div>

            <div class="portfolio-box relative flex rounded-[2rem] shadow-[0_0_1rem_rgba(0,0,0,.1)] overflow-hidden">

                <img src="../assets/img/portfolio.webp" alt="" class="w-full duration-[.5s] ease-in-out min-h-[300px] object-cover aspect-video object-center">

                <ul class="flex items-center justify-center gap-3 absolute bottom-4 left-4 translate-x-2">
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-vuejs" />
                    </li>
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-laravel" />
                    </li>

                </ul>

                <div class="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-linear-main text-white flex justify-center items-center flex-col text-center p-[0_4rem] opacity-0 duration-[.5s] ease-in-out">

                    <h3 class="text-[3rem]">DIVRI</h3>

                    <p class="text-[1.5rem] m-[.3rem_0_1rem]">DIVRI (Dirección de veteranos y rehabilitación inclusiva) es una plataforma (VPN INTERNA) de gestión de recursos humanos, que permite la gestión de los procesos de selección, contratación, capacitación, evaluación y desarrollo de la fuerza publica de colombia ministerio de defensa. SIMRI APP WEB.
                        <span class="block text-color-red">
                            &copy; 2023 - <a href="https://3dstudioweb.com/" target="__blank" role="nofollow noopener">3dstudio</a>
                        </span>
                    </p>

                    <!-- <a href="" class="inline-flex justify-center items-center w-[5rem] h-[5rem] bg-white rounded-[50%]"><i class="bx bx-link-external text-[2rem] text-color-text"></i></a> -->

                </div>

            </div>

            <div class="portfolio-box relative flex rounded-[2rem] shadow-[0_0_1rem_rgba(0,0,0,.1)] overflow-hidden">

                <img src="../assets/img/projects/crc-job.webp" alt="" class="w-full h-auto duration-[.5s] ease-in-out min-h-[300px] object-cover aspect-video object-center">

                <ul class="flex items-center justify-center gap-3 absolute bottom-4 left-4 translate-x-2">
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-js" />
                    </li>
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    </li>
                    <li class="flex items-center gap-1 text-third-color px-4 py-1.5 text-[2rem] font-medium border border-color-text border-opacity-30 rounded-full bg-color-white bg-opacity-60">
                        <font-awesome-icon icon="fa-brands fa-drupal" />
                    </li>
                </ul>

                <div class="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-linear-main text-white flex justify-center items-center flex-col text-center p-[0_4rem] opacity-0 duration-[.5s] ease-in-out">

                    <h3 class="text-[3rem]">CRC</h3>

                    <p class="text-[1.3rem] m-[.3rem_0_1rem]">Portal desarrollado para la Comisión de Regulación de Comunicaciones Colombiana, CRC, Diseño personalizado y con una UX de acuerdo al manual UX/UI de gov.co. En este proyecto se da cumplimiento a los lineamientos normativos como: transparencia y acceso a la información publica, accesibilidad, protección de datos entre otros. Dispone información caracterizada para 3 grandes nichos, Ciudadanía, Industria y Gobierno, se migraron más de 11.000 contenidos.
                        <span class="block text-color-red">
                            &copy; 2022 - <a href="https://3dstudioweb.com/" target="__blank" role="nofollow noopener">3dstudio</a>
                        </span>
                    </p>

                    <a href="" class="inline-flex justify-center items-center w-[5rem] h-[5rem] bg-white rounded-[50%]"><i class="bx bx-link-external text-[2rem] text-color-text"></i></a>

                </div>

            </div>

        </div>

        <!--===========================================
        TESTIMONIAL
        ===========================================-->
        <Testimonial/>

    </section>

</template>

<script setup>

    import Testimonial from "../components/Testimonial.vue";

</script>