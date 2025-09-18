import { CtaSection } from "../components/cta-section/CtaSection";
import { GalleryGrid } from "../components/gallery-grid/GalleryGrid";
import { HeroServices } from "../components/hero-services/HeroServices";
import { IntroSection } from "../components/intro-section/IntroSection";
import { ProcessSection } from "../components/process-section/ProcessSection";
import { StatsSection } from "../components/stats-section/StatsSection";

export const OffsetDigital = () => {
  return (
    <>
      <HeroServices
        title="Offset Digital de Calidad"
        subtitle="Laminados, anillados e imanes con terminaciones impecables para tus proyectos."
        colors={["#1A1C21", "#1F83C1"]}
        ctaText="Solicitar presupuesto"
        ctaLink="https://wa.me/XXXXXXXXXX"
        ctaColor="#FE6601"
      />

      <IntroSection
        title="Impresión Offset y Digital"
        text="Combinamos la precisión de la impresión offset con la versatilidad del digital, ofreciendo soluciones personalizadas para tiradas cortas y largas. Laminados que protegen y embellecen, anillados resistentes y prácticos, e imanes creativos que convierten tu marca en un recuerdo cotidiano."
        color="#1A1C21"
      />

      <GalleryGrid
        title="Trabajos Realizados"
        bg="#f0f8ff"
        color="#1A1C21"
        images={[
          { src: "../assets/imgs/img/offset-img.webp", label: "Laminado Mate" },
          {
            src: "../assets/imgs/img/offset-img.webp",
            label: "Laminado Brillante",
          },
          {
            src: "../assets/imgs/img/offset-img.webp",
            label: "Cuadernos Anillados",
          },
          { src: "../assets/imgs/img/offset-img.webp", label: "Calendarios" },
          { src: "../assets/imgs/img/offset-img.webp", label: "Revistas" },
          {
            src: "../assets/imgs/img/offset-img.webp",
            label: "Carpetas Corporativas",
          },
          {
            src: "../assets/imgs/img/offset-img.webp",
            label: "Imanes Publicitarios",
          },
          {
            src: "../assets/imgs/img/offset-img.webp",
            label: "Papelería Comercial",
          },
        ]}
      />

      <ProcessSection
        title="Nuestro Proceso de Trabajo"
        color="#FE6601"
        bg="#ffffff"
        steps={[
          "Revisamos y preparamos tu diseño",
          "Seleccionamos el tipo de impresión ideal (offset o digital)",
          "Realizamos impresión con alta calidad de color",
          "Aplicamos acabados: laminado, corte, anillado o imanes",
          "Realizamos control de calidad y entrega puntual",
        ]}
      />

      <StatsSection
        bg="var(--naranja)"
        color="#fff"
        stats={[
          { value: "+10,000", label: "Ejemplares impresos" },
          { value: "+150", label: "Clientes satisfechos" },
          { value: "100%", label: "Acabados profesionales" },
        ]}
      />

      <CtaSection
        title="¿Necesitás impresión de calidad?"
        subtitle="Offset y digital con acabados que elevan tu marca."
        bg="var(--negro)"
        buttonText="Hablar por WhatsApp"
        buttonLink="https://wa.me/XXXXXXXXXX"
        buttonColor="#FE6601"
      />
    </>
  );
};
