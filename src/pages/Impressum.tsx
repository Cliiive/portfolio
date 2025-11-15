export default function Impressum() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Impressum</h1>
      <div className="text-slate-300 leading-7 space-y-3">
        <p>Angaben gemäß § 5 TMG</p>
        <div>
          <p><span className="text-slate-200">Diensteanbieter:</span> Jonas Sasowski</p>
          <p><span className="text-slate-200">Kontakt:</span> Bitte über LinkedIn oder GitHub kontaktieren.</p>
        </div>
        <div>
          <p className="text-slate-200">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
          <p>Jonas Sasowski</p>
        </div>
        <p className="text-slate-400 text-sm">Hinweis: Bitte ergänzen/ändern Sie die Angaben (z. B. Anschrift), sofern rechtlich erforderlich.</p>
      </div>
    </section>
  );
}
