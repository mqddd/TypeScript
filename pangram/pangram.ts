class Pangram {
  private sentence: string;

  constructor(sentence: string) {
      this.sentence = sentence;
  }

  isPangram = (): boolean => {
    let size: number = this.sentence.length;
    let lowerSentence: string = this.sentence.toLowerCase();
    let letters: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count: number = 0;
    for (let index = 0; index < size; index++) {
      const char = lowerSentence[index];
      for (let index = 0; index < 26; index++) {
        const element = letters[index];
        if (element == char) {
          count++;
          letters.splice(index, 1);
        }
      }
    }
    if (count == 26) {
      return true;
    }
    return false;
  }
}
