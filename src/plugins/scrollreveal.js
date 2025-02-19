import ScrollReveal from 'scrollreveal'

export const initScrollReveal = () => {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    })

    sr.reveal('.home-content, .heading', { origin: 'top' })
    sr.reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'top' })
    sr.reveal('.home-content h1, .about-img img', { origin: 'left' })
    sr.reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' })

    return sr
}
