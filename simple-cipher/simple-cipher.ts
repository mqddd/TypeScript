class SimpleCipher {
    private _key: string;
    private charCodeA: number = 'a'.charCodeAt(0);
    constructor(key?: string){
        if (key !== undefined) {
            this.isKeyValid(key);
            this._key = key;
        } else {
            this._key = this.makeValidKey();
        }
    }

    public get key(): string{
        return this._key;
    }

    public encode(s: string): string {
        return s
            .split('')
            .map((letter, index) =>
                (this.normalize(letter.charCodeAt(0))
                + this.normalize(this.key.charCodeAt(index % this.key.length))) % 26 + this.charCodeA )
            .map((charcode) => String.fromCharCode(charcode))
            .join('');
    }

    public decode(s: string): string {
        return s
        .split('')
        .map((letter, index) => {
            const encoded = this.normalize(letter.charCodeAt(0)) /* ? */
            const key = this.normalize(this.key.charCodeAt(index % this.key.length)) /* ? */
            const decoded = encoded - key >= 0 ? encoded - key : 26 + encoded - key/* ? */

            return this.charCodeA + decoded
        })
        .map((charcode, index) => {
            index // ?
            charcode // ?
            return String.fromCharCode(charcode)
        })
        .join('');
    }

    private normalize(code: number): number{
        return code - this.charCodeA;
    }

    private isKeyValid(key: string): void{
        if (key.length === 0 || ! (/^[a-z]*$/g.test(key))) {
            throw new Error("Key is not valid!");
        }
    }

    private makeValidKey(): string{
        return Array(100)
        .fill('')
        .map(() =>
            String.fromCharCode(this.charCodeA + Math.floor(Math.random() * 26))
        )
        .join('');
    }
}

export default SimpleCipher;
