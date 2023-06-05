import fs from 'node:fs'
import { generateOpenApi } from '@ts-rest/open-api'

import { api } from './contract'

const openApiDocument = generateOpenApi(api, {
  info: {
    title: 'Posts API',
    version: '1.0.0'
  }
})

fs.writeFileSync('openapi.json', JSON.stringify(openApiDocument, null, 2))
