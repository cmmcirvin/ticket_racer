export function round(number: number, decimals: number) {
    let power = Math.pow(10, decimals)
    // shift digits up
    let shiftUp = number * power;

    // truncate
    let truncated = Math.floor(shiftUp);

    // shift down and return 
    return truncated / power;
}