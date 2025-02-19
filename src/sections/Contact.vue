<template>

    <section class="contact
    xl:flex
    xl:flex-col
    xl:items-center
    xl:justify-center
    p-[10rem_3%]
    xl:p-[0_7%_0]
    " id="contact">

        <h2 class="heading mb-12">Contactar <span class="font-atomic">me!</span></h2>

        <!-- Mensaje de notificación -->
        <div v-if="notification.show"
             :class="[
                'notification mb-4 p-4 rounded-lg text-center transition-all duration-300 text-[1.5rem]',
                notification.type === 'success' ? 'bg-green-100 text-green-700 border border-green-400' :
                'bg-red-100 text-color-red border border-red-400'
             ]"
        >
            {{ notification.message }}
        </div>

        <Vueform
        class="max-w-[70rem] m-[1rem_auto] mb-12"
        :display-errors="false"
        ref="form"
        :endpoint="false"
        @submit="handleSubmit"
        >

            <GroupElement
                name="container"
            >
                <TextElement
                    name="name"
                    placeholder="Nombre y apellidos"
                    :columns="{
                        container: 6,
                        label: 12,
                        wrapper: 12,
                    }"
                    field-name="First name"
                    :rules="[
                        'required',
                        'max:255',
                    ]"
                    :messages="{
                        required: 'El nombre es obligatorio',
                        max: 'El nombre no puede tener más de 255 caracteres',
                    }"
                    class=""
                />

                <TextElement
                    name="email"
                    input-type="email"
                    :columns="{
                        container: 6,
                        label: 12,
                        wrapper: 12,
                    }"
                    :rules="[
                        'required',
                        'max:255',
                        'email',
                    ]"
                    :messages="{
                        required: 'El correo electrónico es obligatorio',
                        max: 'El correo electrónico no puede tener más de 255 caracteres',
                        email: 'El correo electrónico no es válido',
                    }"
                    placeholder="Correo electrónico"
                    field-name="Email"
                    description="Nunca compartiremos su correo electrónico con nadie más."
                />

                <TextElement
                    name="phone"
                    input-type="number"
                    :columns="{
                        container: 6,
                        label: 12,
                        wrapper: 12,
                    }"
                    :rules="[
                        'required',
                        'max:10'
                    ]"
                    :messages="{
                        required: 'El teléfono es obligatorio',
                        max: 'El teléfono no puede tener más de 10 caracteres',
                        number: 'El teléfono debe ser un número',
                    }"
                    placeholder="Teléfono"
                    field-name="phone"
                />

                <TextElement
                    name="subject"
                    placeholder="Asunto"
                    :columns="{
                        container: 6,
                        label: 12,
                        wrapper: 12,
                    }"
                    field-name="email subject"
                    :rules="[
                        'required',
                        'max:255',
                    ]"
                    :messages="{
                        required: 'El asunto es obligatorio',
                        max: 'El asunto no puede tener más de 255 caracteres',
                    }"
                />

                 <!-- Description -->
                <TextareaElement
                    name="description"
                    :rules="[
                        'required',
                    ]"
                    :columns="{
                        container: 12,
                    }"
                    placeholder="Mensaje"
                    :rows="5"
                    :messages="{
                        required: 'El mensaje es obligatorio.',
                    }"
                />


                <div class="h-captcha [zoom:60%]"
                data-captcha="true"
                data-lang="es"></div>

                 <!-- Submit button -->
                <ButtonElement
                    :submits="true"
                    name="submit"
                    button-label="Send Message"
                />


            </GroupElement>

        </Vueform>

    </section>

</template>

<script setup>

    import { ref, onMounted } from 'vue'

    const form = ref(null)

    // Estado para la notificación
    const notification = ref({
        show: false,
        message: '',
        type: 'success'
    })

    onMounted(async () => {
        await loadRecaptchaScript()
    })

    // Función para mostrar notificación
    const showNotification = (message, type = 'success') => {
        notification.value = {
            show: true,
            message,
            type
        }

        // setTimeout(() => {
        //     notification.value.show = false
        // }, 5000)
    }

    // Función para cargar el script de reCAPTCHA
    const loadRecaptchaScript = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = 'https://web3forms.com/client/script.js'
            script.async = true
            script.onload = () => {
                resolve()
            }
            script.onerror = reject
            document.head.appendChild(script)
        })
    }

    // Función para manejar el envío del formulario
    const handleSubmit = async () => {

        const formData = form.value.data
        const captchaResponse = form.value.$el.querySelector('textarea[name="h-captcha-response"]')?.value

        if (!captchaResponse) {
            showNotification('Por favor, completa el reCAPTCHA.', 'error')
            return
        }

        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: '89154f41-6f8e-4f4a-a9c1-7f961a1f1217',
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.description.toString(),
            }),
        })
        .then(async (response) => {
            let json = await response.json();
            //console.log("🚀 ~ .then ~ json:", json)
            if (response.status == 200) {
                showNotification('¡Mensaje enviado correctamente! Gracias por contactarnos.')
                form.value.reset()
            } else {
                showNotification(response.message || 'Error al enviar el mensaje', 'error')
            }
        })
        .catch(error => {
            console.log(error);
            showNotification('Error al enviar el mensaje. Por favor, intente nuevamente.', 'error')
        });

    }
</script>