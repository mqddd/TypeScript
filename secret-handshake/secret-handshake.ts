class HandShake{
    private _binary: number[];
    constructor(decimal: number){
        this._binary = [0, 0, 0, 0, 0];
        this.toBinary(decimal);
    }

    public commands(): string[]{
        let handShake: string[] = [];
        const commands: string[] = ["wink", "double blink", "close your eyes", "jump"];
        this._binary.forEach((bit: number, i: number) => {
            if (bit === 1) {
                if (i != 4) {
                    handShake.push(commands[i]);   
                }
            }
        });
        if (this._binary[4] === 1) {
            handShake.reverse();
        }
        return handShake;
    }

    private toBinary(num: number){
        let m: number;
        let d: number = num;
        let counter: number = 0;
        do {
            m = d % 2;
            d = Math.floor(d / 2);
            this._binary[counter] = m;
            counter++;
        } while (d >= 1); 
    }
}

export default HandShake;