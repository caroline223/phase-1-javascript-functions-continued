// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
    // Unclear as to why I cannot use console.log() instead of return
}
saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(feeling="*"){
    return function(emphatic="special"){
        return `You are ${feeling}${emphatic}${feeling}!`
    }
}