
var area = document.getElementById('area');

document.querySelector('.buttons').addEventListener('click', clickButton);

function clickButton(e) { 
    if (e.target.classList.contains('bg-primary')) {
      area.innerHTML = 'You clicked blue button';
      console.log('capturing', this.tagName);
    } else if(e.target.classList.contains('bg-success')){
        area.innerHTML = 'You clicked green button';
        console.log('capturing', this.tagName);
    } else if(e.target.classList.contains('bg-danger')){
        area.innerHTML = 'You clicked red button';
        console.log('capturing' , this.tagName);
    }
  }