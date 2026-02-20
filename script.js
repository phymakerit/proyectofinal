// Esperamos a que el DOM (la estructura HTML) se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Obtenemos referencias a los elementos del formulario
    const form = document.getElementById('newsletter-form');
    const feedbackMessage = document.getElementById('form-feedback');
    const emailInput = document.getElementById('email');

    // 2. Añadimos un "escucha de eventos" para cuando se envía el formulario
    form.addEventListener('submit', function(event) {
        // ¡Importante! Prevenir el comportamiento por defecto (que recarga la página)
        event.preventDefault();

        // Validación simple: Verificar que haya texto (aunque el 'required' de HTML ya ayuda)
        if (emailInput.value.trim() !== "") {
            // Simulamos el envío exitoso:
            
            // Ocultamos el formulario
            form.style.display = 'none';
            
            // Mostramos el mensaje de agradecimiento
            feedbackMessage.style.display = 'block';
            
            console.log("Formulario enviado con el correo: " + emailInput.value);
        } else {
            alert("Por favor, ingresa un correo electrónico válido.");
        }
    });
});

// Un pequeño saludo en la consola para verificar que JS funciona
console.log("Script de El Rincón Verde cargado correctamente.");