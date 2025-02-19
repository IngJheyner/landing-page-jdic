<template>
    <div class="noise"></div>
</template>

<style scoped>
    div.noise{
        position: fixed;
        background: rgba(0, 86, 0, 0.091);
        background-image: url('../assets/img/noise.png');
        background-repeat: repeat;
        inset: -50%;
        height: 200vh;
        pointer-events: none;
        width: 200%;
        z-index: 9999999;
        animation: noise .2s infinite;
        mix-blend-mode: multiply;
    }

    @media (prefers-reduced-motion: reduce){
        div.noise{
            animation: none;
        }
    }

    @keyframes noise{
        0%{
            transform: translate(0, 0);
        }

        10%{
            transform: translate(-5%, -5%);
        }

        20%{
            transform: translate(-10%, 5%);
        }

        30%{
            transform: translate(5%, -10%);
        }

        40%{
            transform: translate(-5%, 15%);
        }

        50%{
            transform: translate(-10%, 5%);
        }

        60%{
            transform: translate(15%, 0);
        }

        70%{
            transform: translate(0, 10%);
        }

        80%{
            transform: translate(-15%, 5%);
        }

        90%{
            transform: translate(10%, 0);
        }

        100%{
            transform: translate(5%, 0);
        }
    }
</style>


