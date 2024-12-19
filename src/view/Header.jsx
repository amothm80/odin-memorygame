import './Header.css';
export default function Header({ score, hiScore }) {
  return (
    <div className="header">
      <div className="title">
        <h1>Welcome To The Memory Game</h1>
      </div>
      <div className="Scores">
        <h3>Score: {score}</h3>
        <h3>High Score: {hiScore}</h3>
      </div>
    </div>
  );
}
