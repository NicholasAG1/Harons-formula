//event listiners
document.getElementById('button').addEventListener('click', listener)

//functions

function listener() {
    let a = +document.getElementById('num1').value
    let b = +document.getElementById('num2').value
    let c = +document.getElementById('num3').value

    let area = heronsFormula(a, b, c) 
    
    document.getElementById('answer').innerHTML = ('The area of the triangle is:' + area + '.')
}
    
    
function heronsFormula(a, b, c) {
    let s = a + b + c / 2
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    return area
}