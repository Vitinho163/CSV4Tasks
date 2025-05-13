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

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        })
      })

      if (!response.ok) {
        console.log(`Falha ao importar a task: ${title}`)
      } else {
        console.log(`Task importada: ${title}`)
      }

    } catch (error) {
      console.error(`Erro ao importar a task: ${title}`, error)      
    }

  }
  console.log('CSV Importado!')
}

if (process.argv[2]) {
  importCsv(process.argv[2]).catch(err => console.error('Erro na importação:', err))
} else {
  console.error('Use: node csv.js <caminho-do-arquivo.csv>')
  // Necessario estar na pasta (streams) caso contrario, usar o caminho completo.
}