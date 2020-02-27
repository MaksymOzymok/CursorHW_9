
    function getRandomColor() {
        return `rgb(${(Math.round(Math.random() * 256))}, ${(Math.round(Math.random() * 256))}, ${(Math.round(Math.random() * 256))})`
    }


    const getSquare = (height, width) => {
        let k = document.createElement('div');
        k.className = 'square';
        k.style.width = `${height}px`;
        k.style.height = `${width}px`;
        k.style.backgroundColor = getRandomColor();
        return k;
    };



function getBigSquare() {
    let rezult = document.createElement('div');
    rezult.className = 'rezult';
    for(let j = 0; j<5; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let i = 0; i < 5; i++) {
            row.append(getSquare(50, 50));
        }
        row.style.display = 'flex';
        rezult.append(row);
    }
   return rezult;

}
document.body.append(getBigSquare());

function setColors() {
  document.querySelectorAll('.square').forEach(value => {
      value.style.transition = '1s';
      value.style.backgroundColor = getRandomColor();

  });


}

setInterval(()=>{
    setColors();
},1000);












