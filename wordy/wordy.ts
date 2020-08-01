class WordProblem {
    private question: string;
    constructor(question: string){
        this.question = question;
    }

    public answer(): number{
        let expression: string;
        let result: number;
        let stringArray = this.question.replace("?", "").split(" ");
        function onlyContainNumber(word: string) {
            return (word !== "What" && word !== "is" && word !== "by");
        }
        stringArray = stringArray.filter(onlyContainNumber);
        stringArray.forEach((e, i, obj) => {
            switch (e) {
                case 'plus':
                    obj[i] = '+';
                    break;
                case 'minus':
                    obj[i] = '-';
                    break;
                case 'multiplied':
                    obj[i] = '*';
                    break;
                case 'divided':
                    obj[i] = '/';
                    break;
                default:
                    if (isNaN(parseFloat(e))) {
                        throw ArgumentError;
                    } else {
                        obj[i] = `(${e})`
                    }
                    return;
            }
        });
        expression = stringArray.join("");
        result = eval(expression);
        return result;
    }
}

class ArgumentError {}

export { WordProblem, ArgumentError };