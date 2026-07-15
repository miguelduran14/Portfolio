/**
 * Datos de navegación y enlaces del sitio.
 * Fuente de verdad de contenido: CONTEXT.md. Nada inventado.
 */

export const siteConfig = {
  name: "Miguel Ángel Durán Muñoz",
  role: "Rising Software Engineer",
  // Frase ancla de marca (CONTEXT.md §2)
  tagline: "Bridging legacy systems and modern AI",
  description:
    "Ingeniero de software en banca y seguros construyendo el puente entre los sistemas críticos legacy (COBOL · DB2 · z/OS) y el desarrollo moderno con IA.",
  email: "miguelduran14@gmail.com",
  github: "https://github.com/miguelduran14",
  linkedin: "https://www.linkedin.com/in/miguelduranmu%C3%B1ozdev/",
} as const;

/** Anclas de la home (one-page) + Blog. CONTEXT.md §8. */
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Skills", href: "/#skills" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Blog", href: "/blog" },
] as const;
