<template>

    <div class="testimonial-container flex items-center flex-col w-full p-[5rem_0rem_0]">

        <h2 class="heading mb-16">Testimonios <span class="font-atomic">valiosos</span></h2>

        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :grabCursor="true"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="testimonial-wrapper relative max-w-[90rem] w-full
            p-[5rem_0]
            lg:p-20
            mySwiper">

            <swiper-slide v-for="(testimonio, index) in testimonials" :key="index">
                <div class="testimonial-slide flex items-center flex-col rounded-[2rem] shadow-[0_.1rem_.5rem_rgba(0,0,0,.2)]
                    p-[3rem_2rem] lg:p-[3rem_5rem] relative
                    [border-top:.6rem_solid_#081b29]
                    [border-bottom:.6rem_solid_#081b29]">

                    <i class='bx bxl-linkedin-square absolute top-4 left-4 text-[5rem] text-second-color'></i>

                    <img :src="testimonio.image"
                         :alt="'Foto de perfil de ' + testimonio.name"
                         class="w-[14rem] h-[14rem] object-cover rounded-[50%] border-solid border-[.5rem] border-white outline outline-second-color outline-[.5rem]">

                    <h3 class="text-[2.5rem] m-[2rem_.5rem_0_0]">{{ testimonio.name }}</h3>
                    <span class="block text-[1.4rem] text-second-color">{{ testimonio.position }}</span>
                    <span class="block text-gray-400 mb-8">{{ testimonio.date }}</span>
                    <p class="text-[1.4rem]">{{ testimonio.comment }}</p>
                </div>
            </swiper-slide>

        </swiper>

    </div>

</template>

<script>

    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    import '../assets/css/plugins/swiper.css';

    // import required modules
    import { Pagination, Navigation } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {

            const testimonials = [
                {
                    name: "Samuel J. Vega Do Lugar",
                    position: "Desarrollador Back-end",
                    date: "9 de febrero de 2025, Samuel J. fue cliente de Jheyner David",
                    comment: "Conocimientos sólidos en Drupal y PHP. Buena disposición y forma de explicar.",
                    image: "https://media.licdn.com/dms/image/v2/D4E03AQHM61tjq7Fjmg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701885410984?e=1745452800&v=beta&t=uYngQw9TxiNAz7Y6JtuG7FZHev8NTnqs1TslE8z8HH4"
                },
                {
                    name: "Luis Carlos Reyes Vanegas",
                    position: "Chief Technology Officer en Evolutec",
                    date: "22 de enero de 2025, Luis Carlos fue cliente de Jheyner David",
                    comment: "Jheyner David, es un profesional con excelentes competencias y manejo de buenas prácticas y clean code en el área del desarrollo de software, sus habilidades en Drupal lo hacen muy versátil para ocupar distintos roles como líder técnico, desarrollador backend o frontend senior, se preocupa por la documentación y correcta gestión del CMS para facilitar su posterior administración, lo cual lo hacen un recurso de valor en un equipo de trabajo.",
                    image: "https://media.licdn.com/dms/image/v2/D4E03AQG1t7UVgDRvPQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721597461789?e=1745452800&v=beta&t=icp42HYh_WxeaV0mBQS6TOGl9rfPc4AuBlWl3YrvIms"
                },
                {
                    name: "Cristian Mateo Duque Ocampo",
                    position: "Technical Manager en Asesoftware",
                    date: "21 de enero de 2025, Cristian Mateo supervisaba directamente a Jheyner David",
                    comment: "En la ejecución de sus funciones, Jheyner fue parte fundamental de los proyectos que lidero para planificar, ejecutar y entregar proyectos de desarrollo y mantenimiento de software dentro del alcance, presupuesto y cronograma, esto lo logro al tiempo que coordinaba con otros equipos externos, para definir requisitos y entregables de los proyectos.",
                    image: "https://media.licdn.com/dms/image/v2/C4E03AQEwQtyGPJSjnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1612987351332?e=1745452800&v=beta&t=ftRK1ny9uriGZorPtRb04GmUTuKoEQfJdoueMKHq0N4"
                },
                {
                    name: "Duban Gaitan Vargas",
                    position: "Desarrollador en 3D Studio Web | Certificado en Scrum Master",
                    date: "20 de enero de 2025, Duban trabajaba con Jheyner David en el mismo equipo",
                    comment: "Un gran profesional, ético y responsable, dispuesto a ayudar y trabajar en equipo, un ingeniero con alta calidad de desarrollo y un gran dominio de buenas practicas. Durante su tiempo de trabajo, demostró la capacidad para resolver problemas, trabajando bajo presión, entregándolos a tiempo y con calidad.",
                    image: "https://media.licdn.com/dms/image/v2/D4E03AQEYftOK4pbvcQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1669414186982?e=1745452800&v=beta&t=wt5GZm8VHZbx478UFOz-bPp4JmY4CLMELPmlcvAUmmQ"
                },
                {
                    name: "Said Yussef Tilaguy Bermeo",
                    position: "Technical Manager en Asesoftware",
                    date: "20 de enero de 2025, Said Yussef supervisaba directamente a Jheyner David",
                    comment: "Jheyner es un gran ingeniero, lidero la integración del trabajo de dos equipos de trabajos distintos dentro del proyecto principal del portal B2B de Procolombia en lo que era un trabajo contrarreloj y bajo un alto nivel de presión y exigencia en el que logro dar resultados y tomar decisiones arriesgadas y acertadas en los momentos en los que el proyecto lo ameritaba, tiene altos conocimientos de Drupal, PHP, drush, git y otras tecnologías.",
                    image: "https://media.licdn.com/dms/image/v2/C4D03AQG-AY5uEywncg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1600383675362?e=1745452800&v=beta&t=tbzMpIbIjpybawPeVV1wWw8XaURiNZDQS73ZlssrKKA"
                },
            ];
            return {
                modules: [Pagination, Navigation],
                testimonials
            };
        },
    };
</script>