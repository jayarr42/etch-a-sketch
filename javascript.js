const button = document.createElement('button');
button.textContent = 'How big is your canvas?';
button.addEventListener('click', create);


function create () {
    const ask = prompt ("How many rows do you want? Choose up to 100.") 
    function choose() {
        const container = document.getElementById('container');
        
        container.style.setProperty('--grid-size', ask)
        }; 
    choose();

    let num = ask * ask;
    function makeCells(num){
        for (let i = 0; i < num; i++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener ('mouseenter', e => {
                cell.style.backgroundColor = 'purple'; 
            });
            document.getElementById('container').appendChild(cell)
            
    }};
    makeCells(num);
}
document.body.appendChild(button);