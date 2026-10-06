import { SITE } from '@/site.config';
import type { Lang } from '@/lib/lang';
import { Page, Section } from './Section';

export default function Privacy({ lang }: { lang: Lang }) {
  const L = SITE.legal;
  const controller = `${L.name}, ${L.street}, ${L.city}, ${L.email}`;
  if (lang === 'de') {
    return (
      <Page title="Datenschutzerklärung">
        <Section title="Verantwortlicher">
          <p>{controller}</p>
        </Section>
        <Section title="Grundsatz">
          <p>
            Die Kernfunktion von MrWhisper, die Transkription deiner Sprache, läuft lokal auf deinem Gerät. Die App enthält nach unserer Prüfung des Quellcodes keine Telemetrie, keine Nutzungsstatistik und keine Absturzberichte, und wir erhalten weder deine Aufnahmen noch deine Transkripte.
          </p>
        </Section>
        <Section title="Diese Website">
          <p>
            Die Website wird über GitHub Pages ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Verbindungsdaten (zum Beispiel deine IP-Adresse), um die Seiten auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und effizienter Betrieb). GitHub kann Daten in die USA übermitteln.
          </p>
          <p>
            Wir setzen keine Cookies, keine Analyse- oder Werbedienste ein und binden keine externen Schriftarten oder Skripte ein; Schriften und Bilder werden von dieser Website selbst geladen.
          </p>
        </Section>
        <Section title="Kontakt per E-Mail">
          <p>
            Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse und den Inhalt deiner Nachricht, um sie zu beantworten (Art. 6 Abs. 1 lit. b oder f DSGVO).
          </p>
        </Section>
        <Section title="Kauf">
          <p>
            Der Verkauf läuft über unseren Merchant of Record Lemon Squeezy. Lemon Squeezy wickelt Zahlung, Umsatzsteuer und Rechnungsstellung ab und verarbeitet deine Zahlungsdaten in eigener Verantwortung nach seiner Datenschutzerklärung. Wir erhalten die für die Lizenzauslieferung nötigen Bestelldaten (zum Beispiel Name, E-Mail-Adresse, Land, Lizenzschlüssel).
          </p>
        </Section>
        <Section title="Die App">
          <p>
            Audio und Texte bleiben auf deinem Gerät. Der Audio-Puffer für Flashback liegt nur im Arbeitsspeicher und wird nicht gespeichert. Die App stellt in folgenden Fällen Verbindungen ins Internet her, die dabei deine IP-Adresse an den jeweiligen Anbieter übermitteln:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Herunterladen von Modelldateien, die du auswählst (Hugging Face, GitHub).</li>
            <li>Import von YouTube-Links (YouTube, sowie GitHub für das Hilfsprogramm yt-dlp).</li>
            <li>Optionale KI-Funktionen über einen externen Anbieter, den du selbst mit eigenem API-Schlüssel einrichtest (zum Beispiel OpenRouter). Nur dann wird der von dir gewählte Text an diesen Anbieter gesendet; es gelten dessen Datenschutzbestimmungen.</li>
          </ul>
        </Section>
        <Section title="Deine Rechte">
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
          </p>
        </Section>
        <Section title="Stand">
          <p>Oktober 2026</p>
        </Section>
      </Page>
    );
  }
  return (
    <Page title="Privacy policy">
      <Section title="Controller">
        <p>{controller}</p>
      </Section>
      <Section title="Principle">
        <p>
          The core feature of MrWhisper, transcribing your speech, runs locally on your device. According to our review of the source code, the app contains no telemetry, no usage statistics and no crash reporting, and we receive neither your recordings nor your transcripts.
        </p>
      </Section>
      <Section title="This website">
        <p>
          The website is delivered through GitHub Pages. When you visit it, GitHub processes technically necessary connection data (for example your IP address) to serve the pages. The legal basis is Art. 6(1)(f) GDPR (secure and efficient operation). GitHub may transfer data to the United States.
        </p>
        <p>
          We use no cookies, no analytics or advertising services, and we load no external fonts or scripts; fonts and images come from this website itself.
        </p>
      </Section>
      <Section title="Contact by email">
        <p>
          If you write to us, we process your email address and the content of your message to answer it (Art. 6(1)(b) or (f) GDPR).
        </p>
      </Section>
      <Section title="Purchases">
        <p>
          Sales are handled by our merchant of record, Lemon Squeezy. Lemon Squeezy processes payment, sales tax/VAT and invoicing and handles your payment data under its own privacy policy. We receive the order data needed to deliver your license (for example name, email address, country, license key).
        </p>
      </Section>
      <Section title="The app">
        <p>
          Audio and text stay on your device. The audio buffer used by Flashback exists only in memory and is not saved. The app connects to the internet in these cases, which transmits your IP address to the respective provider:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Downloading model files that you choose (Hugging Face, GitHub).</li>
          <li>Importing YouTube links (YouTube, and GitHub for the helper tool yt-dlp).</li>
          <li>Optional AI features through an external provider that you set up yourself with your own API key (for example OpenRouter). Only then is the text you select sent to that provider, and its privacy terms apply.</li>
        </ul>
      </Section>
      <Section title="Your rights">
        <p>
          You have the right of access, rectification, erasure, restriction of processing, data portability and objection. You can also lodge a complaint with a data protection supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia.
        </p>
      </Section>
      <Section title="Last updated">
        <p>October 2026</p>
      </Section>
    </Page>
  );
}
