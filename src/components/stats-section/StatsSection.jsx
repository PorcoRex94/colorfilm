// components/StatsSection.jsx
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || "#f0f0f0"};
  color: ${({ color }) => color || "#1A1C21"};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Stat = styled.div`
  font-size: 2rem;
  font-weight: bold;
  span {
    display: block;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 0.5rem;
  }
`;

export const StatsSection = ({ stats, bg, color }) => {
  return (
    <Section bg={bg} color={color}>
      <Grid>
        {stats.map((s, i) => (
          <Stat key={i}>
            {s.value}
            <span>{s.label}</span>
          </Stat>
        ))}
      </Grid>
    </Section>
  );
};
