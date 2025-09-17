// components/ProcessSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#1A1C21"};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: ${({ color }) => color};
    transform: translateX(-50%);
  }
`;

const Step = styled(motion.div)`
  position: relative;
  width: 50%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: ${({ side }) => (side === "left" ? "right" : "left")};

  ${({ side }) => (side === "left" ? `left: 0;` : `left: 50%;`)}

  &::before {
    content: attr(data-step);
    position: absolute;
    top: 20px;
    ${({ side }) => (side === "left" ? "right: -20px;" : "left: -20px;")}
    background: ${({ color }) => color};
    color: white;
    font-weight: bold;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProcessSection = ({ title, steps, color, bg }) => {
  return (
    <Section bg={bg} color={color}>
      <Title>{title}</Title>
      <Timeline color={color}>
        {steps.map((step, i) => (
          <Step
            key={i}
            side={i % 2 === 0 ? "left" : "right"}
            data-step={i + 1}
            color={color}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {step}
          </Step>
        ))}
      </Timeline>
    </Section>
  );
};
