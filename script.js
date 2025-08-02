
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
//explore further page

function filterTable(){
    const input = document.getElementById("idea").value.toLowerCase();
    const rows = document.querySelectorAll("#tableFind tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();

    if(name.includes(input)){
        row.style.display=" ";
    }else{
        row.style.display="none";
    }
});
}

function submitAlert(){
        alert("Your Form has been submitted");
    }
