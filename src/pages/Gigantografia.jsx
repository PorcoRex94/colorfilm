import { CtaSection } from "../components/cta-section/CtaSection";
import { GalleryGrid } from "../components/gallery-grid/GalleryGrid";
import { HeroServices } from "../components/hero-services/HeroServices";
import { IntroSection } from "../components/intro-section/IntroSection";
import { ProcessSection } from "../components/process-section/ProcessSection";
import { StatsSection } from "../components/stats-section/StatsSection";

export const Gigantografia = () => {
  return (
    <>
      <HeroServices
        title="Gigantografía que Impacta"
        subtitle="Porta banners, roll-ups, vinilos y lonas para dar máxima visibilidad a tu marca."
        colors={["#FE6601", "#1A1C21"]}
        ctaText="Solicitar presupuesto"
        ctaLink="https://wa.me/XXXXXXXXXX"
        ctaColor="#1F83C1"
      />

      <IntroSection
        title="Soluciones en Gigantografía"
        text="Nuestra experiencia en impresión de gran formato nos permite ofrecer productos de alto impacto visual, diseñados para captar la atención en cualquier espacio. Desde vinilos y lonas hasta sistemas portátiles como banners y roll-ups, trabajamos con materiales de primera calidad para asegurar colores vibrantes, resistencia y durabilidad."
        color="#FE6601"
      />

      <GalleryGrid
        title="Trabajos Realizados"
        bg="#fff7f0"
        color="#FE6601"
        images={[
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Roll-up Publicitario",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Vinilo Adhesivo",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Porta Banner",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Lona Backlight",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Vinilo de Corte",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Cartelería Exterior",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Lona Blackout",
          },
          {
            src: "../assets/imgs/img/gigantografia-img.webp",
            label: "Stand Publicitario",
          },
        ]}
      />

      <ProcessSection
        title="Nuestro Proceso de Trabajo"
        color="#1F83C1"
        bg="#ffffff"
        steps={[
          "Analizamos tus necesidades de comunicación visual",
          "Preparamos el diseño optimizado para gran formato",
          "Imprimimos con equipos de alta definición",
          "Finalizamos con acabados resistentes y duraderos",
          "Realizamos instalación o entrega rápida",
        ]}
      />

      <StatsSection
        bg="#FE6601"
        color="#fff"
        stats={[
          { value: "+2000", label: "Trabajos de gran formato" },
          { value: "100%", label: "Impresión resistente al exterior" },
          { value: "+300", label: "Marcas que confían en nosotros" },
        ]}
      />

      <CtaSection
        title="¿Querés que tu marca se vea en grande?"
        subtitle="Solicitá tu presupuesto y destacá tu presencia con gigantografía de calidad."
        bg="#1A1C21"
        buttonText="Hablar por WhatsApp"
        buttonLink="https://wa.me/XXXXXXXXXX"
        buttonColor="#FE6601"
      />
    </>
  );
};
