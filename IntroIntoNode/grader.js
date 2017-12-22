function average(scores){
    //add all scores together
    var total = 0;
    
    scores.forEach(function(score){
        total += score;
    })
    //Divide by total no. of scores
    var avg = total/scores.length;
    
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
var scores1 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores1));
