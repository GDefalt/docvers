"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import DashboardMock from "./DashboardMock";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="solucao">
      <div className="hero__bg" aria-hidden />
      <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
        <motion.span variants={item} className="pill">
          <span className="pill__dot" /> Gestão escolar confiável e segura
        </motion.span>
        <motion.h1 variants={item}>
          A gestão documental da sua instituição, <em>simplificada</em> e sem ruídos.
        </motion.h1>
        <motion.p variants={item} className="hero__sub">
          Centralize prontuários acadêmicos, históricos escolares e certificados digitais em um
          repositório seguro com estrita conformidade MEC e LGPD.
        </motion.p>
        <motion.div variants={item} className="hero__cta">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#planos" className="btn btn--primary">
            Começar Agora <ArrowRight size={14} />
          </motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#" className="btn btn--ghost">
            <Calendar size={14} /> Agendar Demonstração
          </motion.a>
        </motion.div>
      </motion.div>
      <DashboardMock />
    </section>
  );
}
