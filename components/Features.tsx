"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { BadgeCheck, ShieldCheck, ArrowLeftRight, ChevronRight } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Conformidade MEC & ICP",
    text: "Documentos assinados com certificados e-CPF e e-CNPJ seguindo rigorosamente a Portaria MEC 315 e 360 do Acervo Acadêmico Digital.",
    link: "Ver especificações técnicas",
  },
  {
    icon: ShieldCheck,
    title: "Blindagem LGPD Escolar",
    text: "Tratamento seguro e mascaramento de dados sensíveis de discentes e menores com políticas estritas de controle de acesso (RBAC).",
    link: "Políticas de privacidade",
  },
  {
    icon: ArrowLeftRight,
    title: "Integração ERP Acadêmico",
    text: "Conectores nativos via Webhook e API REST para sincronização direta com sistemas como Totvs RM, SophiA, Activesoft e outros.",
    link: "Explorar integrações",
  },
];

export default function Features() {
  return (
    <section className="section" id="recursos">
      <div className="container">
        <div className="features__head">
          <Reveal>
            <span className="eyebrow">Tecnologia certificada</span>
            <h2 className="h2 h2--left">Tudo que a sua secretaria acadêmica precisa</h2>
          </Reveal>
          <Reveal delay={0.1} as="p" className="muted features__lead">
            Substitua arquivos físicos por fluxos 100% digitais com autenticação governamental e
            trilhas de auditoria irrefutáveis.
          </Reveal>
        </div>
        <div className="grid3" id="seguranca">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <motion.article className="card feature" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <span className="feature__icon"><f.icon size={16} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <a href="#" className="feature__link">{f.link} <ChevronRight size={12} /></a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
