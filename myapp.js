let month = prompt("Please enter the month you were born.");
let day = prompt("Please enter the number of the day you were born.");
//Aries (March 21 - April 19 )
// Taurus (April 20 - May 20)
// Gemini (May 21 - June 20 )
// Cancer (June 21 - July 22 )
// Leo (July 23 - August 22 )
// Virgo (August 23 - September 22)
// Libra (September 23 - October 22)
// Scorpio (October 23 - November 21 )
// Sagittarius (November 22 - December 21)
// Capricorn (December 22 - January 19 )
// Aquarius (January 20 - February 18 )
// Pisces (February 19 - March 20)
if (
  (month == "March" && day >= 21 && day <= 31) ||
  (month == "April" && day > 0 && day <= 19)
) {
  alert("Your horoscope : Aries");
} else if (
  (month == "April" && day >= 20 && day <= 30) ||
  (month == "May" && day > 0 && day <= 20)
) {
  alert("Your horoscope : Taurus");
} else if (
  (month == "May" && day > 20 && day <= 31) ||
  (month == "June" && day > 0 && day <= 20)
) {
  alert("Your horoscope : Gemini");
} else if (
  (month == "June" && day > 20 && day <= 30) ||
  (month == "July" && day > 0 && day <= 20)
) {
  alert("Your horoscope : Cancer");
} else if (
  (month == "July" && day > 20 && day <= 31) ||
  (month == "August" && day > 0 && day <= 22)
) {
  alert("Your horoscope : Leo");
} else if (
  (month == "August" && day > 22 && day <= 31) ||
  (month == "September" && day > 0 && day <= 22)
) {
  alert("Your horoscope : Virgio");
} else if (
  (month == "Seotember" && day > 22 && day <= 30) ||
  (month == "October" && day > 0 && day <= 22)
) {
  alert("Your horoscope : Libra");
} else if (
  (month == "October" && day > 22 && day <= 31) ||
  (month == "November" && day > 0 && day <= 21)
) {
  alert("Your horoscope : Scorpio");
} else if (
  (month == "November" && day > 21 && day <= 30) ||
  (month == "December" && day > 0 && day <= 21)
) {
  alert("Your horoscope : Sagittarius");
} else if (
  (month == "December" && day > 21 && day <= 31) ||
  (month == "January" && day > 0 && day <= 19)
) {
  alert("Your horoscope : Capricorn");
} else if (
  (month == "January" && day > 19 && day <= 31) ||
  (month == "February" && day > 0 && day <= 18)
) {
  alert("Your horoscope : Aquaris");
} else if (
  (month == "February" && day > 18 && day <= 29) ||
  (month == "March" && day > 0 && day <= 20)
) {
  alert("Your horoscope : Pisces");
} else {
  alert(" Please enter the month name in capital letters. Example : as April");
}
