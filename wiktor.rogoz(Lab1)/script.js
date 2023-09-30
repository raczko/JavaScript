const btnPrzelicz = document.querySelector('#przelicz');
const wynikiPojemnik = document.querySelector('#wyniki');

btnPrzelicz.addEventListener('click', () => {
    const liczba1 = parseInt(document.querySelector('#liczba1').value)
    const liczba2 = parseInt(document.querySelector('#liczba2').value)
    const liczba3 = parseInt(document.querySelector('#liczba3').value)
    const liczba4 = parseInt(document.querySelector('#liczba4').value)


    const suma = liczba1 + liczba2 + liczba3 + liczba4;
    const srednia = suma / 4;
    const min = Math.min(liczba1, liczba2, liczba3, liczba4);
    const max = Math.max(liczba1, liczba2, liczba3, liczba4);

    const wynikiHTML =      
    `<p>Suma: ${suma}</p>
    <p>Średnia: ${srednia}</p>
    <p>Min: ${min}</p>
    <p>Max: ${max}</p>`;

    wynikiPojemnik.innerHTML = wynikiHTML;
})