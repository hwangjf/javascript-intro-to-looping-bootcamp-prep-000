function forLoop (array) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(console.log ("I am "+ i + " strange loop."))
} else {
  array.push(console.log ("I am "+ i + " strange loops."))
}
}
return array
}

function whileLoop (n) {
  if (n > 0) {
  while (n > 0) {
    console.log (--n)
  } else {
    return 'done'
  }
}
}