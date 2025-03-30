const addPythTable = document.querySelector("#pythBtn")
const pythTableContainer = document.querySelector("#pythTableContainer")

function createPythTable(size) {
    pythTableContainer.innerHTML = "";

    const pythTable = document.createElement("table")
    pythTable.classList.add("pythTable")

    for (let i = 0; i <= size; i++) {
        let row = document.createElement("tr")

        for (let j = 0; j <= size; j++) {
            let cell = document.createElement("td")
            cell.classList.add("pythCell")

            if (i === 0 && j === 0) {
                cell.textContent = "*";
                cell.classList.add("cellGray");
            } else if (i === 0 || j === 0) {
                cell.textContent = i || j;
                cell.classList.add("cellGray");
            } else {
                cell.textContent = j * i;
            }
            row.appendChild(cell)
        }
        pythTable.appendChild(row)
    }
    pythTableContainer.appendChild(pythTable)
}

addPythTable.addEventListener("click", () => {
    createPythTable(10)
})
