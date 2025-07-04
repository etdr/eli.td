
import SHA from 'jssha'

function getTimeDigest () {
  const hash = new SHA('SHA-512', 'TEXT')
  hash.update(Date.now().toString())
  return hash.getHash('HEX')
}

export default function getStops () {
  const digest = getTimeDigest()

  return digest.match(/.{8}/g)
          .map((s, i) => ({
            id: i, // Add a stable ID
            color: '#' + s.slice(0, 6), 
            offset: parseInt(s.slice(6), 16) / 256
          }))
          .sort((a, b) => a.offset - b.offset) // Sort for the renderer
}