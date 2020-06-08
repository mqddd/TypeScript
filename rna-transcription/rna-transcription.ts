class Transcriptor {

    public toRna(DnaVals: string[]): string[] {
      return changeDnaToRna(DnaVals);
    }

    private changeDnaToRna(DnaVals: string[]): string[] {
      let RnaVals: string[];
      DnaVals.forEach((character: string, index: number) => {
        if (character == "G")
          RnaVals[index] = "C";
        else if (character == "C")
          RnaVals[index] = "G";
        else if (character == "T")
          RnaVals[index] = "A";
        else if (character == "A")
          RnaVals[index] = "U";
      });
      return RnaVals;
    }
}

export default Transcriptor
