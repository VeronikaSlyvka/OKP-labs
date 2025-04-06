function dialog(){
    let total=0;
    let answer, bookNumber
    do{
        do{
            bookNumber = +prompt("Введіть артикул книги, яку ви хочете придбати"); 
            if(bookNumber == 0) break;       
            if(isNaN(bookNumber) || bookNumber <= 0){
                alert("Будь ласка, введіть число більше 0.");
            }
        } while (isNaN(bookNumber) || bookNumber <= 0);  

        if(bookNumber == 0) break;
        total += 1;
        answer = confirm(`${total} книг успішно додано до кошика. Бажаєте додати ще одну книгу?`);
    } while(answer)
}


function information(surname, name, position = "засновниця книгарні"){
    alert(`Інформація про розробника: ${surname} ${name}, ${position}`);
}


function compareBooks(){
    let book1, book2;

    do{
        book1 = prompt("Напишіть назву першої книги");
        if (book1 === null) break;

        book2 = prompt("Напишіть назву другої книги");
        if(book2 == null) break;

        if (book1.trim() === "")
        {
            alert("Ви не ввели назву першої книги. Введіть ще раз");
        }
        if (book2.trim() === "")
        {
            alert("Ви не ввели назву другої книги. Введіть ще раз");
        }
        
    }
    while (book1.trim() === "" || book2.trim() === "");

    if(book1 !== null && book2 !== null)  {
        if(book1 > book2)
        {
            alert(`Більша (лексикографічно) книга №1: ${book1}`);
        } else if (book1 < book2){
            alert(`Більша (лексикографічно) книга №2: ${book2}`);
        } else {
            alert("Назви книг однакові");
        }
    }  
}