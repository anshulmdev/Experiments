const applications = [1];
const trigger = 2;

const applicationWeightage = { 1: 2, 2: 3, 3: 3, 4: 1, 5: 1, 6: 2, 7: 3, 8: 4 , 10: 2, 10: 5, 11: 5, 12: 1, 13: 1, 14: 3, 15: 4, 16: 5, 17: 5, 18: 4}
const triggerWeightage = { 1: 1, 2: 32, 3: 8, 4: 2, 5: 3 }

// Checklist
const checklist = {
  lhauth: true,
  zapier: true,
  gitflow: true
}

const numbers = {
  customApps: 1,
  fncSteps: 4,
  workflows: 3
}

let estimateHrs = 0;
let estimateDays = 1;

applications.forEach((e) => {
  estimateHrs += 3 * applicationWeightage[e]
})

estimateHrs += triggerWeightage[trigger]

if(!checklist.zapier) estimateHrs += 2;
if(!checklist.lhauth) estimateHrs += 4;

if(numbers.customApps) estimateHrs += (20 * numbers.customApps);
if(numbers.fncSteps) estimateHrs += (2 * numbers.fncSteps);
if(numbers.workflows > 2) estimateHrs += (10 * numbers.workflows);

if (checklist.gitflow) estimateDays = parseInt((estimateHrs/8) * 2);
else estimateDays = parseInt((estimateHrs/8) + 1);

console.table({estimateHrs, estimateDays})
