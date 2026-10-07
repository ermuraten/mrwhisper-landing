import { getDict } from '@/i18n';
import { SITE } from '@/site.config';
import type { Lang } from '@/lib/lang';
import { Page, Section } from './Section';

export default function Terms({ lang }: { lang: Lang }) {
  const L = SITE.legal;
  const months = SITE.updateMonths;
  const days = SITE.refundDays;
  if (SITE.preview) {
    return (
      <Page title={lang === 'de' ? 'Verkaufsstart' : 'Launch status'}>
        <p>{getDict(lang).preview.terms}</p>
        <p><a className="text-cyan-300 underline" href={`mailto:${L.email}`}>{L.email}</a></p>
      </Page>
    );
  }
  if (lang === 'de') {
    return (
      <Page title="Nutzungsbedingungen">
        <Section title="1. Geltungsbereich">
          <p>
            Diese Bedingungen gelten für Lizenzen der Software MrWhisper, die über diese Website angeboten werden. Der Kaufvorgang selbst (Zahlung, Umsatzsteuer, Rechnung) wird von unserem Merchant of Record Lemon Squeezy abgewickelt; dafür gelten zusätzlich dessen Bedingungen.
          </p>
        </Section>
        <Section title="2. Lizenz">
          <p>
            Du erhältst ein einfaches, nicht übertragbares Recht, MrWhisper auf Geräten zu installieren und zu nutzen, die dir gehören oder die du kontrollierst. Die zulässige Gerätezahl steht im Checkout. Die Lizenz gilt dauerhaft. Alle Updates sind für {months} Monate ab Kauf enthalten; die Version, die du dann hast, läuft weiter.
          </p>
          <p>
            Nicht erlaubt sind das Weitergeben oder Weiterverkaufen von Lizenzschlüsseln sowie das Umgehen der Lizenzprüfung, soweit das Gesetz nichts anderes erlaubt. MrWhisper enthält Open-Source-Komponenten, die unter ihren jeweiligen Lizenzen stehen.
          </p>
        </Section>
        <Section title="3. Rückerstattung">
          <p>
            Wenn MrWhisper für dich nicht funktioniert, schreib uns innerhalb von {days} Tagen nach dem Kauf an {L.email}. Wir erstatten dann den Kaufpreis. Gesetzliche Rechte bleiben unberührt.
          </p>
        </Section>
        <Section title="4. Ergebnisse und Haftung">
          <p>
            Spracherkennung und KI-Ausgaben können Fehler enthalten. Prüfe wichtige Texte, bevor du dich darauf verlässt. Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit und nach dem Produkthaftungsgesetz; bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Im Übrigen ist die Haftung ausgeschlossen, soweit das Gesetz es zulässt.
          </p>
        </Section>
        <Section title="5. Datenschutz">
          <p>Siehe die Datenschutzerklärung.</p>
        </Section>
        <Section title="6. Anwendbares Recht">
          <p>
            Es gilt deutsches Recht. Zwingende Verbraucherschutzvorschriften deines Wohnsitzstaates bleiben unberührt.
          </p>
        </Section>
        <Section title="7. Kontakt">
          <p>{L.name}, {L.street}, {L.city}, {L.email}</p>
        </Section>
        <p className="text-sm text-gray-500">Stand: Oktober 2026</p>
      </Page>
    );
  }
  return (
    <Page title="Terms of use">
      <Section title="1. Scope">
        <p>
          These terms apply to licenses for the MrWhisper software offered on this website. The purchase itself (payment, sales tax/VAT, invoice) is handled by our merchant of record, Lemon Squeezy, whose terms apply to that transaction as well.
        </p>
      </Section>
      <Section title="2. License">
        <p>
          You receive a non-exclusive, non-transferable right to install and use MrWhisper on devices you own or control. The permitted number of devices is stated at checkout. The license is perpetual. All updates are included for {months} months from purchase; the version you then have keeps working.
        </p>
        <p>
          Sharing or reselling license keys and circumventing the license check are not allowed, except where the law permits it. MrWhisper includes open-source components that remain under their respective licenses.
        </p>
      </Section>
      <Section title="3. Refunds">
        <p>
          If MrWhisper does not work for you, write to {L.email} within {days} days of purchase and we will refund the purchase price. Your statutory rights remain unaffected.
        </p>
      </Section>
      <Section title="4. Results and liability">
        <p>
          Speech recognition and AI output can contain errors. Check important text before you rely on it. We are fully liable for intent, gross negligence, injury to life, body or health, and under product liability law; for slightly negligent breaches of essential contractual obligations, liability is limited to the foreseeable damage typical for this kind of contract. Otherwise liability is excluded to the extent the law allows.
        </p>
      </Section>
      <Section title="5. Privacy">
        <p>See the privacy policy.</p>
      </Section>
      <Section title="6. Governing law">
        <p>
          German law applies. Mandatory consumer protection rules of your country of residence remain unaffected.
        </p>
      </Section>
      <Section title="7. Contact">
        <p>{L.name}, {L.street}, {L.city}, {L.email}</p>
      </Section>
      <p className="text-sm text-gray-500">Last updated: October 2026</p>
    </Page>
  );
}
