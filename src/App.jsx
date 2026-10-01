import "./App.css";

const features = [
  { icon: "📝", title: "Ajoutez vos mots", text: "Notez chaque nouveau mot avec sa traduction en quelques secondes." },
  { icon: "🃏", title: "Révisez", text: "Retournez des cartes et indiquez si vous connaissiez la réponse." },
  { icon: "📈", title: "Progressez", text: "Les mots difficiles reviennent plus souvent, pour mieux les retenir." },
];

function App() {
  return (
    <>
      <header className="nav">
        <span className="brand">📚 Vocabulary Tracker</span>
        <nav>
          <a href="#features">Fonctionnalités</a>
          <a href="#start">Commencer</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Retenez chaque mot, <span>un jour à la fois</span></h1>
          <p>
            Un carnet de vocabulaire simple pour apprendre une langue : ajoutez,
            révisez, progressez.
          </p>
          <a className="cta" href="#start">Commencer</a>
        </section>

        <section id="features" className="features">
          {features.map((f) => (
            <article key={f.title}>
              <div className="icon">{f.icon}</div>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </article>
          ))}
        </section>

        <section id="start" className="start">
          <h2>Prêt à apprendre ?</h2>
          <p>L'application arrive bientôt.</p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Vocabulary Tracker</footer>
    </>
  );
}

export default App;
