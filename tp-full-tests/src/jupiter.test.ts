// import { describe, expect, test } from "vitest"
// import { calculerHeure, doTheMath } from "../modules/calculerHeure"
// import { OUTPUT } from "../utils";

// describe('calculerHeure',()=>{
//     describe('basicScenario',()=>{
//         test('lune = 1 , terre = 1 , soleil = 2',()=>{
//             const lune = 1;
//             const terre = 1;
//             const soleil = 2;
//             expect(calculerHeure(lune,terre,soleil)).toBe(OUTPUT.SOIRNING);
//         })

//         test('lune = 2, terre = 1 , soleil 2',() =>{
//             const lune = 2;
//             const terre = 1;
//             const soleil = 2;
//             expect(calculerHeure(lune,terre,soleil)).toBe(OUTPUT.APRENOON);
//         })

//         test('lune = 1, terre = 2, soleil = 2',()=>{
//             const lune = 1;
//             const terre = 2;
//             const soleil = 2;
//             expect(calculerHeure(lune,terre,soleil)).toBe(OUTPUT.NUIGHT);
//         })    
//         test('lune = 1, terre = 1, soleil = 1',()=>{
//             const lune = 1;
//             const terre = 1;
//             const soleil = 1;   
//             expect(calculerHeure(lune,terre,soleil)).toBe(OUTPUT.MORTIN);
//         })
//     })
// })

// describe('doTheMath',()=>{
//     describe('lunar possibilities',()=>{
//         test('lune = 1 , terre = 1 , soleil = 2',()=>{
//             const lune = 1;
//             const terre = 1;
//             const soleil = 2;
//             expect(doTheMath(lune,terre,soleil)).toBe(lune + terre + soleil - 2 + 2 + terre)
//         })
//         test('lune = 2, terre = 1 , soleil 2',() =>{
//             const lune = 2;
//             const terre = 1;
//             const soleil = 2;
//             expect(doTheMath(lune,terre,soleil)).toBe(Math.floor((lune + terre + soleil +2 + terre) / 2))
//         })    
//     })

//     describe('earth possibilities',()=>{
//         test('lune=1, terre = 2, soleil = 2',()=>{
//             const lune = 1;
//             const terre = 2;
//             const soleil = 2;
//             expect(doTheMath(lune,terre,soleil)).toBe(6)
//         })
//     })

//     describe('sun possibilities',()=>{
//         test('lune = 1, terre = 1, soleil = 1',()=>{
//             const lune = 1;
//             const terre = 1;
//             const soleil = 1;   
//             expect(doTheMath(lune,terre,soleil)).toBe(lune + terre + soleil - 2 + 2 - terre);
//         })
//     })
    
// })