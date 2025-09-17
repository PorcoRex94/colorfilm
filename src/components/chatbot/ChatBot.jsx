import React, { useState, useEffect } from "react";
import {
  ChatContainer,
  ChatButton,
  ChatPopup,
  CloseButton,
  Header,
  InputContainer,
  TextInput,
  SendButton,
  ScrollToTopButton,
} from "./chatBot-styles";
import { FaArrowUp } from "react-icons/fa";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isBouncingScroll, setIsBouncingScroll] = useState(false);
  const [message, setMessage] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    // Cada 5 segundos activa la animación por 1 segundo
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const buildWhatsAppUrl = (message) => {
    const phoneNumber = "5491162641313"; // Número internacional
    const encodedMessage = encodeURIComponent(message || "¡Hola!"); //

    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      // Escritorio: usar WhatsApp Web
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
  };

  const handleSendMessage = () => {
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");
  };

  /*-----Botón Volver arriba--------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ChatContainer>
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
        className={isBouncing ? "bounce" : ""}
      >
        {isOpen ? (
          "×"
        ) : (
          <img
            src="/assets/imgs/logos/logo-whatsapp.webp"
            alt="Logo whatsapp"
            className="logo__contact"
          />
        )}
      </ChatButton>
      <ChatPopup $isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
        <Header>
          ¡Hola! <br />
          ¿Cómo podemos ayudarte?
        </Header>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Enviar</SendButton>
        </InputContainer>
      </ChatPopup>

      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop} aria-label="Volver arriba">
          <FaArrowUp />
        </ScrollToTopButton>
      )}
    </ChatContainer>
  );
};
