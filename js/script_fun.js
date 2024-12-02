document.getElementById("copyButton").addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput");
    
    // Selecciona el texto del input
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(emailInput.value).then(() => {
        alert("Correo copiado al portapapeles: " + emailInput.value);
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
});


function downloadCertificate(fileName) {
    // Cambia el path por la ubicación real de tus archivos PDF
    const filePath = `assets/${fileName}`;
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}