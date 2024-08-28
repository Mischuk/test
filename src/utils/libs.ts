export function cn(prefix?: string, ...args: any): string {
  const classes: any[] = [];

  args.forEach((arg: any) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(prefix ? `${prefix}_${arg}` : arg);
    } else if (Array.isArray(arg)) {
      classes.push(cn(prefix, ...arg));
    } else if (argType === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(prefix ? `${prefix}_${key}` : key);
        }
      });
    }
  });

  return classes.join(' ');
}

export function downloadSignedFile(signInput: string) {
  var blob = new Blob([signInput], { type: 'application/pkcs7-signature' });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'signature.p7s';
  link.click();
}
