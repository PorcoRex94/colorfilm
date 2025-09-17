import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
  }

  .bounce {
    animation: bounce 1s ease-in-out;
  }
`;

export const ChatButton = styled.button`
  background-color: #25d366; // Verde de WhatsApp
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.1);
  }

  .logo__contact {
    width: 45px;
  }
`;

export const ChatPopup = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 500px;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--azul);
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 10;

  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #25d366;
  }
`;

export const SendButton = styled.button`
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #1ebd56;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 90px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: var(--naranja);
  color: var(--negro);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  border: 3px solid var(--naranja);
  transition: opacity 0.3s, transform 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: var(--negro);
    color: var(--naranja);
    transform: scale(1.1);
  }
`;
