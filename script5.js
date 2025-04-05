function dialog(){
    let total=0;
    let answer, bookNumber
    do{

        do{
            bookNumber = +prompt("Введіть артикул книги, яку ви хочете придбати", "1");        
            if(isNaN(bookNumber) || bookNumber <= 0){
                alert("Будь ласка, введіть число більше 0.");
            }
        } while (isNaN(bookNumber) || bookNumber <= 0);   

        total += 1;
        alert(`${total} книг додано до кошика.`);
        answer = confirm("Бажаєте додати ще одну книгу до кошика?");
    } while(answer)


}
