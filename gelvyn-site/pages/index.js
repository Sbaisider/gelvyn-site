
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gelvyn</title>
        <meta name="description" content="Il rasoio criogenico virale in Italia. Raffredda. Rade. Rivoluziona." />
      </Head>
      <main style={{ padding: "2rem", textAlign: "center", background: "#f0f6fa" }}>
        <h1 style={{ fontSize: "3rem", color: "#3cb6e4" }}>Benvenuto su Gelvyn</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Il primo rasoio criogenico virale in Italia. Raffredda. Rade. Rivoluziona.
        </p>
        <a href="https://www.paypal.com/paypalme/gelvynshop" target="_blank" style={{ display: "inline-block", marginTop: "2rem", padding: "1rem 2rem", background: "#0070f3", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
          Acquista ora
        </a>
      </main>
    </div>
  );
}
