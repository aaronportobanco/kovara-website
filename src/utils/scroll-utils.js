// Utility function to handle smooth scrolling to sections
function scrollToSection(sectionId) {
  setTimeout(() => { // Retardo añadido para permitir la actualización del DOM
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 10;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id "${sectionId}" not found.`);
    }
  }, 100);
}

export default scrollToSection;