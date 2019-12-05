document.getElementById('cta2').onclick = function(e){
    document.getElementById('area').innerHTML = "You press green button"
};

function addInnerHtml(e){
    document.getElementById('area').innerHTML = "You press red button"
}

document.getElementById('cta3').addEventListener('click', addInnerHtml);