import styled from "styled-components";

const WaveStack = styled.svg`
  display: block;
  width: 100%;
  height: 200px;
  max-height: 240px;
  pointer-events: none;
  position: relative;
  z-index: 0;

  @media (max-width: 600px) {
    height: 110px;
  }
`;

/**
 * TripleWave - ola compuesta por 3 capas
 * Orden: back → middle (desfasada) → front
 * Props:
 *  - back (color)   default "#FE6601" (naranja)
 *  - middle (color) default "#ffffff" (blanco)
 *  - front (color)  default "#1A1C21" (negro)
 *  - invert (bool)  rota la ola 180°
 */
export const TripleWave = ({
  back = "#FE6601",
  middle = "#ffffff",
  front = "#1A1C21",
  invert = false,
}) => (
  <WaveStack
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
    style={{ transform: invert ? "rotate(180deg)" : "none" }}
  >
    {/* Fondo */}
    <path
      fill={back}
      fillOpacity="1"
      d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,170.7C672,192,768,192,864,160C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L0,0Z"
    />
    {/* Medio (blanco con offset) */}
    <path
      fill={middle}
      fillOpacity="1"
      transform="translate(0,10)" // 👈 el truco: moverla 10px abajo
      d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,170.7C672,192,768,192,864,160C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L0,0Z"
    />
    {/* Frente */}
    <path
      fill={front}
      fillOpacity="1"
      d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,170.7C672,192,768,192,864,160C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L0,0Z"
    />
  </WaveStack>
);
