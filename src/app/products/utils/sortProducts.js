export function sortProducts(products, sortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case "precioAsc":
      sorted.sort((a, b) => a.precio - b.precio);
      break;
    case "precioDesc":
      sorted.sort((a, b) => b.precio - a.precio);
      break;
    case "nombreAsc":
      sorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case "nombreDesc":
      sorted.sort((a, b) => b.nombre.localeCompare(a.nombre));
      break;
    default:
      // "destacados": se mantiene el orden original
      break;
  }
  return sorted;
}
