"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Instituição Essencial",
    desc: "Para instituições de ensino independentes que buscam conformidade e modernização documental.",
    price: "490",
    items: [
      "Alunos e prontuários ilimitados",
      "Gestão documental e conformidade MEC/LGPD",
      "Assinatura digital ICP-Brasil",
      "Usuários e operadores ilimitados na unidade",
      "Suporte padrão em até 24h",
    ],
    cta: "Contratar Essencial",
  },
  {
    name: "Instituição Avançada",
    desc: "Para colégios e faculdades que necessitam de automação e integração de secretarias.",
    price: "1.190",
    featured: true,
    items: [
      "Tudo do Essencial com alunos ilimitados",
      "OCR inteligente e indexação automática",
      "Integração via API / Webhooks com ERPs acadêmicos",
      "Múltiplos operadores e perfis RBAC",
      "Suporte prioritário via WhatsApp e Gestor dedicado",
    ],
    cta: "Escolher Plano Avançado",
  },
  {
    name: "Redes & Grupos Educacionais",
    desc: "Para redes de ensino e mantenedoras com múltiplas instituições e governança centralizada.",
    custom: true,
    items: [
      "Gestão multi-instituição unificada",
      "Governança master para toda a rede",
      "SLAs customizados (99,9% com contrato)",
      "Armazenamento e auditoria dedicados em nuvem soberana",
      "Treinamento presencial/remoto de equipes",
    ],
    cta: "Falar com Especialista",
  },
];

export default function Pricing() {
  return (
    <section className="section section--tint" id="planos">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Tabela de investimento</span>
          <h2 className="h2">Planos dimensionados para o porte da sua rede</h2>
          <p className="muted">
            Planos estruturados por instituição de ensino, com alunos e prontuários ilimitados —
            sem surpresas na mensalidade.
          </p>
        </Reveal>

        <div className="grid3 pricing">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <motion.div
                className={`card plan ${p.featured ? "plan--featured" : ""}`}
                whileHover={{ y: p.featured ? -4 : -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {p.featured && (
                  <span className="plan__badge"><Star size={10} fill="currentColor" /> Recomendado</span>
                )}
                <h3 className="plan__name">
                  {p.name}
                  {p.featured && <span className="tag">Mais Escolhido</span>}
                </h3>
                <p className="plan__desc">{p.desc}</p>
                <div className="plan__price">
                  {p.custom ? (
                    <>
                      <strong className="plan__custom">Personalizado</strong>
                      <small>/ sob consulta</small>
                    </>
                  ) : (
                    <>
                      <span>R$</span><strong>{p.price}</strong><small>/mês por instituição</small>
                    </>
                  )}
                </div>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}><CheckCircle2 size={14} /> {it}</li>
                  ))}
                </ul>
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className={`btn btn--block ${p.featured ? "btn--primary" : "btn--soft"}`}
                >
                  {p.cta}
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
