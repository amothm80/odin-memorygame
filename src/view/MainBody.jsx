import './MainBody.css';
export default function MainBody({ game, setScore, setHiScore }) {
  return (
    <div className="main-body">
      <h2>Get points by clicking on an image no more than once.</h2>
      <div className="photo-list">
        {game.getRandomPhotos().map((el) => {
          return (
            <div key={el.index} className="photo">
              <img
                id={el.index}
                src={el.src}
                onClick={(e) => {
                  game.choosePhoto(e.target.id);
                  setScore(game.getScore());
                  setHiScore(game.getHiScore());
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
