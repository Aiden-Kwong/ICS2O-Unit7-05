let userAge = 0
let userDay = null

// Detects if the submit button is clicked, if so, runs function checkSchool.
document.getElementById('btn').addEventListener('click', checkSchool)

// This function will check if the user has to go to school or not, based on age and day of the week.
function checkSchool () {
  // Clear out messages.
  document.getElementById('output').innerHTML = null

  // Get the user's age and set to an integer.
  userAge = document.getElementById('age-input').value
  userAge = parseInt(userAge)

  // Get the day, and set it to all uppercase, making it case-insensitive.
  userDay = document.getElementById('day-input').value
  userDay = userDay.toUpperCase()
  console.log(userDay)

  // If the user's age is not a number or not realistic, send error message.
  if (isNaN(userAge) || userAge <= 0 || userAge >= 200) {
    document.getElementById('output').innerHTML = 'Please enter a valid age, using numerical symbols.'

  // If the user's age is valid, spellcheck to ensure it is a day of the week.
  } else if (userDay !== 'MONDAY' && userDay !== 'TUESDAY' && userDay !== 'WEDNESDAY' && userDay !== 'THURSDAY' && userDay !== 'FRIDAY' && userDay !== 'SATURDAY' && userDay !== 'SUNDAY') {
    // If it isn't, then send this error message.
    document.getElementById('output').innerHTML = 'Please check that the day of the week has been spelled correctly.'

  // If age is a valid number and the day is spelled correctly, proceed.
  } else {
    // If user is both between 5 and 19 years of age, and the day is not Saturday or Sunday, send the below message.
    if ((userAge >= 5 && userAge < 18) && (userDay !== 'SATURDAY' && userDay !== 'SUNDAY')) {
    document.getElementById('output').innerHTML = 'Time for school!'

    // If the above conditions are false because the user is above 18, send this message.
    } else if ((userAge > 18) && (userDay !== 'SATURDAY' && userDay !== 'SUNDAY')) {
    document.getElementById('output').innerHTML = 'Time to go to work!'

    // If the user's age is less than 5, send this message instead.
    } else if (userAge < 5) {
      document.getElementById('output').innerHTML = 'You aren\'t quite old enough for school yet.'

    // If all of those are false, send this message.
    } else {
      document.getElementById('output').innerHTML = 'Time to relax for the weekend!'
    }
  }
}
