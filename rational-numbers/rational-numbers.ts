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
        const min: number = Math.abs(Math.min(a, b));
        let gcb: number = 1;
        for (let i = 2; i <= min; i++) {
            if (a % i === 0 && b % i === 0) {
                gcb = i;
            }
        }
        if (a === 0) {
            return new Rational(0, 1);
        } else if ((a < 0 && b < 0) || (a > 0 && b < 0)) {
            return new Rational((-1) * (a / gcb), (-1) * (b / gcb));
        } else {
            return new Rational(a / gcb, b / gcb);
        }
    }

    public add(r: Rational): Rational{
        const bottom: number = this.b * r.b;
        const top: number = (this.a * r.b) + (this.b * r.a);
        return this.simpleRational(new Rational(top, bottom));
    }

    public sub(r: Rational): Rational{
        const bottom: number = this.b * r.b;
        const top: number = (this.a * r.b) - (this.b * r.a);
        return this.simpleRational(new Rational(top, bottom));
    }

    public mul(r: Rational): Rational{
        const top: number = this.a * r.a;
        const bottom: number = this.b * r.b;
        return this.simpleRational(new Rational(top, bottom));
    }

    public div(r: Rational): Rational{
        const top: number = this.a * r.b;
        const bottom: number = this.b * r.a;
        return this.simpleRational(new Rational(top, bottom));
    }

    public abs(): Rational{
        if (this.a <= 0) {
            return this.simpleRational(new Rational((-1) * this.a, this.b));
        } else {
            return this;
        }
    }

    public exprational(num: number): Rational{
        const top: number = Math.pow(this.a, num);
        const bottom: number = Math.pow(this.b, num);
        return this.simpleRational(new Rational(top, bottom));
    }

    public expreal(num: number): number{
        const p: number = this.a / this.b;
        return Math.pow(num, p);
    }
    
    public reduce(): Rational{
        return this.simpleRational(new Rational(this.a, this.b));
    }
}

export default Rational;