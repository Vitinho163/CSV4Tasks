import fs from 'node:fs'
import { parse } from 'csv-parse'

async function importCsv(filePath) {
  const fileStream = fs.createReadStream(filePath)

  const parser = fileStream.pipe(parse({
    delimiter: ',',
    from_line: 2,
    trim: true,
  }))

  for await (const columns of parser) {
    const [title, description] = columns

    console.log({title, description})
  }
}

if (process.argv[2]) {
  importCsv(process.argv[2]).catch(err => console.error('Erro na importação:', err))
} else {
  console.error('Use: node csv.js <caminho-do-arquivo.csv>')
  // Necessario estar na pasta (streams) caso contrario, usar o caminho completo.
}