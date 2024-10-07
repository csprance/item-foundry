export function Hint(hint: string) {
    return function (target: any, propertyKey: string) {
        console.log(target);
    }
}
