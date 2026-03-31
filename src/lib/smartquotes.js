/**
 * Svelte preprocessor that converts straight quotes to curly quotes
 * in text content only — leaves script, style, HTML attributes, and
 * Svelte expressions untouched.
 */
export default function smartquotes() {
  return {
    name: 'smartquotes',
    markup({ content }) {
      const result = []
      let i = 0

      while (i < content.length) {
        // Skip <script ...>...</script>
        if (content.startsWith('<script', i)) {
          const end = content.indexOf('</script>', i)
          const chunk = end === -1 ? content.slice(i) : content.slice(i, end + 9)
          result.push(chunk)
          i += chunk.length
          continue
        }

        // Skip <style ...>...</style>
        if (content.startsWith('<style', i)) {
          const end = content.indexOf('</style>', i)
          const chunk = end === -1 ? content.slice(i) : content.slice(i, end + 8)
          result.push(chunk)
          i += chunk.length
          continue
        }

        // Skip HTML tags (preserves attribute quotes)
        if (content[i] === '<') {
          const end = content.indexOf('>', i)
          const chunk = end === -1 ? content.slice(i) : content.slice(i, end + 1)
          result.push(chunk)
          i += chunk.length
          continue
        }

        // Skip Svelte expressions {...}
        if (content[i] === '{') {
          let depth = 1
          let j = i + 1
          while (j < content.length && depth > 0) {
            if (content[j] === '{') depth++
            else if (content[j] === '}') depth--
            j++
          }
          result.push(content.slice(i, j))
          i = j
          continue
        }

        // Text content — apply smart quotes
        const prev = i > 0 ? content[i - 1] : ' '
        const ch = content[i]

        if (ch === '"') {
          result.push(/\w/.test(prev) ? '\u201D' : '\u201C')
        } else if (ch === "'") {
          // Apostrophe if preceded by a word char, opening quote otherwise
          result.push(/\w/.test(prev) ? '\u2019' : '\u2018')
        } else {
          result.push(ch)
        }

        i++
      }

      return { code: result.join('') }
    }
  }
}