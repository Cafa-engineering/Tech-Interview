function Header() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Batman Vs Joker</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        Smile, because it confuses people. Smile, because it’s 
        easier than explaining what is killing you inside.
        What doesn’t kill you ......
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Header;
