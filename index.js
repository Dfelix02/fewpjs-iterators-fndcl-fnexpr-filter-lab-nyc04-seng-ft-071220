function findMatching(drivers,driver) {
  return drivers.filter(person => person.toLowerCase() === driver)
}