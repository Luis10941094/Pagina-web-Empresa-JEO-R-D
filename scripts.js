document.addEventListener('DOMContentLoaded', () => {
    // Variables para manejar las secciones y los enlaces
    const sections = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('nav a');

    // Función para mostrar la sección correspondiente
    function showSection(targetId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección objetivo
        document.getElementById(targetId).style.display = 'block';
    }

    // Agregar eventos de clic a los enlaces del menú
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Mostrar la sección de inicio por defecto
    showSection('inicio');
});

