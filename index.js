// code your solution here
const winners = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

const loser = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]



  const superbowlWin = function(array){

    return array.find(element => element.result === "W") ? array.find(element => element.result === "W").year : undefined
    
    // winningObject = array.find(element => element.result === "W")


    // yearOfWin = winningObject.year
    // console.log(winningObject);
    // console.log(yearOfWin);

  }