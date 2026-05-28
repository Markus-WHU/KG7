import './index.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine
} from 'recharts';

/* ── DATA ── */
const cashflows = [
  { year: '2026', erwartet: -4500000, pessimistisch: -4500000 },
  { year: '2027', erwartet: -3500000, pessimistisch: -3500000 },
  { year: '2028', erwartet: 0, pessimistisch: 0 },
  { year: '2029', erwartet: 0, pessimistisch: 0 },
  { year: '2030', erwartet: 0, pessimistisch: 0 },
  { year: '2031', erwartet: 0, pessimistisch: 0 },
  { year: '2032', erwartet: 646128, pessimistisch: 16593 },
  { year: '2033', erwartet: 908844, pessimistisch: 700000 },
  { year: '2034', erwartet: 1100000, pessimistisch: 1100000 },
  { year: '2035', erwartet: 1363872, pessimistisch: 815541 },
  { year: '2036', erwartet: 1601485, pessimistisch: 850000 },
  { year: '2037', erwartet: 1614673, pessimistisch: 996926 },
  { year: '2038', erwartet: 1640816, pessimistisch: 1276568 },
  { year: '2039', erwartet: 1622425, pessimistisch: 1252603 },
  { year: '2040', erwartet: 1492079, pessimistisch: 1154333 },
  { year: '2041', erwartet: 1158185, pessimistisch: 1176853 },
  { year: '2042', erwartet: 756805, pessimistisch: 816580 },
  { year: '2043', erwartet: 154596, pessimistisch: 514894 },
  { year: '2044', erwartet: 463936, pessimistisch: 752808 },
];

const bildungsFunnel = [
  { stage: 'Schüler', akademiker: 100, nichtAkademiker: 100 },
  { stage: '1. Semester', akademiker: 79, nichtAkademiker: 27 },
  { stage: 'Bachelor', akademiker: 64, nichtAkademiker: 20 },
  { stage: 'Master', akademiker: 43, nichtAkademiker: 11 },
  { stage: 'Promotion', akademiker: 6, nichtAkademiker: 2 },
];

const partners = [
  'WHU', 'Bucerius Law School', 'KLU', 'Hertie School', 'ESMT Berlin',
  'Goethe Business School', 'Paracelsus Medizinische Universität', 'esade',
  'INSEAD', 'HHL Leipzig', 'Frankfurt School', 'Int. Psychoanalytische Univ. Berlin',
  'AMS Antwerp Management School', 'SRH', 'Constructor University',
  'Carl Remigius Medical School', 'Karl Landsteiner Privatuniversität',
  'IE University', 'CBS International Business School', 'BSP Business School Berlin',
  'ESCP Business School', 'MDH Mediadesign Hochschule', 'AMD',
  'ISM International School of Management', 'Lancaster University Leipzig',
  'Hochschule Macromedia', 'SAE Institute', 'NT', 'fhwedel',
  'Zeppelin Universität', 'Hochschule Fresenius', 'Asklepios Campus Hamburg',
  'European Flight Academy', 'MHB Medizinische Hochschule Brandenburg',
  'EIT InnoEnergy', 'Vinzenz Pallotti University', 'EBS Universität',
  'accadis Hochschule', 'XU Exponential University',
];

const risks = [
  { title: 'Totalverlustrisiko', text: 'Die Beteiligung ist nicht kapitalgarantiert. Es können Risiken eintreten, die zum teilweisen oder vollständigen Verlust des eingesetzten Kapitals führen.' },
  { title: 'Einkommensrisiko der Geförderten', text: 'Zahlungen sind einkommensabhängig. Bleibt das Einkommensniveau dauerhaft unter den Erwartungen, können prognostizierte Ausschüttungen ausbleiben.' },
  { title: 'Liquiditätsrisiko', text: 'Die Kommanditbeteiligung ist nicht börsenhandelbar. Vorzeitige Veräußerung nur mit Zustimmung des Beirats möglich.' },
  { title: 'Laufzeit- & Ausschüttungsrisiko', text: 'Grundlaufzeit 15 Jahre ab letztem Zeichnungsschluss. Erste Ausschüttungen frühestens ab 2032 geplant. Ausschüttungen sind variabel.' },
  { title: 'Fremdkapitalhebel-Risiko', text: 'Geplantes Bank-Darlehen EUR 4 Mio. (33% des Zeichnungskapitals). Im Verlustfall wird das Eigenkapital der Investoren überproportional belastet.' },
  { title: 'Blind-Pool-Risiko', text: 'Zum Zeitpunkt der Zeichnung stehen die konkreten Förderverträge noch nicht fest. Anleger vertrauen auf die Anlageentscheidungen der Geschäftsführenden Kommanditistin.' },
  { title: 'Schlüsselpersonenrisiko', text: 'Der Erfolg ist wesentlich von den handelnden Personen bei der Brain Capital Asset Management GmbH abhängig.' },
  { title: 'Regulatorisches & steuerliches Risiko', text: 'Änderungen der rechtlichen oder steuerlichen Rahmenbedingungen, insbesondere im Bereich KAGB, können sich nachteilig auswirken.' },
];

/* ── COMPONENTS ── */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">bra<span className="accent">i</span>n cap<span className="accent">i</span>tal</div>
      <ul className="nav-links">
        <li><a href="#cover">Übersicht</a></li>
        <li><a href="#ueber">Über Brain Capital</a></li>
        <li><a href="#problem">Das Problem & ISA</a></li>
        <li><a href="#fondsprofil">Fondsprofil</a></li>
        <li><a href="#rendite">Rendite & Cashflow</a></li>
        <li><a href="#risikoprofil">Risikoprofil</a></li>
        <li><a href="#governance">Governance</a></li>
        <li><a href="#risiken">Risiken</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <div className="nav-badge">April 2026 · Vertraulich</div>
    </nav>
  );
}

function Cover() {
  return (
    <section id="cover" className="cover">
      <div className="cover-diagonal" />
      <div className="cover-content">
        <div className="cover-eyebrow">Angebotsunterlage · April 2026</div>
        <h1 className="cover-title">
          Siebte Brain Capital<br /><strong>GmbH &amp; Co. KG</strong>
        </h1>
        <p className="cover-sub">Beteiligung an einkommensabhängiger Studienfinanzierung – für professionelle und semiprofessionelle Anleger</p>
        <div className="cover-meta">
          <span className="cover-chip">KAGB-konformer AIF</span>
          <span className="cover-chip">EUR 12 Mio. Gesamtvolumen</span>
          <span className="cover-chip">IRR erwartet: 5,7% p.a.</span>
          <span className="cover-chip">— Vertraulich —</span>
        </div>
        <div className="cover-toc">
          <a href="#ueber" className="cover-toc-item">Brain Capital auf einen Blick</a>
          <a href="#problem" className="cover-toc-item">Das Problem &amp; ISA-Modell</a>
          <a href="#fondsprofil" className="cover-toc-item">Fondsprofil &amp; Eckdaten</a>
          <a href="#rendite" className="cover-toc-item">Rendite &amp; Cashflow</a>
          <a href="#risikoprofil" className="cover-toc-item">Risikoprofil</a>
          <a href="#governance" className="cover-toc-item">Governance</a>
          <a href="#risiken" className="cover-toc-item">Wesentliche Risiken</a>
        </div>
        <div className="cover-logo">bra<span className="accent">i</span>n cap<span className="accent">i</span>tal</div>
      </div>
    </section>
  );
}

function SecHeader({ icon, title, sub }) {
  return (
    <div className="sec-header">
      <div className="sh-icon">{icon}</div>
      <div className="sh-text">
        <div className="sh-title">{title}</div>
        {sub && <div className="sh-sub">{sub}</div>}
      </div>
    </div>
  );
}

function UeberSection() {
  return (
    <section id="ueber">
      <SecHeader icon="01" title="Brain Capital auf einen Blick" sub="Über 20 Jahre Erfahrung im Gebiet der einkommensabhängigen Studienfinanzierung" />
      <div className="sec-body">
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Verwaltetes Kapital</div>
            <div className="kpi-value">&gt; EUR 400 Mio.</div>
            <div className="kpi-sub">Assets under Management</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Förderverträge</div>
            <div className="kpi-value">&gt; 12.000</div>
            <div className="kpi-sub">davon ca. 7.000 in aktiver Zahlungsphase</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Partnerhochschulen</div>
            <div className="kpi-value">&gt; 50</div>
            <div className="kpi-sub">WHU, ESMT, Frankfurt School, INSEAD u.v.m.</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Gründung</div>
            <div className="kpi-value">2005</div>
            <div className="kpi-sub">WHU – Otto Beisheim School of Management</div>
          </div>
        </div>

        <div className="two-col">
          <div className="card">
            <div className="card-head">Kennzahlen</div>
            <div className="card-body">
              <ul className="bullet-list">
                <li><strong>Fördergesellschaften:</strong> &gt; 30 aktive Gesellschaften</li>
                <li><strong>Investoren:</strong> Ca. 20 institutionelle Investoren sowie &gt; 250 Privatinvestoren</li>
                <li><strong>Team:</strong> 27 Mitarbeiter in Key Account, Alumni Services, Accounting, Controlling &amp; IT</li>
                <li><strong>Registrierter Fondsmanager:</strong> Brain Capital Asset Management GmbH bei der BaFin als Kapitalverwaltungsgesellschaft registriert</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">Bewährtes Modell</div>
            <div className="card-body">
              <ul className="bullet-list">
                <li>Historische Abschreibungsquote &lt; 0,5% (kumuliert, über alle Brain Capital-Gesellschaften)</li>
                <li>Erfahrung aus rd. 7.000 Geförderten in aktiver Zahlungsphase</li>
                <li>Älteste Gesellschaften planmäßig und vollständig liquidiert</li>
                <li>Über 20 Jahre Datenbasis für präzisere Einkommensprognosen der Geförderten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem">
      <SecHeader icon="02" title="Das gesellschaftliche Problem – und unsere Antwort" sub="Bildungszugang in Deutschland ist stark vom sozialen Hintergrund abhängig" />
      <div className="sec-body">
        {/* Funnel comparison */}
        <div>
          <div className="sub-title">Bildungstrichter: Kinder von Akademikern vs. Nicht-Akademikern</div>
          <div className="two-col" style={{ alignItems: 'start' }}>
            <div className="card">
              <div className="card-head">Das Problem</div>
              <div className="card-body">
                <ul className="bullet-list">
                  <li>Kinder aus Nicht-Akademiker-Haushalten nehmen signifikant seltener ein Studium auf</li>
                  <li>Studienkosten sind empirisch die größte Hemmschwelle – insbesondere bei Privatunis mit Studiengebühren</li>
                  <li>Klassische Kreditfinanzierung schreckt ab: Schuldenlast und feste Tilgungsverpflichtung ab Studienbeginn</li>
                </ul>
                <div className="highlight-box" style={{ marginTop: '1rem' }}>
                  <strong>→ Bildungsgerechtigkeit und unternehmerische Rendite gehen Hand in Hand</strong>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">Bildungstrichter im Vergleich (von 100 Schülern)</div>
              <div className="card-body" style={{ paddingTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ display: 'inline-block', width: 12, height: 12, background: '#1B3A6B', borderRadius: 2 }} />
                    Kinder von Akademikern
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ display: 'inline-block', width: 12, height: 12, background: '#00AEEF', borderRadius: 2 }} />
                    Kinder von Nicht-Akademikern
                  </span>
                </div>
                {bildungsFunnel.map((row) => (
                  <div key={row.stage} className="funnel-row">
                    <div className="funnel-label">{row.stage}</div>
                    <div className="funnel-bars">
                      <div className="funnel-bar akademiker" style={{ width: `${row.akademiker}%` }}>{row.akademiker}</div>
                      <div className="funnel-bar nicht-akademiker" style={{ width: `${row.nichtAkademiker * 0.6}%` }}>{row.nichtAkademiker}</div>
                    </div>
                  </div>
                ))}
                <p style={{ fontSize: '0.7rem', color: '#888', marginTop: '0.5rem' }}>
                  Quelle: Hochschulbildungsreport 2022 (McKinsey), Brain Capital
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ISA Model */}
        <div>
          <div className="sub-title">Das Income Share Agreement (ISA) – Funktionsweise</div>
          <div className="isa-phases">
            <div className="isa-phase">
              <div className="isa-phase-label">Phase 1: Studienphase</div>
              <ul className="bullet-list">
                <li>Abschluss eines <strong>Fördervertrags</strong> zwischen Gefördertem und 7. KG</li>
                <li>Die Fördergesellschaft zahlt <strong>Studiengebühren</strong> semesterweise direkt an die Hochschule und/oder zahlt <strong>Lebenshaltungskostenbeiträge</strong></li>
                <li>Der Geförderte leistet in dieser Phase <strong>keine Zahlungen</strong></li>
              </ul>
            </div>
            <div className="isa-phase p2">
              <div className="isa-phase-label">Phase 2: Zahlungsphase</div>
              <ul className="bullet-list">
                <li>Beginn nach <strong>erfolgreichem Studienabschluss und Berufseinstieg</strong></li>
                <li>Voraussetzung: Bruttoeinkommen &gt; EUR 30.000 p.a.</li>
                <li>Zahlung: vertraglich vereinbarter <strong>%-Satz des Einkommens</strong></li>
                <li>Laufzeit: i.d.R. <strong>10 Zahlungsjahre innerhalb von 20 Jahren</strong></li>
                <li>Deckelung: 2× inflationsbereinigtes Fördervolumen oder 14% Effektivverzinsung</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div className="isa-not">
              <div style={{ fontWeight: 700, color: '#1B3A6B', marginBottom: '0.5rem', fontSize: '0.82rem' }}>Was ISAs NICHT sind:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem' }}>
                {['Kein Kredit', 'Kein Stipendium', 'Keine feste Tilgungspflicht', 'Keine Rückzahlung im rechtlichen Sinne'].map(t => (
                  <span key={t} style={{ fontSize: '0.8rem', color: '#1B3A6B', fontWeight: 600 }}>✓ {t}</span>
                ))}
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: '#5a6880' }}>
                Zahlungsdisziplin: historische Abschreibungsquote &lt; 0,5% (kumuliert)
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="sub-title">Partnerhochschulen – über 50 renommierte Institutionen</div>
          <div className="card">
            <div className="card-head">Partnerhochschulen</div>
            <div className="partners-grid">
              {partners.map(p => <span key={p} className="partner-tag">{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FondsprofilSection() {
  return (
    <section id="fondsprofil">
      <SecHeader icon="03" title="Fondsprofil & Eckdaten" sub="Die Siebte Brain Capital GmbH & Co. KG – Ein KAGB-konformes Investmentvehikel" />
      <div className="sec-body">
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Gesamtinvestitionsvolumen</div>
            <div className="kpi-value">EUR 12 Mio.</div>
            <div className="kpi-sub">EUR 8 Mio. EK + EUR 4 Mio. FK</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Mindestzeichnung</div>
            <div className="kpi-value">EUR 200.000</div>
            <div className="kpi-sub">Professionelle &amp; semiprofessionelle Anleger</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Laufzeit</div>
            <div className="kpi-value">15 Jahre</div>
            <div className="kpi-sub">ab Zeichnungsschluss + 2×2 Jahre Option</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Management Fee</div>
            <div className="kpi-value">1,8% p.a.</div>
            <div className="kpi-sub">auf Fördervolumen, zzgl. MwSt.</div>
          </div>
        </div>

        <div className="two-col">
          <div className="card">
            <div className="card-head">Rechtliche Struktur</div>
            <table className="data-table">
              <tbody>
                <tr><td>Rechtsform</td><td>GmbH &amp; Co. KG (AIF gemäß KAGB)</td></tr>
                <tr><td>Handelsregister</td><td>HRA 23444, Amtsgericht Montabaur</td></tr>
                <tr><td>KVG</td><td>Brain Capital Asset Management GmbH (BaFin-registriert, §§ 2 Abs. 4, 44 KAGB)</td></tr>
                <tr><td>Komplementärin</td><td>Brain Capital Management GmbH, Vallendar</td></tr>
                <tr><td>Anlegerkreis</td><td>Professionelle &amp; semiprofessionelle Anleger (§ 1 Abs. 19 Nr. 32/33 KAGB)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-head">Investitionsparameter</div>
            <table className="data-table">
              <tbody>
                <tr><td>Eigenkapital (Zeichnungskapital)</td><td>EUR 8 Mio. (EUR 4,5 Mio. in 2026, EUR 3,5 Mio. in 2027)</td></tr>
                <tr><td>Fremdkapital</td><td>EUR 4 Mio. Bank-Darlehen (geplant)</td></tr>
                <tr><td>Maximaler Leverage</td><td>Bis zur Höhe des Zeichnungskapitals (max. EUR 8 Mio.)</td></tr>
                <tr><td>Fördervertragsvolumen</td><td>ca. EUR 11,2 Mio.</td></tr>
                <tr><td>Anlageperiode</td><td>Max. 5 Jahre ab Zeichnungsschluss (geplant bis 2027)</td></tr>
                <tr><td>Verlängerungsoption</td><td>2 × bis zu 2 Jahre (durch Beirat)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function RenditeSection() {
  const fmtEUR = (v) => {
    if (v === 0) return '0';
    const abs = Math.abs(v);
    const sign = v < 0 ? '–' : '';
    if (abs >= 1000000) return `${sign}${(abs / 1000000).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Mio.`;
    return `${sign}${abs.toLocaleString('de-DE')}`;
  };

  const tableRows = [
    { year: '2026', e: -4500000, p: -4500000, neg: true },
    { year: '2027', e: -3500000, p: -3500000, neg: true },
    { year: '2028–2031', e: 0, p: 0, zero: true },
    { year: '2032', e: 646128, p: 16593 },
    { year: '2033', e: 908844, p: 700000 },
    { year: '2034', e: 1100000, p: 1100000 },
    { year: '2035', e: 1363872, p: 815541 },
    { year: '2036', e: 1601485, p: 850000 },
    { year: '2037', e: 1614673, p: 996926 },
    { year: '2038', e: 1640816, p: 1276568 },
    { year: '2039', e: 1622425, p: 1252603 },
    { year: '2040', e: 1492079, p: 1154333 },
    { year: '2041', e: 1158185, p: 1176853 },
    { year: '2042', e: 756805, p: 816580 },
    { year: '2043', e: 154596, p: 514894 },
    { year: '2044', e: 463936, p: 752808 },
  ];

  const chartData = cashflows.map(d => ({
    year: d.year,
    'Erwartet': d.erwartet / 1000,
    'Pessimistisch': d.pessimistisch / 1000,
  }));

  return (
    <section id="rendite">
      <SecHeader icon="04" title="Rendite- und Cashflow-Profil" sub="Prognostizierter IRR von rd. 5,7% – Ausschüttungen sind ab 2032 vorgesehen" />
      <div className="sec-body">
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">IRR – Erwartet</div>
            <div className="kpi-value">5,7% p.a.</div>
            <div className="kpi-sub">Erwartetes Szenario</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">IRR – Pessimistisch</div>
            <div className="kpi-value">3,1% p.a.</div>
            <div className="kpi-sub">Pessimistisches Szenario</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">∑ Ausschüttungen erwartet</div>
            <div className="kpi-value">EUR 6,52 Mio.</div>
            <div className="kpi-sub">auf EUR 8 Mio. Zeichnungskapital</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Geförderte Studierende</div>
            <div className="kpi-value">ca. 400</div>
            <div className="kpi-sub">ø Fördervolumen ca. EUR 30.000</div>
          </div>
        </div>

        <div className="two-col" style={{ alignItems: 'start' }}>
          {/* Chart */}
          <div className="card" style={{ gridColumn: '1 / 3' }}>
            <div className="card-head">Cashflow-Profil (Investorenperspektive, in TEUR, Prognose)</div>
            <div style={{ padding: '1rem' }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF2F7" />
                  <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `${v > 0 ? '+' : ''}${v}`} label={{ value: 'TEUR', angle: -90, position: 'insideLeft', fontSize: 11 }} />
                  <Tooltip formatter={(v) => [`${v.toLocaleString('de-DE')} TEUR`, '']} />
                  <Legend iconSize={10} wrapperStyle={{ fontSize: '11px' }} />
                  <ReferenceLine y={0} stroke="#aaa" strokeWidth={1} />
                  <Bar dataKey="Erwartet" fill="#1B3A6B" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Pessimistisch" fill="#00AEEF" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Cashflow table + notes */}
        <div className="two-col" style={{ alignItems: 'start' }}>
          <div className="card">
            <div className="card-head">Cashflow-Übersicht (EUR, Prognose)</div>
            <table className="cf-table">
              <thead>
                <tr>
                  <th>Jahr</th>
                  <th>Erwartet</th>
                  <th>Pessimistisch</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(r => (
                  <tr key={r.year} className={r.neg ? 'neg' : r.zero ? 'zero' : ''}>
                    <td>{r.year}</td>
                    <td>{fmtEUR(r.e)}</td>
                    <td>{fmtEUR(r.p)}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>∑ Ausschüttungen</td>
                  <td>6.523.844</td>
                  <td>3.423.700</td>
                </tr>
                <tr className="irr">
                  <td>IRR</td>
                  <td>5,7%</td>
                  <td>3,1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <div className="card-head">Kapitalstruktur & Verwendung</div>
              <div className="card-body">
                <ul className="bullet-list">
                  <li>Geplante Einzahlungen durch Investoren: EUR 8 Mio. (EUR 4,5 Mio. in 2026, EUR 3,5 Mio. in 2027)</li>
                  <li>Zusätzlich geplant: EUR 4 Mio. Bank-Darlehen – grundsätzlich bis zur Höhe der geplanten Einzahlungen möglich</li>
                  <li>Geplantes Gesamtinvestitionsvolumen: EUR 12 Mio.</li>
                  <li>Ca. 400 Studierende mit ø Fördervolumen von rd. EUR 30.000 → hohe Diversifikation</li>
                  <li>Basierend auf Erfahrung zu Einkommen und Ausfällen: Rendite rd. 5,7% p.a. aus Anlegersicht</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-head">Hinweise zu den Planzahlen</div>
              <div className="card-body">
                <ul className="bullet-list">
                  <li>Planzahlen basieren auf dem internen Geschäftsplan</li>
                  <li>Ausschüttungen sind variabel und hängen von den einkommensabhängigen Zahlungen der Geförderten ab</li>
                  <li>Vergangenheitswerte anderer Brain Capital-Gesellschaften sind kein verlässlicher Indikator für zukünftige Ergebnisse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RisikoprofilSection() {
  return (
    <section id="risikoprofil">
      <SecHeader icon="05" title="Risikoprofil & Portfoliocharakteristika" sub="Geringe Volatilität, kein Kapitalmarktbezug, natürlicher Inflationsschutz" />
      <div className="sec-body">
        <div className="two-col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <div className="card-head">Geringe Volatilität</div>
              <div className="card-body">
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#1a2236' }}>
                  Die Zahlungen der Geförderten sind einkommensabhängig und über viele Personen, Hochschulen und Jahrgänge gestreut. Einkommensausfälle Einzelner sollen durch überdurchschnittliche Einkommen anderer kompensiert werden.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-head">Geringe Korrelation zum Kapitalmarkt</div>
              <div className="card-body">
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#1a2236' }}>
                  Das Portfolio aus Förderverträgen entwickelt sich voraussichtlich weitgehend unabhängig von Zinsniveau und Aktienmärkten. Der Streuungs-Effekt und die eingebaute Flexibilität des ISA-Modells (Zahlungspause statt Zahlungsausfall) dämpfen Konjunkturschwankungen erheblich. Das Portfolio eignet sich daher grundsätzlich zur Diversifikation klassischer Kapitalmarktportfolios.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <div className="card-head">Natürlicher Inflationsschutz</div>
              <div className="card-body">
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#1a2236' }}>
                  Da die Zahlungen der Geförderten an das nominale Einkommen gekoppelt sind, steigen die Einnahmen der Gesellschaft tendenziell mit dem allgemeinen Einkommensniveau.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-head">Weiterentwickelte Verträge &amp; Datenverfügbarkeit</div>
              <div className="card-body">
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#1a2236' }}>
                  Brain Capital verfügt mittlerweile über 20 Jahre Erfahrung und deutlich mehr Daten zu den späteren Einkommen der Geförderten. Dies ermöglicht eine höhere Prognosegenauigkeit als in den ersten Gesellschaften. Die Förderverträge haben sich weiter entwickelt und wurden stetig verbessert.
                </p>
              </div>
            </div>
            <div className="highlight-box">
              <strong>Bewährtes Brain Capital-Modell:</strong><br />
              Historische Abschreibungsquote &lt; 0,5% · 7.000 Geförderte in aktiver Zahlungsphase · Älteste Gesellschaften planmäßig und vollständig liquidiert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section id="governance">
      <SecHeader icon="06" title="Regulatorisches & Governance" sub="Institutionelle Qualität – auch für semi-professionelle Personen" />
      <div className="sec-body">
        <div className="three-col">
          <div className="card gov-card">
            <div className="gov-title">Regulatorischer Rahmen</div>
            <ul className="bullet-list">
              <li>Alternativer Investmentfonds (AIF) gemäß § 1 Abs. 13 KAGB</li>
              <li>Extern verwaltet durch die Brain Capital Asset Management GmbH (registrierte KVG, §§ 2 Abs. 4, 44 KAGB)</li>
              <li>Vertragswerk entwickelt durch Osborne Clarke und EY</li>
              <li>Jahresabschluss wird durch einen unabhängigen Wirtschaftsprüfer geprüft</li>
            </ul>
          </div>
          <div className="card gov-card">
            <div className="gov-title">Governance-Struktur</div>
            <ul className="bullet-list">
              <li>Geschäftsführende Kommanditistin: Brain Capital Asset Management GmbH (alle Anlageentscheidungen)</li>
              <li>Komplementärin: Brain Capital Management GmbH (persönlich haftende Gesellschafterin)</li>
              <li>Beirat: Gewähltes Gremium aus dem Investorenkreis; Zustimmungspflicht bei außergewöhnlichen Maßnahmen</li>
              <li>Gesellschafterversammlung: Jährlich; Feststellung Jahresabschluss, Entlastung, Wahl Abschlussprüfer</li>
            </ul>
          </div>
          <div className="card gov-card">
            <div className="gov-title">Investorenrechte</div>
            <ul className="bullet-list">
              <li>Umfangreiche Einsichts- und Prüfrechte (inkl. § 166 HGB)</li>
              <li>Jährlicher Jahresbericht mit geprüftem Jahresabschluss</li>
              <li>Ausschluss der Geschäftsführenden Kommanditistin bei Management-Verstoß möglich (&gt; 50% Mehrheit)</li>
              <li>Streitbeilegung: Schiedsverfahren nach DIS-Schiedsgerichtsordnung</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RisikenSection() {
  return (
    <section id="risiken">
      <SecHeader icon="07" title="Wesentliche Risiken der Beteiligung" sub="Unternehmerisches Investment: Chancen und Risiken gehen Hand in Hand" />
      <div className="sec-body">
        <div className="disclaimer">
          Eine Beteiligung an der Siebten Brain Capital GmbH &amp; Co. KG ist ein unternehmerisches Investment. Nachfolgend werden wesentliche Risiken dargestellt. Die Aufzählung ist nicht abschließend. Interessierten Anlegern wird empfohlen, den vollständigen Gesellschaftsvertrag sorgfältig zu lesen und individuellen Rat bei einem Rechtsanwalt und einem Steuerberater einzuholen.
        </div>
        <div className="two-col">
          {risks.map(r => (
            <div key={r.title} className="card risk-card">
              <div className="risk-title">{r.title}</div>
              <div className="risk-text">{r.text}</div>
            </div>
          ))}
        </div>
        <div className="disclaimer">
          <strong>Hinweis zu den Prognosezahlen:</strong> Die dargestellten Szenarien (IRR 5,7% Erwartetes Szenario / 3,1% Pessimistisches Szenario) basieren auf internen Planungsannahmen. Sie stellen keine Garantie dar. Tatsächliche Ergebnisse können wesentlich von den Prognosen abweichen.
        </div>
      </div>
    </section>
  );
}

function KontaktSection() {
  return (
    <section id="kontakt">
      <SecHeader icon="08" title="Kontakt" sub="Ihre Ansprechpartner bei Brain Capital" />
      <div className="sec-body">
        <div className="two-col">
          <div className="card contact-card">
            <div className="contact-name">Dr. Marco Vietor</div>
            <div className="contact-org">Brain Capital Asset Management GmbH</div>
            <div className="contact-item"><span className="contact-icon">✉</span> marco.vietor@braincapital.de</div>
            <div className="contact-item"><span className="contact-icon">☎</span> +49 2602 910-3435</div>
          </div>
          <div className="card contact-card">
            <div className="contact-name">Markus Hüren</div>
            <div className="contact-org">Brain Capital Asset Management GmbH</div>
            <div className="contact-item"><span className="contact-icon">✉</span> markus.hueren@braincapital.de</div>
            <div className="contact-item"><span className="contact-icon">☎</span> +49 2602 910-3435</div>
          </div>
        </div>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#1B3A6B', marginBottom: '0.3rem' }}>Brain Capital Asset Management GmbH</div>
          <div style={{ color: '#5a6880', fontSize: '0.85rem' }}>Bahnallee 11-13 · D-56410 Montabaur</div>
        </div>
        <div className="disclaimer">
          Diese Angebotsunterlage richtet sich ausschließlich an professionelle Anleger im Sinne des § 1 Abs. 19 Nr. 32 KAGB und semiprofessionelle Anleger im Sinne des § 1 Abs. 19 Nr. 33 KAGB. Sie ist ausdrücklich nicht für Privatanleger bestimmt. Die Informationen sind vertraulich und ausschließlich für den adressierten Empfänger bestimmt.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>Brain Capital Asset Management GmbH</strong> · Bahnallee 11-13 · 56410 Montabaur · Diese Angebotsunterlage ist vertraulich und ausschließlich für adressierte Empfänger bestimmt.
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Cover />
      <UeberSection />
      <ProblemSection />
      <FondsprofilSection />
      <RenditeSection />
      <RisikoprofilSection />
      <GovernanceSection />
      <RisikenSection />
      <KontaktSection />
      <Footer />
    </>
  );
}
