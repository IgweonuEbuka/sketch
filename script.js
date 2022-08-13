const container = document.querySelector('#sketch-container');
const slide = document.querySelector('.slider');
const slideValue = document.querySelector('.slide-value');
const color = document.querySelector('#color');
const buttons = document.querySelectorAll('button');
let grid;
let select;
//make row and colmn of our grid
function grids(rows,cols){
  container.style.setProperty('--grid-rows',rows);
  container.style.setProperty('--grid-cols',cols);
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        grid = document.createElement('div');
        container.appendChild(grid);
        console.log(container.length);
        grid.classList.add('grid-items');
        grid.classList.add('grid');

      }
  }
  select = document.querySelectorAll('.grid');
  console.log(select);
    color.addEventListener('click',(e)=>{
      select.forEach((divGrid)=>{
      divGrid.addEventListener('mouseover',(e)=>{
        e.target.style.backgroundColor = color.value;
      })
    })
  });
}
grids(16,16);
let newGrid;
//event listener for our slider
function selectSlide(){
    slide.addEventListener('input',(e)=>{
       slideValue.textContent = `GRID SIZE: ${e.target.value} x ${e.target.value}`;
          while(container.firstChild){
              container.removeChild(container.firstChild);
          }
      for(let i = 0; i < e.target.value; i++){
         for(let j = 0; j< e.target.value; j++){
             newGrid = document.createElement('div');
             container.appendChild(newGrid);
             newGrid.classList.add('new-grid');
             newGrid.classList.add('grid');
         }
       }
      container.style.setProperty('--grid-rows',e.target.value);
      container.style.setProperty('--grid-cols',e.target.value);

      let select2 = document.querySelectorAll('.new-grid');
       color.addEventListener('click',(e)=>{
         select2.forEach((item)=>{
          item.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = color.value;
          })
         })
       })
  })
}

 buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let gridItem = document.querySelectorAll('.grid');
        //RGB Random value
        if(e.target.classList.contains('rgb')){
             gridItem.forEach((item)=>{
                item.addEventListener('mouseover',(e)=>{
                    item.style.backgroundColor = randomColor();
                })
             })
        }
        //Erase
        if(e.target.classList.contains('erase')){
            gridItem.forEach((item)=>{
                item.addEventListener('mouseover',(e)=>{
                    item.style.backgroundColor = 'white';
                })
            })
        }
        //reset
        if(e.target.classList.contains('reset')){
            gridItem.forEach((item)=>{
                item.style.backgroundColor = '';
            })
        }
        //toogle grid  border
        if(e.target.classList.contains('toggle')){
          gridItem.forEach((item)=>{
            item.style.borderStyle = 'none';
            item.style.borderWidth = '0px';
            e.target.classList.replace('toggle','on');
          })
        }else if( e.target.classList.contains('on')){
          e.target.classList.replace('on','toggle');
          gridItem.forEach((item)=>{
            item.style.borderStyle = 'groove';
            item.style.borderWidth = '1px';
          })
        }
    })
})
function randomColor() {
    let col = [];
    for (let i = 0; i < 3; i++) {
      col.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + col.join(', ') + ')';
  } 
selectSlide();