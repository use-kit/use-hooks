import fs from 'node:fs'
import fg from 'fast-glob'
import { mkdirp } from 'mkdirp'
import { scan } from '@use-kit/node'

function ci() {
  const pkgs = './src'
  const folders = scan(pkgs, { filters: [] })

  folders.forEach((dir: fs.Dirent) => {
    const folder = `./docs/${dir.name}`

    const contents = scan(`${pkgs}/${dir.name}`)
    contents.forEach(async (cdir: fs.Dirent) => {
      const cf = `${folder}/${cdir.name}`
      mkdirp.sync(cf)

      const files = await fg(`${pkgs}/${dir.name}/${cdir.name}/index.md`)
      files.length && fs.copyFileSync(files[0], `${cf}/index.md`)
    })
  })
}

ci()
