export class ResistorColor {
  private colors: string[];
  private firstParm: number;
  private secondParm: number;
  private primaryColors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  constructor(colors: string[]) {
    this.colors = colors;
  }
  public value(): number {
    this.primaryColors.forEach((color: string, index: number) => {
      if (this.colors[0] === color) {
        firstParm = index;
      }
      if (this.colors[1] === color) {
        secondParm = index;
      }
    });
      return `${firstParm}${secondParm}`;
  }
}
