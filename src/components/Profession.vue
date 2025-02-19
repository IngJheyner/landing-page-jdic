<template>

    <div class="profession-container
        absolute
        top-1/2

        right-0

        left-0
        lg:[left:initial]

        w-full
        lg:w-[768px]
        3xl:w-[950px]

        h-full

        overflow-hidden
        translate-y-[-50%]

        ">

        <div class="profession-box

        fixed
        lg:absolute

        top-[calc(100vw--22rem)]
        sm:top-[calc(100vw-30rem)]
        lg:top-0

        left-0
        lg:[left:initial]

        flex
        lg:hidden
        xl:flex

        right-0

        w-full
        lg:w-[768px]
        3xl:w-[950px]


        h-full

        rounded-[0]
        lg:rounded-[50%]

        justify-center
        items-center
        ">

            <div class="profession
            absolute

            [transform-origin:0]
            lg:origin-[384px]
            3xl:origin-[475px]

            flex
            flex-col

            left-auto
            lg:left-0

            items-center
            text-main-color bg-white

            p-[0_13px]
            lg:p-[13px_0]

            " style="--i:0;">
                <i class="bx bx-user text-[3.8rem]"></i>
                <h3 class="text-[2.2rem] 2xl:text-[3.2rem] leading-[1] font-semibold">Ingeniero de software</h3>
            </div>

            <div class="profession
            absolute

            [transform-origin:0]
            lg:origin-[384px]
            3xl:origin-[475px]

            flex
            flex-col

            left-auto
            lg:left-0

            items-center
            text-main-color bg-white

            p-[0_13px]
            lg:p-[13px_0]" style="--i:1;">
                <i class="bx bxl-amazon text-[3.8rem]"></i>
                <h3 class="text-[2.2rem] 2xl:text-[3.2rem] leading-[1.2] font-semibold">Arquitecto <span class="text-[2rem] block">Cloud</span> <span class="text-[2rem] block">Devops</span></h3>
            </div>

            <div class="profession absolute

            [transform-origin:0]
            lg:origin-[384px]
            3xl:origin-[475px]

            flex
            flex-col

            left-auto
            lg:left-0

            items-center
            text-main-color bg-white

            p-[0_13px]
            lg:p-[13px_0]" style="--i:2;">
                <i class="bx bx-code-alt text-[3.8rem]"></i>
                <h3 class="text-[2.2rem] 2xl:text-[3.2rem] leading-[1] font-semibold">Developer TI</h3>
            </div>

            <div class="profession
            absolute

            [transform-origin:0]
            lg:origin-[384px]
            3xl:origin-[475px]

            flex
            flex-col

            left-auto
            lg:left-0

            items-center
            text-main-color bg-white

            p-[0_13px]
            lg:p-[13px_0]" style="--i:3;">
                <i class="bx bxs-data text-[3.8rem]"></i>
                <h3 class="text-[2.2rem] 2xl:text-[3.2rem] leading-[1] font-semibold">Analista de datos</h3>
            </div>

            <div class="circle

            fixed
            lg:[position:initial]

            z-[-1]
            lg:[z-index:initial]

            w-[670px]
            lg:w-[612px]
            xl:w-[634px]
            2xl:w-[630px]
            3xl:w-[810px]

            h-[670px]
            lg:h-[560px]
            xl:h-[634px]
            2xl:h-[630px]
            3xl:h-[810px]


            border-solid
            border-[3px]
          border-main-color
            rounded-[50%]"></div>

        </div>

        <div class="overlay

        fixed
        lg:absolute

        inset-0

        top-[calc(100vh-12rem)]
        sm:top-[calc(100vh-22rem)]
        lg:top-0

        left-0

        right-0
        xl:right-[-9rem]

        [transform:rotate(90deg)_translate(-50%,-50%)_scaleY(3)]
        lg:[transform:initial]

        w-0

        xl:h-full
        3xl:h-[950px]

        border-solid

        [border-width:calc(100vw/4)]
        lg:[border-width:calc(50vh)_calc(50vh)_calc(50vh)_calc(50vh)]
        3xl:[border-width:475px_475px_475px_475px]

        border-t-main-color
        border-r-main-color
        border-b-main-color
        border-l-transparent">
        </div>

    </div>

    <div class="home-img">
        <img src="../assets/img/hero-image.webp" alt="" class="absolute

        bottom-0 right-0 pointer-events-none

        hidden
        lg:block

        w-[460px]
        3xl:w-[500px]">
    </div>
</template>