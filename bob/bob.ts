class Bob {

    hey(sentence: string): string {
        return checkEndingChar(sentence);
    }

    private checkEndingChar(sentence: string): string {
      while (sentence.endsWith(' ')) {
        sentence.pop();
      }
      if (sentence.length === 0) {
        return 'Fine, Be that way!';
      } else {
        if (sentence.endsWith('.')) {
          return 'Whatever.';
        } else if (sentence.endsWith('?')) {
          return 'Sure.';
        } else if (sentence.endsWith('!')) {
          return 'Whoa, chill out!';
        } else return 'Whatever.';
      }
    }

}

export default Bob
