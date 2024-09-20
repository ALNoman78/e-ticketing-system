function textToInnerText (id){
    const text = document.getElementById(id).innerText;
    const textNumber = parseInt(text)
    return textNumber;
}