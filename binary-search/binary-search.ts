export default class BinarySearch {
    private _index: number;
    private _array: number[];
    constructor(array: number[]){
        this._index = -1;
        this._array = array;
    }

    public indexOf(num: number): number{
        return this.binarySearch(num, 0, this._array.length);
    }

    private binarySearch(num: number, low: number, high: number): number{
        if (low > high) {
            return -1;
        }
        const middle: number = Math.floor((high + low) / 2);
        if (num === this._array[middle]) {
            return middle;
        } else if (num > this._array[middle]) {
            this._index = this.binarySearch(num, middle + 1, high);
        } else if (num < this._array[middle]) {
            this._index = this.binarySearch(num, low, middle - 1);
        }
        return this._index;
    }

    private isSorted(arr: number[]): boolean{
        for(let i: number = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    public get array(): any[] | undefined{
        return (this.isSorted(this._array)) ? [] : undefined;
    }

}
