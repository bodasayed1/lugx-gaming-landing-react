export const img = (name) =>
  new URL(`../assets/imgs/${name}`, import.meta.url).href;