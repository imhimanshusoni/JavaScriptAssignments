function logic() {
  const n = Number(prompt("Enter the number of students: "));

  student = [];

  for (let i = 0; i < n; ++i) {
    const details = prompt(
      "Enter Student Name and Scores in Maths, Science and Arts (Separated by commas)"
    );
    let arr = details.split(",");

    student.push({
      studentName: arr[0],
      mathScore: Number(arr[1]),
      scienceScore: Number(arr[2]),
      artsScore: Number(arr[3]),
    });
  }

  student.sort((obj1, obj2) => {
    let totalmarks1 = obj1.mathScore + obj1.scienceScore + obj1.artsScore;
    let totalmarks2 = obj2.mathScore + obj2.scienceScore + obj2.artsScore;
    if (totalmarks1 == totalmarks2) {
      if (obj1.mathScore < obj2.mathScore) {
        return 1;
      } else return -1;
    } else if (totalmarks1 < totalmarks2) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let i = 0; i < n; ++i) {
    let name = student[i].studentName;
    let maths = student[i].mathScore;
    let science = student[i].scienceScore;
    let arts = student[i].artsScore;
    document.write(`<h3>${name} ${maths} ${science} ${arts}</h3>`);
  }
}

logic();
