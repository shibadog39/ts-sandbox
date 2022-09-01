let output: string = ''
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    output += 'FizzBuzz '
    console.log('FizzBuzz')
  } else if (i % 3 == 0) {
    output += 'Fizz '
    console.log('Fizz')
  } else if (i % 5 == 0) {
    output += 'Buzz '
    console.log('Buzz')
  } else {
    output += `${i} `
    console.log(i)
  }
}
console.log(output)
