function findMatching(drivers,driver) {
  return drivers.filter(person => person.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch (drivers,driver) {
  if (typeof drivers !== "undefined" ) {
    return drivers.filter(person => {
      if (person.name === driver || person.name[0] === driver[0]){
        return driver;
      }
    });
  }
    
}