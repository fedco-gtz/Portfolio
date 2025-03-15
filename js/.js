document.addEventListener("DOMContentLoaded", function () {
    fetch("../json/BaEducacion.json")
        .then(response => response.json())
        .then(data => {
            let tbody = document.querySelector("#data-table tbody");

            data.forEach(item => {
                let row = document.createElement("tr");

                let nombreCurso = item.curso.toLowerCase()
                    .replace(/[:\s]/g, "-")
                    .replace(/[^a-z0-9\-]/g, "");

                let cellCurso = document.createElement("td");
                cellCurso.classList.add("curso", nombreCurso);
                cellCurso.textContent = item.curso;

                let cellEstado = document.createElement("td");
                cellEstado.classList.add("estado", item.estado.toLowerCase().replace(" ", "-"));
                cellEstado.innerHTML = item.estado;

                let cellProyecto = document.createElement("td");
                cellProyecto.style.backgroundColor = "#121212";
                cellProyecto.style.padding = "10px";
                let proyectoLink = document.createElement("a");
                if (item.proyecto.existe) {
                    proyectoLink.href = item.proyecto.link;
                    let proyectoImg = document.createElement("img");
                    proyectoImg.src = item.proyecto.imagen;
                    proyectoImg.alt = "Proyecto";
                    proyectoImg.style.width = item.proyecto.imagen_width + "px";
                    proyectoImg.style.height = item.proyecto.imagen_height + "px";
                    proyectoLink.appendChild(proyectoImg);
                } else {
                    let noText = document.createElement("span");
                    noText.classList.add("no-estilo");
                    noText.textContent = "❌";
                    proyectoLink.appendChild(noText);
                }
                cellProyecto.appendChild(proyectoLink);

                let cellCertificado = document.createElement("td");
                cellCertificado.style.backgroundColor = "#121212";
                cellCertificado.style.padding = "10px";
                let certificadoLink = document.createElement("a");
                if (item.certificado.existe) {
                    certificadoLink.href = item.certificado.link;
                    let certificadoImg = document.createElement("img");
                    certificadoImg.src = item.certificado.imagen;
                    certificadoImg.alt = "Certificado";
                    certificadoImg.style.width = "80px";
                    certificadoImg.style.height = "80px";
                    certificadoImg.style.objectFit = "cover";
                    certificadoLink.appendChild(certificadoImg);
                } else {
                    let noText = document.createElement("span");
                    noText.classList.add("no-estilo");
                    noText.textContent = "❌";
                    certificadoLink.appendChild(noText);
                }
                cellCertificado.appendChild(certificadoLink);

                row.appendChild(cellCurso);
                row.appendChild(cellEstado);
                row.appendChild(cellProyecto);
                row.appendChild(cellCertificado);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Error cargando los datos:", error));
});
