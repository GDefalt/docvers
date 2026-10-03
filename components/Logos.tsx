"use client";
import { Reveal } from "./Motion";
import { Building2, GraduationCap, Library, School } from "lucide-react";

const logos = [
  { name: "Colégio São Luís", icon: Building2 },
  { name: "Faculdade Integrada", icon: GraduationCap },
  { name: "Rede Prisma Saber", icon: Library },
  { name: "Instituto Anglo", icon: School },
];

export default function Logos() {
  return (
    <section className="logos">
      <div className="container logos__inner">
        <Reveal className="logos__text">
          <h3>Mais de 350 colégios e universidades confiam no DocVers</h3>
          <p>Segurança jurídica e agilidade operacional comprovada de Norte a Sul.</p>
        </Reveal>
        <div className="logos__list">
          {logos.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08} className="logo">
              <l.icon size={16} /> {l.name}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
