"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="cta">
      <Reveal className="container center">
        <h2 className="h2">Pronto para transformar a secretaria da sua instituição?</h2>
        <p className="muted">
          Junte-se a centenas de gestores que abandonaram pastas suspensas e auditorias demoradas.
        </p>
        <div className="hero__cta">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#planos" className="btn btn--primary">
            Começar com 14 Dias Grátis
          </motion.a>
          <a href="#" className="cta__link">Falar com um consultor comercial <ArrowRight size={12} /></a>
        </div>
      </Reveal>
    </section>
  );
}
