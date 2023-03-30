const args = process.argv.slice(2);

args.forEach(element => {
    const time = parseInt(element);
    if (!isNaN(time) && time >= 0) {
        setTimeout(() => {
            console.log(`Beep after ${time} seconds`);
            // process.stdout.write('\x07');
        }, time * 1000);
    }
});