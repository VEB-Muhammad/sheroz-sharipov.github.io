//qaysi vaqtgacha| vaqtni kiritamiz

// harakatdagisoatni tayyorlash
var x = setInterval(function() {
    // hpzirgi vaqt
    // var hozirgi_vaqt = new Date().getTime()
    //oraliq vaqt

    //kun, soat,daqiqa,soniya
    var hozirgi_vaqt = new Date()

    var soat = hozirgi_vaqt.getHours()
    var daqiqa = hozirgi_vaqt.getMinutes()
    var soniya = hozirgi_vaqt.getSeconds()







    //o'zgaruvchilatni tayinlash

    var s = document.getElementById("soat");
    var d = document.getElementById("daqiqa");
    var ms = document.getElementById("soniya");
    soat = (soat < 10) ? "0" + soat : soat;
    daqiqa = (daqiqa < 10) ? "0" + daqiqa : daqiqa;
    soniya = (soniya < 10) ? "0" + soniya : soniya

    s.innerHTML = soat;
    d.innerHTML = daqiqa;
    ms.innerHTML = soniya;
}, 1000);