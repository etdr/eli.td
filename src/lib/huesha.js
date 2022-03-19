
import SHA from 'jssha'

function getTimeDigest () {
  const hash = new SHA('SHA-512', 'TEXT')
  hash.update(Date.now().toString())
  return hash.getHash('HEX')
}

export default function getStops () {
  const digest = getTimeDigest()

  return digest.match(/.{8}/g)
          .map(s => [
            '#' + s.slice(0, 6), 
            (parseInt(s.slice(6), 16) / 2.56)
              .toString() + '%'
          ])
          .sort((s0, s1) => parseFloat(s0[1].slice(0, -1)) - parseFloat(s1[1].slice(0, -1)))
                   
}