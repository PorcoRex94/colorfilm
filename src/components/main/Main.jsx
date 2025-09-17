import { ServicesRow } from "../servicios/ServicesRow";
import Hero from "../hero/Hero";
import { Contacto } from "../contacto/Contacto";
import { MainContainer } from "./main-styles";
export const Main = () => {
  return (
    <>
      <MainContainer>
        <Hero />
        <ServicesRow />
        <Contacto />
      </MainContainer>
    </>
  );
};
