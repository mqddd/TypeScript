/* let a = "1 3 5\n2 4 6";
let b: string[] = a.split('\n');
let c: number[][] = [[]];
b.forEach((element, index) => {
    c[index] = element.split(' ').map(tooo);
}); 
let d: number[][] = [[]];
for (let i = 0; i < 3; i++) {
    d[i] = new Array(2);
    for (let index = 0; index < 2; index++) {
        d[i][index] = c[index][i];
    }
}
c.forEach((row: number[], index: number) => {
    row.forEach((element: number, i: number) => {
        d[i][index] = element;
    });
});
function tooo(num: string): number{
    return +num;
}
console.log(c[0].length); */



class Matrix {
        private _rows: number[][];
        private _columns: number[][];
        private matrix: string[];
        constructor(matrix: string) {
            this.matrix = matrix.split('\n');
            this._rows = this.makeRows();
            this._columns = this.makeColumns();
        }

        private makeRows(): number[][] {
            let tempRows: number[][] = [[]];
            this.matrix.forEach((row: string, index: number) => {
                tempRows[index] = row.split(' ').map(this.parseStringToNumber);
            });
            return tempRows;
        }

        private makeColumns(): number[][] {
            let tempColumns: number[][] = [];
            let tempRows: number[][] = this.makeRows();
            for (let index = 0; index < tempRows[0].length; index++) {
                tempColumns[index] = new Array(tempRows.length);
                for (let i = 0; i < tempRows.length; i++) {
                    tempColumns[index][i] = this._rows[i][index];
                }
            }
            return tempColumns;
        }

        private parseStringToNumber(str: string):number {
            return +str;            
        }

        public get rows(): number[][] {
            return this._rows;
        }

        public get columns(): number[][] {
            return this._columns;
        }
}

export default Matrix
