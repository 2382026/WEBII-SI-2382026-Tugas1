function teacher(a: number, arrive: number[]) {
    let student = 0;
    for (let i = 0; i < arrive.length; i++) {
        if (arrive[i] <= 0) {
            student++;
        }
    }
    if (student >= a) return "YES";

    return "NO";
}

console.log(teacher(3, [-2, -1, 0, 1, 2]));