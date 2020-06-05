export class ResistorColor {
  private color: string[];
  constructor(color: string[]) {
    this.color = color;
  }
  value = (): number => {
    let colors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    let firstParm: number;
    let secondParm: number;
    for (let index = 0; index < colors.length; index++) {
      const element = colors[index];
      if (this.color[0] === element) {
        firstParm = index;
      }
      if (this.color[1] === element) {
        secondParm = index;
      }
    }
      return `${firstParm}${secondParm}`;
  };
}
