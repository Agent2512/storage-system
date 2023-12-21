function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    // console.log(`Code matched = ${decodedText}`, decodedResult);

    const isOnlyNumbers = /^\d+$/.test(decodedText);

    if (isOnlyNumbers) {
        window.location.href = `/item/${decodedText}`;
    }
}

const qrReaderElement = document.getElementById('qrReader');

if (qrReaderElement) {
    Html5Qrcode.getCameras().then(devices => {

        if (devices && devices.length) {
            let cameraId = devices.find(x => x.label.includes('back'))?.id || devices.find(x => x.label.includes('rear'))?.id || devices[0].id;

            if (cameraId) {
                const html5QrCode = new Html5Qrcode(
                    "qrReader",
                    { formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE] }
                );

                html5QrCode.start(
                    cameraId,
                    {
                        fps: 10,
                        rememberLastUsedCamera: true,
                        aspectRatio: 1,
                    },
                    onScanSuccess
                )
            }
        }
    })

}