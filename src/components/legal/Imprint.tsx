import { SITE } from '@/site.config';
import type { Lang } from '@/lib/lang';
import { Page, Section } from './Section';

export default function Imprint({ lang }: { lang: Lang }) {
  const L = SITE.legal;
  const de = lang === 'de';
  return (
    <Page title={de ? 'Impressum' : 'Legal notice (Impressum)'}>
      <Section title={de ? 'Angaben gemäß § 5 DDG' : 'Provider information (§ 5 DDG)'}>
        <p>
          {L.name}
          {L.tradeName ? <><br />{de ? 'Handelsname' : 'Trading as'}: {L.tradeName}</> : null}
          <br />
          {L.street}
          <br />
          {L.city}
        </p>
      </Section>
      <Section title={de ? 'Kontakt' : 'Contact'}>
        <p>
          {L.phone ? <>{de ? 'Telefon' : 'Phone'}: {L.phone}<br /></> : null}
          E-Mail: <a className="text-cyan-300 underline underline-offset-4" href={`mailto:${L.email}`}>{L.email}</a>
        </p>
      </Section>
      {L.vatId ? (
        <Section title={de ? 'Umsatzsteuer-ID' : 'VAT ID'}>
          <p>{L.vatId}</p>
        </Section>
      ) : null}
      <Section title={de ? 'Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)' : 'Responsible for content (§ 18 (2) MStV)'}>
        <p>
          {L.name}, {L.street}, {L.city}
        </p>
      </Section>
      <Section title={de ? 'Streitbeilegung' : 'Dispute resolution'}>
        <p>
          {de
            ? 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
            : 'We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.'}
        </p>
      </Section>
    </Page>
  );
}
