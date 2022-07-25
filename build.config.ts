import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'core/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
