export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }
  value = (): number => {
    let firstParm: number;
    let secondParm: number;
    for (let index = 0; index < 2; index++) {
      if (index == 0) {
        if (this.colors[0] == "black") {
          firstParm = 0;
        }
        if (this.colors[0] == "brown") {
          firstParm = 1;
        }
        if (this.colors[0] == "red") {
          firstParm = 2;
        }
        if (this.colors[0] == "orange") {
          firstParm = 3;
        }
        if (this.colors[0] == "yellow") {
          firstParm = 4;
        }
        if (this.colors[0] == "green") {
          firstParm = 5;
        }
        if (this.colors[0] == "blue") {
          firstParm = 6;
        }
        if (this.colors[0] == "violet") {
          firstParm = 7;
        }
        if (this.colors[0] == "grey") {
          firstParm = 8;
        }
        if (this.colors[0] == "white") {
          firstParm = 9;
        }
      } else {
        if (this.colors[1] == "black") {
          secondParm = 0;
        }
        if (this.colors[1] == "brown") {
          secondParm = 1;
        }
        if (this.colors[1] == "red") {
          secondParm = 2;
        }
        if (this.colors[1] == "orange") {
          secondParm = 3;
        }
        if (this.colors[1] == "yellow") {
          secondParm = 4;
        }
        if (this.colors[1] == "green") {
          secondParm = 5;
        }
        if (this.colors[1] == "blue") {
          secondParm = 6;
        }
        if (this.colors[1] == "violet") {
          secondParm = 7;
        }
        if (this.colors[1] == "grey") {
          secondParm = 8;
        }
        if (this.colors[1] == "white") {
          secondParm = 9;
        }
      }
      return `${firstParm}${secondParm}`;
  };
}
