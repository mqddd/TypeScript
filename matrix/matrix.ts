let a = "1 2 3\n2 5 6";
let b = a.split('\n');
console.log(b[1]);



class Matrix {
        private rows: string[];
        private columns: string[];
        private matrix: string[];
        constructor(matrix: string) {
            this.matrix = matrix.split('');
        }
        private makeRows() {
            this.rows = this.matrix;
        }
        private makeColumns() {
            
        }
}

export default Matrix
