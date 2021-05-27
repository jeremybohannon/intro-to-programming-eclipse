// Get the current date
const today = new Date()
// Get the year
const thisYear = today.getFullYear()

// We got the footer element from the document
const footer = document.querySelector('footer')

// We make a new paragraph element
const copyright = document.createElement('p')
// We set words to the paragraph element
copyright.innerHTML = `Your name ${thisYear} &copy;`

// We add the paragraph element to the footer
footer.appendChild(copyright)

// Make our array of skills (which are strings)
const skills = [
  "Flipping pancakes",
  "Cleaning up spilled pancakes",
  "Giving up and ordering food"
]

// Get our section element that had an id called 'skills'
// const skillsSection = document.getElementById('skills')
// We looked for our unordered list, and got the first one
const skillsList = document.getElementById('test')

for(let index = 0; index < skills.length; index++) {
  const skill = document.createElement('li')
  skill.innerText = skills[index]

  skillsList.appendChild(skill)
}