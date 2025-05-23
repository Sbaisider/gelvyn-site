
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gelvyn - Rasoio Criogenico</title>
        <meta name="description" content="Il primo rasoio criogenico virale in Italia. Raffredda. Rade. Rivoluziona." />
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#eaf6fa", color: "#333" }}>
        <h1 style={{ fontSize: "3rem", color: "#1395d4", marginBottom: "1rem" }}>Gelvyn</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Il primo rasoio criogenico virale in Italia</h2>
        <img src="/gelvyn-mockup.jpg" alt="Gelvyn Ice Razor" style={{ maxWidth: "300px", borderRadius: "10px" }} />
        <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
          Gelvyn è il rasoio che rivoluziona la tua skincare: effetto ghiaccio immediato, pelle tonica, zero rossori. 
        </p>
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "2rem auto" }}>
          <li>❄️ Riduce i pori con il freddo istantaneo</li>
          <li>💧 Favorisce una rasatura precisa senza irritazioni</li>
          <li>🧊 Si può raffreddare in freezer e riutilizzare ogni giorno</li>
        </ul>
        <a href="https://www.paypal.com/paypalme/gelvynshop" target="_blank" style={{ display: "inline-block", margin: "2rem auto", padding: "1rem 2rem", backgroundColor: "#0070f3", color: "#fff", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}>
          Acquista ora
        </a>
        <section style={{ marginTop: "3rem" }}>
          <h3>Domande frequenti</h3>
          <p><strong>Quanto dura il freddo?</strong><br />Fino a 15 minuti dopo essere stato raffreddato.</p>
          <p><strong>È adatto per tutti i tipi di pelle?</strong><br />Sì, anche per pelli sensibili.</p>
          <p><strong>Quanto tempo ci mette ad arrivare?</strong><br />2-4 giorni lavorativi in tutta Italia.</p>
        </section>
        <section style={{ marginTop: "3rem" }}>
          <h3>Iscriviti per novità e offerte</h3>
          <form>
            <input type="email" placeholder="La tua email" style={{ padding: "0.5rem", borderRadius: "5px", width: "250px", marginRight: "1rem" }} />
            <button type="submit" style={{ padding: "0.5rem 1rem", borderRadius: "5px", backgroundColor: "#1395d4", color: "#fff", border: "none" }}>Iscriviti</button>
          </form>
        </section>
      </main>
    </div>
  );
}
