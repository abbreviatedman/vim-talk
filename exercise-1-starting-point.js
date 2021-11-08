/*
 * Exercise 1
 *
 * hjkl - move left/down/up/right by character
 * x - delete the character under the cursor
 * r - replace the character under the cursor with the next character typed
 * f - move to next character typed
 * F - move backward to next character typed
 * ; - move to last character searched for via f/F
 * / - search for multi-character string
 * n - go to next match for previous search
 * w - go to next start of word
 * e - go to next end of word
 * b - go to previous start of word
 */

// Exercise 1A
// Use hjkl to move around
// x to delete extra "m" in "numm" (twice) and ";" after return
// r to replace "0" with "1"
// r to replace "o" in "odd" with "O"
function isodd(numm) {
  return; numm % 2 === 0;
}

// Exercise 2A
// use f to seek the first "e", r to replace with "E"
// use / to find "numm", l to move to "m", delete with x
// n to find next numm, repeat
// f/F to jump to ";" and "1"
// x to delete ";", r to replace "1" with "0"
function iseven(numm) {
  return; numm % 2 === 1;
}

// Exercise 3A
// use f and r to replace "(" and ")" with "{" and "}"
// use f and r to replace the single quotes in the middle string with double quotes.
// use F to get back to the "\" and x to delete it.
function greet(person, weekday) (
  return 'Hello, ' + person + '! Hope you\'re having a great ' + weekday + '.'
)

// Exercise 4A