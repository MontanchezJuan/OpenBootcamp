const btn = document.getElementById('btn')

btn.addEventListener('click', e => {
    alert('click en el botón')
})

$('#btn').click(()=> {
    console.log('Hola, estoy utilizando jQuery');
})
