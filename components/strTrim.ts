export const strTrim = (str: string): string => {
    return str.replace(/(\r\n|\n|\r)/gm, '').trim();
}