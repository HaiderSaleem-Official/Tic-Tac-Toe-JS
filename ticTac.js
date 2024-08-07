function addTable() {
  var flag = "X";
  var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  var myTableDiv = document.getElementById("gameTable");

  var table = document.createElement("TABLE");
  table.style.borderCollapse = "collapse";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < 3; j++) {
      var td = document.createElement("TD");
      td.classList.add("id1");
      td.width = "150em";
      td.height = "150em";
      td.style.fontSize = "3em";
      td.style.color = "red";
      td.style.textAlign = "center";
      td.dataset.row = i;
      td.dataset.col = j;
      td.addEventListener("click", function (event) {
        if (event.target.innerText == "") {
          event.target.innerText = flag;
          var row = event.target.dataset.row;
          var col = event.target.dataset.col;
          board[row][col] = flag;
          const check = winCondition(board, flag);
          if (check) {
            setTimeout(function () {
              if (flag == "X") {
                alert("Player 1 wins!!");
              } else {
                alert("Player 2 wins!!");
              }
              resetBoard();
            }, 100);
          } else if (isBoardFull(board)) {
            setTimeout(function () {
              alert("DRAW!!");
              resetBoard();
            }, 150);
          }
          flag = flag === "X" ? "O" : "X";
        } else {
          alert("Choose another cell");
        }
      });

      td.style.border = "4px solid rgb(232, 116, 0)";
      tr.appendChild(td);
    }
  }

  myTableDiv.appendChild(table);

  function winCondition(board, player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player++
      ) {
        return true;
      }
    }
    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  }

  function isBoardFull(board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  function resetBoard() {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    var cells = document.querySelectorAll(".id1");
    cells.forEach((cell) => {
      cell.innerText = "";
    });
  }
}

addTable();
