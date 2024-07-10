const findTheOldest = function(people) {
    return people((oldest,currentPerson) => {
        if (currentPerson.age > oldest.age) {
            return currentPerson
            } else {
                return oldest
                }
                })
            }


// Do not edit below this line
module.exports = findTheOldest;
