class AtbashCipher{
    private chars: string[];
    constructor(){
        this.chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }

    public encode(s: string): string{
        s = s.toLowerCase();
        const sChars: string[] = s.split("");
        let encoded: string = "";
        for (let i = 0; i < sChars.length; i++) {
            const element: string = sChars[i];
            const index: number = this.chars.indexOf(element);
            if (index !== -1) {
                encoded += this.chars[25 - index];
            }
            if (!isNaN(Number.parseInt(element))) {
                encoded += element;
            }
            if ((encoded.length) % 6 === 5 && i !== sChars.length - 1) {
                encoded += " ";
            }
        }
        return encoded;
    }

    public decode(s: string): string{
        const sChars: string[] = s.split("");
        let decoded: string = "";
        for (let i = 0; i < sChars.length; i++) {
            const element: string = sChars[i];
            const index: number = this.chars.indexOf(element);
            if (index !== -1) {
                decoded += this.chars[25 - index];
            }
            if (!isNaN(Number.parseInt(element))) {
                decoded += element;
            }
        }
        return decoded;
    }

}

export default AtbashCipher;