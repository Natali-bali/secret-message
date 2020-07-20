let {hash} = window.location;
hash = hash.replace('#', '');
hash = atob(hash);
if (hash) {
    document.querySelector('#shareDiv').classList.add('hide');
    document.querySelector('#inputDiv').classList.add('hide');   
    document.querySelector('#finalDiv').classList.remove('hide');
    document.querySelector('#final').innerHTML = hash;
}
document.querySelector('form').addEventListener('submit', event => {
event.preventDefault();
const input = document.querySelector('#input').value;
document.querySelector('#inputDiv').classList.add('hide');
document.querySelector('#shareDiv').classList.remove('hide');
const codeInput = btoa(input);
const link = document.querySelector('#share');
link.value = `${window.location}#${codeInput}`;
link.select(); 
});



