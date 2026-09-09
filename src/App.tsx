import clockImage from "./assets/github_clock.png";

const emailAddress = "giasupe.com@gmail.com";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#top">giasupe</a>
          <nav className="site-nav" aria-label="メインナビゲーション">
            <a href="#works">works</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <p className="eyebrow">PORTFOLIO</p>
            <h1 id="hero-title">giasupe</h1>
            <p className="hero__lead">
              東京在住、2009年生。HTML・CSS、JavaScriptを学びながら、
              Webサイトやアプリを制作しています。
            </p>
          </div>
        </section>

        <section className="section" id="works" aria-labelledby="works-title">
          <div className="container">
            <p className="eyebrow">01 / WORKS</p>
            <h2 id="works-title">時計アプリ</h2>
            <a
              className="work-image-link"
              href="https://giasupe.github.io/clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={clockImage} alt="時計アプリのスクリーンショット" loading="lazy" />
            </a>
            <p className="work-description">
              一日の割合と現在時刻を表示するアプリです。
              Electronへの対応を見据え、カーソルに時刻を表示する機能を実装しています。
            </p>
            <a
              className="text-link"
              href="https://giasupe.github.io/clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <p className="eyebrow">02 / CONTACT</p>
            <h2 id="contact-title">contact</h2>
            <div className="contact-links">
              <a href="https://x.com/_gspe" target="_blank" rel="noopener noreferrer">
                X (Twitter)
              </a>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} giasupe</div>
      </footer>
    </>
  );
}

export default App;
