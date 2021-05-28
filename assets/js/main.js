let qr;
	(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: 'HB'
        });
})();
            
function generateQRCode() {
    let qrtext = document.getElementById("qr-text").value;
    document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
    alert(qrtext);
        qr.set({
            foreground: 'black',
            size: 200,
            value: qrtext
            });
}