<template>

    <section class="home
    flex
    items-center

    min-h-[100vh]

    p-[0_3%_20rem]
    sm:p-[0_3%_23rem]
    lg:p-[10rem_3%_2rem]

    justify-center
    lg:justify-normal

    text-center
    lg:text-left

    relative
    top-0
    "
    id="hero">

        <!-- ===== ===== Intro ===== ===== -->
        <div class="home-content max-w-[44rem] xl:max-w-[34rem] 2xl:max-w-[44rem] 3xl:max-w-[55rem]">

            <h3 class="text-[2.6rem] lg:text-[4.2rem] xl:text-[3.2rem] font-bold leading-[.3] font-atomic">Hola 🙋‍♂️, soy</h3>
            <h1 class="text-[5rem] lg:text-[6.6rem] xl:text-[5.6rem] font-bold mb-[.3rem]">Jheyner Ibagon</h1>
            <p class="text-[1.6rem] lg:text-[2rem] xl:text-[1.6rem]">Y te doy la bienvenida a mi sitio web, aquí podrás conocer más sobre mi trayectoria profesional, espero que disfrutes tu visita y podamos conectarnos pronto. Juntos desarrollaremos tu próximo proyecto TI 💻.</p>

            <!-- ===== ===== Social Media ===== ===== -->
            <div class="social-media">
                <a href="https://www.facebook.com/teg.david"
                target="_blank"
                rel="nofollow noopener"
                class="w-[4rem] h-[4rem] bg-transparent border-solid border-[.2rem] border-main-color rounded-[50%] text-[2rem] text-main-color no-underline justify-center items-center inline-flex
                m-[2.5rem_.75rem_3rem] lg:m-[2.5rem_1.5rem_3rem_0]
                shadow-[0_.2rem_.5rem_rgba(0,0,0,.2)] duration-[.5s] ease-in-out hover:bg-main-color hover:text-white"><i class="bx bxl-facebook"></i></a>

                <a href="https://github.com/IngJheyner"
                target="_blank"
                rel="nofollow noopener"
                class="w-[4rem] h-[4rem] bg-transparent border-solid border-[.2rem] border-main-color rounded-[50%] text-[2rem] text-main-color no-underline justify-center items-center inline-flex m-[2.5rem_.75rem_3rem] lg:m-[2.5rem_1.5rem_3rem_0] shadow-[0_.2rem_.5rem_rgba(0,0,0,.2)] duration-[.5s] ease-in-out hover:bg-main-color hover:text-white"><i class="bx bxl-github"></i></a>

                <a href="" class="w-[4rem] h-[4rem] bg-transparent border-solid border-[.2rem] border-main-color rounded-[50%] text-[2rem] text-main-color no-underline justify-center items-center inline-flex m-[2.5rem_.75rem_3rem] lg:m-[2.5rem_1.5rem_3rem_0] shadow-[0_.2rem_.5rem_rgba(0,0,0,.2)] duration-[.5s] ease-in-out hover:bg-main-color hover:text-white"><i class="bx bxl-instagram-alt"></i></a>

                <a href="https://www.linkedin.com/in/ingjheyner/"
                target="_blank"
                rel="nofollow noopener"
                class="w-[4rem] h-[4rem] bg-transparent border-solid border-[.2rem] border-main-color rounded-[50%] text-[2rem] text-main-color no-underline justify-center items-center inline-flex m-[2.5rem_.75rem_3rem] lg:m-[2.5rem_1.5rem_3rem_0] shadow-[0_.2rem_.5rem_rgba(0,0,0,.2)] duration-[.5s] ease-in-out hover:bg-main-color hover:text-white"><i class="bx bxl-linkedin"></i></a>

            </div>

            <a href="https://1drv.ms/b/c/cb2755252438d02f/EatHRC7pI7ZEs3d7MtZlIRMB9r55R154fBLSOrKaXUXybg"
            target="_blank"
            ref="nofollow noopener"
            class="btn btn-solid min-w-[180px]"> Descargar CV </a>

        </div>

        <!-- ===== ===== Profession ===== ===== -->
        <Profession />

    </section>

</template>

<script setup>

    import Profession from "@/components/Profession.vue";

</script>