import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Navbar } from "../navbar/Navbar.jsx";
import { ScrollToTop } from "../scroll-to-top/ScrollToTop";
import { ChatBot } from "../chatbot/ChatBot.jsx";
import { Footer } from "../footer/Footer.jsx";

export const GlobalComponent = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <ChatBot />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
