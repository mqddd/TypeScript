class Clock{
    private _hour: string;
    private _minute: string;


    constructor(hour: number, minute: number = 0){
        const realHour: number = hour % 24;
        const realMin: number = this.realMinute(minute);
        const addedHr: number = this.addedHour(minute);
        this._hour = this.makeString(this.makeHourPos((realHour + addedHr) % 24));
        this._minute = this.makeString(realMin);
    }

    public plus(minute: number): string{
        const plusMin: number = Number.parseInt(this._minute) + minute;
        const finalMin: number = this.realMinute(plusMin);
        const addedHr: number = this.addedHour(plusMin);
        const plusHr: number = Number.parseInt(this._hour) + addedHr;
        const finalHr: number = this.makeHourPos(plusHr % 24);
        return this.makeString(finalHr) + ":" + this.makeString(finalMin); 
    }

    public minus(minute: number): string{
        const minusMin: number = Number.parseInt(this._minute) - minute;
        const finalMin: number = this.realMinute(minusMin);
        const addedHr: number = this.addedHour(minute);
        let minusHr: number = Number.parseInt(this._hour) - addedHr;
        if ((Number.parseInt(this._minute) - finalMin) < 0) {
            minusHr -= 1;
        }
        const finalHr: number = this.makeHourPos(minusHr % 24);
        return this.makeString(finalHr) + ":" + this.makeString(finalMin); 
    }

    public equals(clock: Clock): boolean{
        return (clock._hour === this._hour && clock._minute === this._minute);
    }

    public toString(): string{
        return this._hour + ":" + this._minute;
    }

    private makeString(num: number): string{
        if (num >= 10) {
            return num.toString();
        } else {
            return "0" + num.toString();
        }
    }

    private realMinute(minute: number): number{
        if (minute >= 0) {
            return ((minute) % 60);    
        } else {
            return ((minute) % 60) + 60;
        }
    }

    private addedHour(minute: number): number{
        if (minute >= 0) {
            return (Math.floor(minute / 60) % 24);
        } else {
            return ((Math.floor(minute / 60)) % 24) + 24;
        } 
    }

    private makeHourPos(hour: number): number{
        return (hour < 0) ? (hour + 24) : hour ;
    }

    private makeMinPos(minute: number): number{
        return (minute < 0) ? (minute + 60) : minute;
    }

}

export default Clock;