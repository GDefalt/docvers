import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <FileText size={12} /> © 2024 DocVers Gestão de Documentos Escolares. Todos os direitos reservados.
        </span>
        <nav>
          <a href="#">Privacidade LGPD</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Conformidade MEC</a>
        </nav>
      </div>
    </footer>
  );
}
