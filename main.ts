// https://en.wikipedia.org/wiki/Church_encoding#Division

function div(n, m) {
  if (n >= m) {
    return 1 + (n - m) / m
  }
  return 0
}

// https://gist.github.com/viclib/cd96edb1a8517480b5d7
function frac(n, m, f) {
  n(m())
}

