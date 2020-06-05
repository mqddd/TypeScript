export class ResistorColor {
  private colors: string[];
  private firstParm: number;
  private secondParm: number;
  private primaryColors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  constructor(colors: string[]) {
    this.colors = colors;
  }
  public value(): number {
    this.primaryColors.forEach(element => {
      if (this.colors[0] === element) {
        firstParm = primaryColors.indexOf(element);
      }
      if (this.colors[1] === element) {
        secondParm = primaryColors.indexOf(element);
      }
    });
      return `${firstParm}${secondParm}`;
  }
}
