const button = document.createElement('button');
button.textContent = 'How big is your canvas?';
button.addEventListener('click', create);
document.body.appendChild(button);


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
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let randomColor = "rgb(" + x + "," + y + "," + z + ")"
                cell.style.backgroundColor = randomColor;
            });
            document.getElementById('container').appendChild(cell)
            
        }
    };
    makeCells(num);
}
