class Rational{
    private _a: number;
    private _b: number;
    constructor(a: number, b: number){
        this._a = a;
        this._b = b;
    }

    public get a(){
        return this._a;
    }

    public get b(){
        return this._b;
    }

    private simpleRational(r: Rational): Rational{
        const a: number = r.a;
        const b: number = r.b;
        const min: number = Math.min(a, b);
        let gcb: number = 1;
        for (let i = 2; i <= min; i++) {
            if (a % i === 0 && b % i === 0) {
                gcb = i;
            }
        }
        return new Rational(a / gcb, b / gcb);
    }

    public add(r: Rational): Rational{
        const bottom: number = this.b * r.b;
        const top: number = (this.a * r.b) + (this.b * r.a);
        return this.simpleRational(new Rational(top, bottom));
    }
    
}

export default Rational;