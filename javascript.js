
// let input = prompt ("How big do you want your grid?");
// if (input != null) {

function makeCells(input){
    for (let i = 0; i < input; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.addEventListener ('mouseenter', e => {
            cell.style.backgroundColor = 'purple'; 
        });
        document.getElementById('container').appendChild(cell)
        
}};
makeCells(256);