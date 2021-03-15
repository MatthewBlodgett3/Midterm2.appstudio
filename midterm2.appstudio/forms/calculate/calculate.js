function calcAvgSquare(Avg1, Avg2, Avg3) {
    let avgSqr = ((Avg1 + Avg2 + Avg3)/3) * (Math.pow(Avg1,2))
    return avgSqr
    }
    
    let num1 = Number(prompt("Enter a value : "))       
    let num2 = Number(prompt("Enter b value : "))        
    let num3 = Number(prompt("Enter c value : "))     
    
    let equation = calcAvgSquare(num1, num2, num3)
    console.log(`The Answer is ${equation}`)
    