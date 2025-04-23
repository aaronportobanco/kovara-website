// Utility function to handle smooth scrolling to sections
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Offset for the fixed header
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
}
