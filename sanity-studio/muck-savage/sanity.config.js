import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'muck-savage',

  projectId: 'i4469zmy',
  dataset: 'muck-data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
