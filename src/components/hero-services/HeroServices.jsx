import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Hero = styled.section`
  height: 89.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ colors }) =>
    `linear-gradient(270deg, ${colors[0]}, ${colors[1]})`};
  background-size: 400% 400%;
  animation: ${gradient} 12s ease infinite;
  color: white;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  max-width: 600px;
`;

const CTA = styled.a`
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: ${({ ctaColor }) => ctaColor};
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 0 0 15px ${({ ctaColor }) => ctaColor};
  }
`;

export const HeroServices = ({
  title,
  subtitle,
  colors = ["#000000", "#333333"],
  ctaText,
  ctaLink,
  ctaColor = "#ffffff",
}) => {
  return (
    <Hero colors={colors}>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {subtitle}
      </Subtitle>
      {ctaText && (
        <CTA href={ctaLink} ctaColor={ctaColor}>
          {ctaText}
        </CTA>
      )}
    </Hero>
  );
};
