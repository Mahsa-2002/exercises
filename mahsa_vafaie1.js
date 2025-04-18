for (let i = 3; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if (j === 3)
            continue;

        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('------------');
}