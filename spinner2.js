const animation = '|/-\\|/-\\|';
for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
  process.stdout.write('\r' + animation[i]);
  }, 200 * i)
};