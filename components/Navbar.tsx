"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a href="#" className="brand">
          <span className="brand__logo"><FileText size={14} /></span>
          DocVers
        </a>
        <nav className="nav__links">
          <a href="#solucao">Solução</a>
          <a href="#recursos">Recursos</a>
          <a href="#planos">Planos</a>
          <a href="#seguranca">Segurança</a>
        </nav>
        <div className="nav__actions">
          <a href="#" className="nav__login">Acessar Conta</a>
          <a href="#planos" className="btn btn--primary btn--sm">Começar Agora</a>
          <span className="avatar"><User size={13} /></span>
        </div>
      </div>
    </motion.header>
  );
}
