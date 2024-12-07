// Fungsi untuk membuat elemen input matriks
function generateMatrixInputs(matrixId) {
  const matrixContainer = document.getElementById(matrixId);
  for (let i = 0; i < 2; i++) { // Sesuaikan menjadi 2 baris
    for (let j = 0; j < 2; j++) { // Sesuaikan menjadi 2 kolom
      const input = document.createElement("input");
      input.type = "number";
      input.value = 0; // Nilai default 0
      input.dataset.row = i;
      input.dataset.col = j;
      matrixContainer.appendChild(input);
    }
  }
}

// Fungsi untuk mengambil nilai dari input matriks
function getMatrixValues(matrixId) {
  const inputs = document.getElementById(matrixId).querySelectorAll("input");
  const matrix = [];
  for (let i = 0; i < 2; i++) { // Sesuaikan menjadi 2 baris
    matrix[i] = [];
    for (let j = 0; j < 2; j++) { // Sesuaikan menjadi 2 kolom
      const input = inputs[i * 2 + j];
      matrix[i][j] = parseFloat(input.value) || 0; // Parsing angka
    }
  }
  return matrix;
}

// Fungsi untuk menampilkan hasil ke dalam matriks
function setMatrixValues(matrixId, values) {
  const inputs = document.getElementById(matrixId).querySelectorAll("input");
  for (let i = 0; i < 2; i++) { // Sesuaikan menjadi 2 baris
    for (let j = 0; j < 2; j++) { // Sesuaikan menjadi 2 kolom
      inputs[i * 2 + j].value = values[i][j];
    }
  }
}

// Fungsi untuk operasi matriks
function calculate(operation) {
  const matrixA = getMatrixValues("matrixA");
  const matrixB = getMatrixValues("matrixB");
  let result = Array.from({ length: 2 }, () => Array(2).fill(0)); // Matriks kosong 2x2

  if (operation === "add") {
    result = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    );
  } else if (operation === "subtract") {
    result = matrixA.map((row, i) =>
      row.map((val, j) => val - matrixB[i][j])
    );
  } else if (operation === "multiply") {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
  }

  setMatrixValues("resultMatrix", result);
}

// Generate input matriks saat halaman dimuat
generateMatrixInputs("matrixA");
generateMatrixInputs("matrixB");
generateMatrixInputs("resultMatrix");
