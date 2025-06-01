import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm">
        <h1 className="text-2xl font-bold mb-6">Impressum</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
          <p>Jonas Sasowski</p>
          <p>Schwebelstrasse 6</p>
          <p>75172 Pforzheim</p>
          <p>Deutschland</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
          <p>E-Mail: sasowski@outlook.de</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </h2>
          <p>Jonas Sasowski</p>
          <p>Schwebelstrasse 6</p>
          <p>75172 Pforzheim</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p className="mt-2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-2">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link to="/" className="text-blue-400 hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
