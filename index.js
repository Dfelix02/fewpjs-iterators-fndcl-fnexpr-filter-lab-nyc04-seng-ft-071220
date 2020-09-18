function findMatching(drivers,driver) {
  return drivers.filter(person => person.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch (drivers,driver) {
  return drivers.filter(person => {
    if (typeof person !== "undefined" || typeof driver !== "undefined"){
      if (person.name === driver || person.name[0] === driver[0]){
        return driver;
      }
    }
  });
    
}