"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Motion";

const faqs = [
  {
    q: "Os documentos gerados têm plena validade jurídica perante o MEC?",
    a: "Sim. Todos os documentos são assinados com certificado ICP-Brasil (e-CPF ou e-CNPJ) e seguem as portarias do MEC para o Acervo Acadêmico Digital, com carimbo do tempo e trilha de auditoria.",
  },
  {
    q: "Como funciona a migração do acervo físico legado?",
    a: "Nossa equipe orienta a digitalização, aplica OCR para indexar o conteúdo e importa tudo para o repositório com metadados padronizados. Você acompanha o andamento por lote, sem parar a secretaria.",
  },
  {
    q: "É possível integrar com nosso ERP de gestão acadêmica atual?",
    a: "Sim. Oferecemos conectores via Webhook e API REST para Totvs RM, SophiA, Activesoft e outros. Se o seu sistema não estiver na lista, a integração pode ser feita pela API.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section">
      <div className="container container--narrow">
        <Reveal className="center">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2 className="h2">Perguntas Frequentes de Gestores</h2>
        </Reveal>
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.08} className="faq__item">
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq__a">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
