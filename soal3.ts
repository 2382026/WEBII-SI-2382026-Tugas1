function countInCamelCase(camelCase: string): number {
    let countPerword: number = 1;

    for (let i = 0; i < camelCase.length; i++) {
        let asciiValue = camelCase.charCodeAt(i);
        if (asciiValue >= 65 && asciiValue <= 90) {
            countPerword++;
        }
    }
    return countPerword;
}

console.log(countInCamelCase("Simpan sebagai Editor"))