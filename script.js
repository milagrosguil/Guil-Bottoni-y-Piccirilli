document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    
    if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, complete todos los campos.");
    } else if (!validateEmail(email)) {
        alert("Ingrese un correo electrónico válido.");
    } else {
        alert("Formulario enviado exitosamente.");
        // Aquí puedes agregar el envío del formulario
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}