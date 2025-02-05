function roundGrade(...grade: number[]) {
    let finalGrade = grade;

    for (let i = 0; i < grade.length; i++) {
        let nextMultiple = Math.trunc((grade[i] + 5) / 5) * 5;
        if (nextMultiple - grade[i] < 3 && grade[i] > 38) {
            finalGrade[i] = grade[i];
        } else {
            finalGrade[i] = grade[i];
        }
    }
    return finalGrade;
}
console.log(roundGrade(73, 67, 38, 33));