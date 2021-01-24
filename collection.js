var kana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var i = 0;i < kana.length; i++) {
    for (var j = 0; j < kana.length; j++) {
        document.write('<p>' + kana[i] + kana[j] + '</p>');
    }
}