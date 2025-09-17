// components/IntroSection.jsx
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.8;
  color: ${({ color }) => color || "#1A1C21"};
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
`;

export const IntroSection = ({ title, text, color }) => {
  return (
    <Section color={color}>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </Section>
  );
};
