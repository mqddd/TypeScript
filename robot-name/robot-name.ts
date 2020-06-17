class RobotName {
    private _name: string;
    private static names: string[];
    private chars: string;
    constructor() {
        this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._name = this.makeName();
        RobotName.names = new Array();
    }

    private makeName(): string {
        let tempName: string = "";
        for (let index = 0; index < 2; index++) {
            const char: string = this.chars.charAt(Math.random() * this.chars.length);
            tempName.concat(char);
        }
        for (let index = 0; index < 3; index++) {
            const digit: number = Math.random() * 10;
            tempName.concat(digit.toString());
        }
        if (this.isDuplicate(tempName)) {
            return "";
        }
        RobotName.names.push(tempName);
        return tempName;
    }

    private isDuplicate(tempName: string): boolean {
        RobotName.names.forEach((name: string) => {
            if (tempName.localeCompare(name) === 0) {
                return true;
            }
        });
        return false;
    }

    public resetName() {
        this._name = this.makeName();
    }

    public get name() : string {
        return this._name;
    }
    
}

export default RobotName;