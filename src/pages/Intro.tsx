import "./Intro.css";

function Intro() {
  return (
    <div className="Intro">
      <header className="Intro-container">
        <h2>이상과 상상, 그 이상</h2>
        <p className="Intro-desc">흥미로운것들을 상상해내고 만들어봅니다.</p>
      </header>
      <div className="Intro-footer-bg">
        <footer className="Intro-footer">↓ 아래로 내려서 진행</footer>
      </div>
    </div>
  );
}

export default Intro;
