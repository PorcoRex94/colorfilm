// components/GalleryGrid.jsx
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#1A1C21"};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Item = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover::after {
    content: attr(data-label);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

/* 🔥 Lightbox overlay */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LightboxImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
`;

export const GalleryGrid = ({ title, images, bg, color }) => {
  const [selected, setSelected] = useState(null);

  return (
    <Section bg={bg} color={color}>
      <Title>{title}</Title>
      <Grid>
        {images.map((img, i) => (
          <Item
            key={i}
            data-label={img.label}
            onClick={() => setSelected(img)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={img.src} alt={img.label} />
          </Item>
        ))}
      </Grid>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <LightboxImage
              src={selected.src}
              alt={selected.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
};
