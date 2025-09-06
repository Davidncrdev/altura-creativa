// src/config/site.js
export const siteConfig = {
  name: "Altura Creativa",
  description: "Agencia especializada en servicios integrales para empresas, marketing digital y rebranding. Potenciamos tu marca con soluciones creativas y estratégicas.",
  url: "https://alturacreativa.com",
  
  colors: {
    primary: "#E84855",     // Rojo corporativo
    secondary: "#E5E5E5",   // Gris claro
    dark: "#333232"         // Gris oscuro
  },
  
  contact: {
    email: "david@alturacreativa.com",
    phone: "+34 600 123 456",
    address: "Madrid, España"
  },
  
  services: [
    {
      title: "Servicio Integral para Empresas",
      description: "Soluciones completas que abarcan desde la estrategia hasta la implementación, optimizando todos los procesos de tu negocio.",
      icon: "building"
    },
    {
      title: "Marketing Digital",
      description: "Campañas digitales efectivas que aumentan tu visibilidad online y generan leads cualificados para tu empresa.",
      icon: "trending-up"
    },
    {
      title: "Rebranding",
      description: "Renovamos tu identidad corporativa para conectar mejor con tu audiencia y destacar en el mercado actual.",
      icon: "palette"
    }
  ],
  
  testimonials: [
    {
      name: "María González",
      company: "TechStart Solutions",
      position: "CEO",
      content: "Altura Creativa transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas.",
      rating: 5,
      avatar: "/testimonials/maria.jpg"
    },
    {
      name: "Carlos Ruiz",
      company: "Innovate Corp",
      position: "Director de Marketing",
      content: "El equipo de Altura Creativa es excepcional. Su enfoque estratégico nos ayudó a duplicar nuestras ventas online.",
      rating: 5,
      avatar: "/testimonials/carlos.jpg"
    },
    {
      name: "Ana Martínez",
      company: "Creative Studio",
      position: "Fundadora",
      content: "Profesionales, creativos y resultados espectaculares. Sin duda, la mejor inversión que hemos hecho en marketing.",
      rating: 5,
      avatar: "/testimonials/ana.jpg"
    }
  ],
  
  packages: [
    {
      name: "Starter",
      price: 899,
      popular: false,
      description: "Perfecto para pequeñas empresas que buscan presencia digital",
      features: [
        "Sitio web responsive",
        "Optimización SEO básica",
        "Integración redes sociales",
        "Formulario de contacto",
        "Soporte 3 meses"
      ]
    },
    {
      name: "Professional",
      price: 1599,
      popular: true,
      description: "La solución completa para empresas en crecimiento",
      features: [
        "Todo lo incluido en Starter",
        "Marketing digital completo",
        "Análisis de competencia",
        "Estrategia de contenidos",
        "Campañas publicitarias",
        "Soporte 6 meses"
      ]
    },
    {
      name: "Enterprise",
      price: 2899,
      popular: false,
      description: "Para empresas que buscan resultados extraordinarios",
      features: [
        "Todo lo incluido en Professional",
        "Rebranding completo",
        "Consultoría estratégica",
        "Automatización marketing",
        "Dashboard personalizado",
        "Soporte 12 meses",
        "Reuniones mensuales"
      ]
    }
  ],
  
  // ⚠️ OBLIGATORIO: Firma de desarrollo ⚠️
  developer: {
    name: "Altura Creativa",
    copyright: "Desarrollado por Altura Creativa ©"
  }
};