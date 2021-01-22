//  //Returns a random DNA base
//  const returnRandBase = () => {
//      const dnaBases = ['A', 'T', 'C', 'G']
//      return dnaBases[Math.floor(Math.random() * 4)]

//  };

//  console.log(returnRandBase())



//  // Returns a random single stand of DNA containing 15 bases
//  const mockUpStrand = () => {
//      const newStrand = []
//      for (let i = 0; i < 15; i++) {
//          newStrand.push(returnRandBase())
//      }

//      return newStrand
//  };


//  console.log(mockUpStrand())


//  const pAequorFactory = (specimenNum, dna) => {


//      return {
//          specimenNum: specimenNum,
//          dna: dna,

//          mutate() {
//              let index = Math.floor(Math.random() * this.dna.length);
//              let newBase = returnRandBase();
//              console.log(this.dna[index])
//              if (this.dna[index] === newBase) {
//                  newBase = returnRandBase();
//              };

//              this.dna[index] = newBase;
//              return this.dna;

//          },


//          compareDNA(pAequor) {
//              let conp = this.dna;
//              let similar = 0;
//              for (let j = 0; j < this.dna.length; j++) {
//                  for (let k = 0; k < pAequor.length; k++) {
//                      if (this.dna[j] === pAequor[k]) {
//                          similar += 1;
//                      }
//                  }
//              };
//              let percentage = Math.floor((similar / this.dna.length) * 100)
//              console.log(`specimen 1 and specimen 2 have ${percentage}% DNA in common.`)
//          },



//          willLikelySurvive() {
//              let surviveScore = 0;

//              for (let l = 0; l < this.arr.length; l++) {
//                  if (this.dna[l] === 'C' || this.dna[l] === 'G') {
//                      surviveScore += 1;
//                  }
//              };
//              let totalScore = Math.floor((surviveScore / this.dna.length) * 100)
//              if (totalScore >= 60) {
//                  return true;
//              } else {
//                  return false;
//              }
//          },


//          survivalPrediction() {
//              if (this.willLikelySurvive() === true) {
//                  return `${this.specimenNum} : ${this.dna.join("|")} =>High chances of survive`
//              } else {
//                  return `${this.specimenNum} : ${this.dna.join("|")} =>Lowest chances of survive`
//              }
//          },
//          complementStrand() {
//              let factFunc = pAequorFactory(this.specimenNum, [])
//              for (let x in this.dna) {
//                  switch (this.dna[x]) {

//                      case 'A':
//                          factFunc.this.dna.push('T')
//                          break;
//                      case 'T':
//                          factFunc.this.dna.push('A')
//                          break;

//                      case 'C':
//                          factFunc.this.dna.push('G')
//                          break;
//                      case 'G':
//                          factFunc.this.dna.push('C')
//                          break;


//                  }

//              }



//          }
//      }

//  }





//  //create team request
//  const createTeamRequest = () => {
//      let mainFunc = pAequorFactory(i, mockUpStrand());
//      let i = 1;
//      let takeArr = [];
//      while (i <= 30) {
//          mainFunc = pAequorFactory(i, mockUpStrand());
//          if (mainFunc.willLikelySurvive() === true) {
//              takeArr.push(mainFunc)
//              i++;
//          }
//      }
//      return takeArr;
//  }

//  console.log(pAequorFactory(2, mockUpStrand()))

//Returns a random DNA base

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]

};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }

    return newStrand
};
//factory function 
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,

        mutate() {
            let index = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase();
            if (newBase === this.dna[index]) {
                newBase = returnRandBase();
            };

            this.dna[index] = newBase;
            return this.dna;

        },

        //compare two diffent dna
        compareDNA(pAequor) {
            let conp = this.dna;
            let similar = 0;
            for (let j = 0; j < this.dna.length; j++) {
                for (let k = 0; k < pAequor.length; k++) {
                    if (j === k && this.dna[j] === pAequor[k]) {
                        similar += 1;
                    }
                }
            };

            let percentage = Math.floor((similar / conp.length) * 100)
            console.log(`specimen 1 and specimen 2 have ${percentage}% DNA in common.`)

        },
        // survive or not is bring out from this
        willLikelySurvive() {

            let thisDna = this.dna.length
            let surviveScore = 0;
            for (let l = 0; l < thisDna; l++) {
                if (this.dna[l] === 'C' || this.dna[l] === 'G') {
                    surviveScore += 1;
                }
            };
            let totalScore = Math.floor((surviveScore / this.dna.length) * 100)
            if (totalScore >= 60) {
                return true;
            } else {
                return false;
            }
        },
        //this methods is used to output the survival prediction
        survivalPrediction() {
            if (this.willLikelySurvive() === true) {
                return `${this.specimenNum} : ${this.dna.join("|")} =>High chances of survive`
            } else {
                return `${this.specimenNum} : ${this.dna.join("|")} =>Low chances of survive`
            }
        },


        complementStrand() {
            let factFunc = pAequorFactory(this.specimenNum, [])
            for (let x in this.dna) {
                switch (this.dna[x]) {

                    case 'A':
                        factFunc.this.dna.push('T')
                        break;
                    case 'T':
                        factFunc.this.dna.push('A')
                        break;

                    case 'C':
                        factFunc.this.dna.push('G')
                        break;
                        factFunc.this.dna.push('C')
                        break;

                };

            }
        }
    }

}





//create team request
const createTeamRequest = () => {
    let i = 1;
    let mainFunc = pAequorFactory(i, mockUpStrand());

    let takeArr = [];
    while (i <= 30) {
        mainFunc = pAequorFactory(i, mockUpStrand());
        if (mainFunc.willLikelySurvive() === true) {
            takeArr.push(mainFunc)
            i++;
        }
    }
    return takeArr;
}

const result = createTeamRequest();
console.log(result[0].survivalPrediction());
console.log(result[1].survivalPrediction());
pAequorFactory(1, mockUpStrand()).compareDNA(mockUpStrand())
console.log(pAequorFactory(1, mockUpStrand).willLikelySurvive())