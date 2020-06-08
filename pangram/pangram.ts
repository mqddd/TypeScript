class Pangram {
  private sentence: string;

  constructor(sentence: string) {
      this.sentence = sentence;
  }

  public isPangram(): boolean {
    return checkIfPangram();
  }

  private checkIfPangram(): boolean {
    let size: number = this.sentence.length;
    let lowerSentence: string = this.sentence.toLowerCase();
    let letters: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count: number = 0;
    this.sentence.forEach((char: string) => {
      letters.forEach((lettersChar: string, index: number) => {
        if (lettersChar === char){
          count++;
          letters.splice(index, 1);
        }
      });
    });
    if (count === 26)
      return true;
    else
      return false;
  }
}
