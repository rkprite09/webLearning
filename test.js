// // Returns a random DNA base
// const returnRandBase = () => {
//     const dnaBases = ['A', 'T', 'C', 'G']
//     return dnaBases[Math.floor(Math.random() * 4)]

// };

// console.log(returnRandBase())



// // Returns a random single stand of DNA containing 15 bases
// const mockUpStrand = () => {
//     const newStrand = []
//     for (let i = 0; i < 15; i++) {
//         newStrand.push(returnRandBase())
//     }

//     return newStrand
// };


// console.log(mockUpStrand())


// const pAequorFactory = (specimenNum, dna) => {


//     return {
//         specimenNum: specimenNum,
//         dna: dna,

//         mutate() {
//             let index = Math.floor(Math.random() * this.dna.length);
//             let newBase = returnRandBase();
//             console.log(this.dna[index])
//             if (this.dna[index] === newBase) {
//                 newBase = returnRandBase();
//             };

//             this.dna[index] = newBase;
//             return this.dna;

//         },


//         compareDNA(pAequor) {
//             let conp = this.dna;
//             let similar = 0;
//             for (let j = 0; j < this.dna.length; j++) {
//                 for (let k = 0; k < pAequor.length; k++) {
//                     if (this.dna[j] === pAequor[k]) {
//                         similar += 1;
//                     }
//                 }
//             };
//             let percentage = Math.floor((similar / this.dna.length) * 100)
//             console.log(`specimen 1 and specimen 2 have ${percentage}% DNA in common.`)
//         },



//         willLikelySurvive() {
//             let surviveScore = 0;

//             for (let l = 0; l < this.arr.length; l++) {
//                 if (this.dna[l] === 'C' || this.dna[l] === 'G') {
//                     surviveScore += 1;
//                 }
//             };
//             let totalScore = Math.floor((surviveScore / this.dna.length) * 100)
//             if (totalScore >= 60) {
//                 return true;
//             } else {
//                 return false;
//             }
//         },


//         survivalPrediction() {
//             if (this.willLikelySurvive() === true) {
//                 return `${this.specimenNum} : ${this.dna.join("|")} =>High chances of survive`
//             } else {
//                 return `${this.specimenNum} : ${this.dna.join("|")} =>Lowest chances of survive`
//             }
//         },
//         complementStrand() {
//             let factFunc = pAequorFactory(this.specimenNum, [])
//             for (let x in this.dna) {
//                 switch (this.dna[x]) {

//                     case 'A':
//                         factFunc.this.dna.push('T')
//                         break;
//                     case 'T':
//                         factFunc.this.dna.push('A')
//                         break;

//                     case 'C':
//                         factFunc.this.dna.push('G')
//                         break;
//                     case 'G':
//                         factFunc.this.dna.push('C')
//                         break;


//                 }

//             }



//         }
//     }

// }





// //create team request
// const createTeamRequest = () => {
//     let mainFunc = pAequorFactory(i, mockUpStrand());
//     let i = 1;
//     let takeArr = [];
//     while (i <= 30) {
//         mainFunc = pAequorFactory(i, mockUpStrand());
//         if (mainFunc.willLikelySurvive() === true) {
//             takeArr.push(mainFunc)
//             i++;
//         }
//     }
//     return takeArr;
// }

// console.log(pAequorFactory(2, mockUpStrand()))
// Returns a random DNA base
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (number, bases) => {

    return {
        scpecimenNum: number,
        dna: bases,

        mutate() {

            let index = Math.floor(Math.random() * this.dna.length);

            let rand = returnRandBase();

            while (rand === this.dna[index]) {
                rand = returnRandBase();
            }

            this.dna[index] = rand;

        },

        compareDNA(pAequor) {

            let ret = 0;

            for (let i = 0; i < this.dna.length; i++) {

                if (this.dna[i] === pAequor.dna[i]) ret++;

            }

            ret = Math.floor((ret / this.dna.length) * 100);

            console.log(`specimen #${this.scpecimenNum} and specimen #${pAequor.scpecimenNum} have ${ret}% DNA in common`)

        },

        willLikelySurvive() {

            let prop = 0;

            for (let key in this.dna) {

                if (this.dna[key] === 'C' || this.dna[key] === 'G') prop++;

            }

            if (prop / this.dna.length >= 0.6) {
                return true;
            } else {
                return false;
            }


        },

        toString() {

            if (this.willLikelySurvive() === true) {
                return this.scpecimenNum + ": " + this.dna.join("|") + " - high chance of survival";
            } else {
                return this.scpecimenNum + ": " + this.dna.join("|") + " - normal chance of survival";
            }
        },

        complementStrand() {

            let comp = pAequorFactory(-this.scpecimenNum, []);

            for (let key in this.dna) {

                switch (this.dna[key]) {

                    case 'A':
                        comp.dna.push('T');
                        break;
                    case 'T':
                        comp.dna.push('A');
                        break;
                    case 'C':
                        comp.dna.push('G');
                        break;
                    case 'G':
                        comp.dna.push('C');
                        break;
                    default:
                        break;

                }

            }

            return comp;

        }

    }

}


function generatePool() {
    const pool = [];
    let i = 1;
    let p = pAequorFactory(i, mockUpStrand());
    while (i <= 30) {
        p = pAequorFactory(i, mockUpStrand());
        if (p.willLikelySurvive() === true) {
            pool.push(p);
            i++;
        }
    }

    return pool;
}

const pool = generatePool();

console.log(pool.length);

console.log(pool[0].toString());

pool[0].mutate();

console.log(pool[0].toString());

console.log(pool[1].toString());

pool[0].compareDNA(pool[1]);

console.log(pool[1].complementStrand().toString());
console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive())