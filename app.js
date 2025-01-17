var userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
// Use .max line to hide future dates

var result = document.getElementById("result");

function calculateAge() {
    var birthDate = new Date(userInput.value);
     
    var d1 = birthDate.getDate();
    var m1 = birthDate.getMonth() + 1; // Months are 0-based in JavaScript
    var y1 = birthDate.getFullYear();
      
    var today = new Date();
    var d2 = today.getDate();
    var m2 = today.getMonth() + 1;
    var y2 = today.getFullYear();

    var d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}


function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate(); // Month + 1 because months are 0-based
}
