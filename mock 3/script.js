var search = document.getElementById("search");
var courseFilter = document.getElementById("courseFilter");
var table = document.getElementById("studentTable");

search.addEventListener("keyup", function() {
    var value = search.value.toLowerCase();
    var rows = table.getElementsByTagName("tbody")[0].rows;
    for (var i = 0; i < rows.length; i++) {
        var name = rows[i].cells[1].innerText.toLowerCase();
        if (name.indexOf(value) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

courseFilter.addEventListener("change", function() {
    var course = courseFilter.value;
    var rows = table.getElementsByTagName("tbody")[0].rows;
    for (var i = 0; i < rows.length; i++) {
        var rowCourse = rows[i].cells[2].innerText;
        if (course == "all" || rowCourse == course) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        var row = e.target.parentElement.parentElement;
        var name = row.cells[1].innerText;
        if (confirm("Delete " + name + " result?")) {
            row.remove();
        }
    }
});

function saveResult() {
    var name = document.getElementById("studentName").value;
    var roll = document.getElementById("rollNo").value;
    var course = document.getElementById("course").value;
    var math = Number(document.getElementById("math").value);
    var science = Number(document.getElementById("science").value);
    var english = Number(document.getElementById("english").value);
    if (name == "" || roll == "" || course == "Select course") {
        alert("Please enter all details");
        return;
    }
    var total = math + science + english;
    var percentage = total / 3;
    var grade;
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "D";
    }
    var status;
    if (percentage >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    
    var row = table.getElementsByTagName("tbody")[0].insertRow();
    row.innerHTML =
        "<td>" + roll + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + course + "</td>" +
        "<td>" + math + "</td>" +
        "<td>" + science + "</td>" +
        "<td>" + english + "</td>" +
        "<td>" + total + "</td>" +
        "<td>" + percentage.toFixed(1) + "%</td>" +
        "<td><span class='grade " + grade.toLowerCase() + "'>" +
        grade + "</span></td>" +
        "<td><span class='" +
        (status == "Pass" ? "pass" : "fail") +
        "'>" + status + "</span></td>" +
        "<td><button class='edit'>✎</button> " +
        "<button class='delete'>🗑</button></td>";
    alert("Result saved");
    document.getElementById("studentName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "Select course";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
}

function addStudent() {
    document.getElementById("studentName").focus();
}
function sortTable() {
    var tbody = table.getElementsByTagName("tbody")[0];
    var rows = Array.from(tbody.rows);
    rows.sort(function(a, b) {
        var p1 = parseFloat(a.cells[7].innerText);
        var p2 = parseFloat(b.cells[7].innerText);
        return p2 - p1;
    });
    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
}
