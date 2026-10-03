"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Search, SlidersHorizontal, CheckCircle2, Clock3 } from "lucide-react";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState<number>(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => c.stop();
  }, [inView, to]);
  const text = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val);
  return <span ref={ref}>{text}{suffix}</span>;
}

const rows = [
  { doc: "Histórico Escolar — Ana Beatriz Lima", tipo: "Histórico", prot: "2024-EDU-9841", ok: true, emissao: "12/03/2024" },
  { doc: "Certificado de Conclusão — Pedro Alves", tipo: "Certificado", prot: "2024-EDU-9812", ok: true, emissao: "11/03/2024" },
  { doc: "Declaração de Matrícula — Julia Ramos", tipo: "Declaração", prot: "2024-EDU-9790", ok: true, emissao: "09/03/2024" },
  { doc: "Prontuário Acadêmico — Lucas Prado", tipo: "Prontuário", prot: "2024-EDU-9755", ok: false, emissao: "08/03/2024" },
];

export default function DashboardMock() {
  return (
    <motion.div
      className="mock"
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mock__bar">
        <div className="mock__dots"><i /><i /><i /></div>
        <span className="mock__path">Repositório Geral • Polo São Paulo / Matriz</span>
        <div className="mock__search">
          <Search size={11} /> 2024-EDU-9841 <kbd>⌘K</kbd>
        </div>
        <span className="mock__filter"><SlidersHorizontal size={12} /></span>
      </div>

      <div className="mock__stats">
        <div className="stat"><small>Prontuários Ativos</small><strong><Counter to={3842} /></strong></div>
        <div className="stat"><small>Assinaturas ICP-Brasil</small><strong><Counter to={100} suffix="% OK" /></strong></div>
        <div className="stat"><small>Indexação OCR Automática</small><strong><Counter to={14290} /> doc</strong></div>
        <div className="stat"><small>Auditoria MEC</small><strong>Em Dia</strong></div>
      </div>

      <div className="mock__table">
        <div className="mock__head">
          <span>Documento / Discente</span><span>Tipo & Protocolo</span>
          <span>Validação</span><span>Emissão</span><span>Ações</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.prot}
            className="mock__row"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
          >
            <span className="mock__doc">{r.doc}</span>
            <span><b>{r.tipo}</b><br /><small>{r.prot}</small></span>
            <span className={r.ok ? "ok" : "wait"}>
              {r.ok ? <CheckCircle2 size={12} /> : <Clock3 size={12} />}
              {r.ok ? "Assinado" : "Pendente"}
            </span>
            <span>{r.emissao}</span>
            <span className="link">Abrir</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
