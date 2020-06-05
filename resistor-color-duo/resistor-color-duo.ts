export class ResistorColor {
  private colors: string[];
  private primaryColors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  constructor(colors: string[]) {
    this.colors = colors;
  }
  public value(): string {
    let firstParm: number;
    let secondParm: number;
    let a: string;
    let b: string;
    [a, b] = this.colors;
    this.primaryColors.forEach((color: string, index: number) => {
      if (a === color) {
        firstParm = index;
      }
      if (b === color) {
        secondParm = index;
      }
    });
      return `${firstParm}${secondParm}`;
  }
}
