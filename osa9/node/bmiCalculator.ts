const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / (height / 100) ** 2
  let returnString = ''

  if (bmi > 40) {
    returnString = 'Obese Class III (Very severely obese)'
  } else if (bmi > 35) {
    returnString = 'Obese Class II (Severely obese)'
  } else if (bmi > 35) {
    returnString = 'Obese Class I (Moderately obese)'
  } else if (bmi > 30) {
    returnString = 'Overweight'
  } else if (bmi > 18.5) {
    returnString = 'Normal (healthy weight)'
  } else if (bmi > 16) {
    returnString = 'Underweight'
  } else if (bmi > 15) {
    returnString = 'Severely underweight'
  } else {
    returnString = 'Very severely underweight'
  }

  return returnString
}

console.log(calculateBmi(180, 74))
