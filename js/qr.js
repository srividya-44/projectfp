let countdownInterval;

function generateQR() {

    let qrContainer = document.getElementById("qrcode");
    let timerText = document.getElementById("timer");

    // Clear previous QR if exists
    qrContainer.innerHTML = "";

    // Create unique QR text
    let qrData = "Attendance-" + Date.now();

    // Generate QR
    new QRCode(qrContainer, {
        text: qrData,
        width: 200,
        height: 200
    });

    // QR valid time (5 minutes)
    let timeLeft = 300;

    // Clear previous timer
    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerText.innerText =
            "QR expires in: " + minutes + "m " + seconds + "s";

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(countdownInterval);

            qrContainer.innerHTML =
                "<h3 style='color:red'>QR Code Expired</h3>";

            timerText.innerText = "Please generate a new QR.";

        }

    }, 1000);
}