function myfunction(a, b) {
    var a = 5;
    var b = 6;
    return a + b;
}

function arrays() {
    var pens;
    pens = new Array("red", "orange", "blue", "black");
    cards = pens;
    console.log(pens);

    var i;
    for (i = 0; i < cards.length; i++) {
        alert(pens[i]);   
    }
    alert("length of arry is:" +cards.length);
}