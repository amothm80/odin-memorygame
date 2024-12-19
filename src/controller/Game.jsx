function generateUniqueRandomNumbers(size, min, max) {
  if (max - min + 1 < size) {
    throw new Error('Range too small to generate unique numbers.');
  }

  const numbers = new Set();
  while (numbers.size < size) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
}

export default class MemoryGame {
  constructor() {
    this.allPhotos = [];
    this.chosenPhotos = new Set();
    this.score = 0;
    this.hiScore = 0;
  }

  setPhotos(photos) {
    this.allPhotos = photos;
  }

  getRandomPhotos() {
    const randomPhotos = [];
    const randomPhotoIndices = generateUniqueRandomNumbers(15, 0, 79);
    randomPhotoIndices.map((el) => {
      randomPhotos.push({ index: el, src: this.allPhotos[el] });
    });
    return randomPhotos;
  }

  getScore() {
    return this.score;
  }
  getHiScore() {
    return this.hiScore;
  }

  choosePhoto(num) {
    if (this.chosenPhotos.has(num)) {
      if (this.score > this.hiScore) {
        this.hiScore = this.score;
      }
      this.score = 0;
      this.chosenPhotos.clear();
    } else {
      this.chosenPhotos.add(num);
      this.score += 1;
    }
  }
}
