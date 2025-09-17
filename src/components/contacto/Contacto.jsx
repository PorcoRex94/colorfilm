import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  ContactCard,
  ContactGrid,
  Content,
  Intro,
  MapContainer,
  Section,
} from "./contacto-styles";
import { TripleWave } from "../waves/TripleWave";

/* 🌊 TripleWave: naranja (fondo) -> blanca (medio) -> negra (frente) */

export const Contacto = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Dirección",
      value: "Asunción 2301, Martínez, Buenos Aires",
      link: "https://www.google.com/maps/place/Colorfilm/@-34.50251,-58.519143,16z/data=!4m16!1m9!3m8!1s0x95bcb100606eec0f:0xfbcbea9b348baf8c!2sColorfilm!8m2!3d-34.5012538!4d-58.5189178!9m1!1b1!16s%2Fg%2F11vqbnqcgl!3m5!1s0x95bcb100606eec0f:0xfbcbea9b348baf8c!8m2!3d-34.5012538!4d-58.5189178!16s%2Fg%2F11vqbnqcgl?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Teléfono",
      value: "+54 9 11 1234-5678",
      link: "tel:+5491112345678",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contacto@colorfilm.com",
      link: "mailto:contacto@colorfilm.com",
    },
  ];

  return (
    <Section>
      {/* OLA SUPERIOR */}
      <TripleWave />

      <Content>
        <Intro>
          <h2>Solicitá Presupuesto</h2>
          <p>Estamos para acompañarte en cada proyecto.</p>
        </Intro>

        <ContactGrid>
          {contactInfo.map((item, i) => (
            <ContactCard
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={
                item.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </ContactCard>
          ))}
        </ContactGrid>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0644879586926!2d-58.521492724299186!3d-34.501249352093836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb100606eec0f%3A0xfbcbea9b348baf8c!2sColorfilm!5e0!3m2!1sen!2sar!4v1757640247706!5m2!1sen!2sar"
            loading="lazy"
          ></iframe>
        </MapContainer>
      </Content>

      {/* OLA INFERIOR (rota) */}
      <TripleWave invert />
    </Section>
  );
};
