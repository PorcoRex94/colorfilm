// components/CTASection.jsx
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg};
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: ${({ color }) => color};
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 0 0 15px ${({ color }) => color};
  }
`;

export const CtaSection = ({
  title,
  subtitle,
  bg,
  buttonText,
  buttonLink,
  buttonColor,
}) => {
  return (
    <Section bg={bg}>
      <Title>{title}</Title>
      <p>{subtitle}</p>
      <Button href={buttonLink} color={buttonColor}>
        {buttonText}
      </Button>
    </Section>
  );
};
