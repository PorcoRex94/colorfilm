import { CtaSection } from "../components/cta-section/CtaSection";
import { GalleryGrid } from "../components/gallery-grid/GalleryGrid";
import { HeroServices } from "../components/hero-services/HeroServices";
import { IntroSection } from "../components/intro-section/IntroSection";
import { ProcessSection } from "../components/process-section/ProcessSection";
import { StatsSection } from "../components/stats-section/StatsSection";

export const Preimpresion = () => {
  return (
    <>
      {/* HERO */}
      <HeroServices
        title="Soluciones en Preimpresión"
        subtitle="CTP (preprensa) y películas de alta calidad para tus proyectos."
        colors={["#1F83C1", "#1A1C21"]}
        ctaText="Contactar"
        ctaLink="https://wa.me/XXXXXXXXXX"
        ctaColor="#FE6601"
      />

      <IntroSection
        title="Especialistas en Preimpresión"
        text="Contamos con tecnología de última generación para el desarrollo de CTP y películas, garantizando calidad y precisión en cada proyecto. Nuestro equipo se asegura de que tus archivos estén optimizados para lograr el mejor resultado en impresión offset y digital."
        color="#1F83C1"
      />

      {/* GALERÍA DE TRABAJOS */}
      <GalleryGrid
        title="Trabajos Realizados"
        bg="#f9f9f9"
        color="#1F83C1"
        images={[
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
          { src: "../assets/imgs/img/img-ctp.webp", label: "CTP" },
        ]}
      />

      {/* PROCESO */}
      <ProcessSection
        title="Nuestro Proceso de Trabajo"
        color="#FE6601"
        bg="#ffffff"
        steps={[
          "Recibimos y revisamos tu diseño",
          "Preparamos el archivo con estándares de impresión",
          "Generamos CTP y películas con máxima precisión",
          "Entregamos los insumos listos para impresión",
        ]}
      />

      <StatsSection
        bg="#1F83C1"
        color="#fff"
        stats={[
          { value: "+25 años", label: "Experiencia en preprensa" },
          { value: "+500", label: "Proyectos completados" },
          { value: "100%", label: "Clientes satisfechos" },
        ]}
      />

      {/* CTA FINAL */}
      <CtaSection
        title="¿Listo para tu próximo proyecto?"
        subtitle="Contáctanos y llevemos tus ideas al siguiente nivel."
        bg="#1A1C21"
        buttonText="Hablar por WhatsApp"
        buttonLink="https://wa.me/XXXXXXXXXX"
        buttonColor="#1F83C1"
      />
    </>
  );
};
