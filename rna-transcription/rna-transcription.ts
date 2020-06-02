class Transcriptor {
    toRna(DNAVals: string[]) {
      for (let index = 0; index < DNAVals.length; index++) {
        const element = DNAVals[index];
        if (element == "G")
          DNAVals[index] = "C";
        else if (element == "C")
          DNAVals[index] = "G";
        else if (element == "T")
          DNAVals[index] = "A";
        else if (element == "A")
          DNAVals[index] = "U";
      }
      return DNAVals;
    }
}

export default Transcriptor
