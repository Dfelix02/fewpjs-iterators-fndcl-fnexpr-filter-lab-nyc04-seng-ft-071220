function findMatching(drivers,driver) {
  return drivers.filter(person => person.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch (drivers,driver) {
  return drivers.filter(person => person.name === driver)
}