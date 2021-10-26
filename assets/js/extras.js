const energetica = document.getElementById('boxEnergetica');
const ene = document.getElementById('boxEne');
energetica.addEventListener("click", ()=>{
    if (ene.classList.contains('boxgeneral')){
       ene.classList.remove('boxgeneral');
       ene.classList.add('newboxgeneral');
       ene.innerHTML = "holaaaa"
    }else{
        ene.classList.remove('newboxgeneral');
        ene.classList.add('boxgeneral')
    }
});


const mental = document.getElementById('boxMental');
const men = document.getElementById('boxMen');
mental.addEventListener("click", ()=>{
    if (men.classList.contains('boxgeneral')){
       men.classList.remove('boxgeneral');
       men.classList.add('newboxgeneral');
       men.innerHTML = "holaaaa"
    }else{
        men.classList.remove('newboxgeneral');
        men.classList.add('boxgeneral')
    }
});


const fisica = document.getElementById('boxFisica');
const fis = document.getElementById('boxFis');
fisica.addEventListener("click", ()=>{
    if (fis.classList.contains('boxgeneral')){
       fis.classList.remove('boxgeneral');
       fis.classList.add('newboxgeneral');
       fis.innerHTML = "holaaaa"
    }else{
        fis.classList.remove('newboxgeneral');
        fis.classList.add('boxgeneral')
    }
});


const emocional = document.getElementById('boxEmocional');
const emo = document.getElementById('boxEmo');
emocional.addEventListener("click", ()=>{
    if(emo.classList.contains('boxgeneral')){
        emo.classList.remove('boxgeneral');
        emo.classList.add('newboxgeneral');
        emo.innerHTML = "holaaaa"
    }else{
        emo.classList.remove('newboxgeneral');
        emo.classList.add('boxgeneral')
    }
})


    
