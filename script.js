const nav=document.querySelector("#nav");
const abrir=document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contacto").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const telefono = document.getElementById("telefono").value;
        const localidad = document.getElementById("localidad").value;
        
        const mensaje = `Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nLocalidad: ${localidad}`;
        const numeroWhatsApp = '541121798092';  
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(url, '_blank');
    });
});

