

function circleArea (input_number) {
    var input_number = document.getElementById("input_number").value;
    var area = input_number * input_number * 3.14;
    document.getElementById('circle-area').innerText = "円の面積は" + area + "平方cmです。";
}
