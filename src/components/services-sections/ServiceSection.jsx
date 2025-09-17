// components/ServicesSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || "#f9f9f9"};
  color: ${({ color }) => color || "#1A1C21"};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  padding: 2rem;
  border-radius: 12px;
  background: white;
  color: ${({ color }) => color};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ServiceSection = ({ title, services, bg, color }) => {
  return (
    <Section bg={bg} color={color}>
      <Title>{title}</Title>
      <Grid>
        {services.map((service, i) => (
          <Card
            key={i}
            color={color}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Icon>{service.icon}</Icon>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
