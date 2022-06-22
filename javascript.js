
function create () {
    function choose() {
        const container = document.getElementById('container');
        let ask = prompt ("How many rows do you want? Choose up to 100.") 
            let num = ask * ask;
            container.style.setProperty('--grid-size', ask)
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
        }; 
    choose();


    
}
create();