import { Templatizer } from '../../src/Templatizer'

import * as templates from '../samples/templates.json'

describe('Templatizer', () => {
  let templatizer: Templatizer

  beforeEach(() => {
    templatizer = new Templatizer()
  })

  describe('#templatize', () => {
    it('returns a template with a single replaced variables', () => {
      const replacements = {
        var: 'templatized'
      }

      return templatizer.templatize(templates.bracketTemplate, replacements)
        .should.deep.equal(templates.bracketTemplateSolution)
    })

    it('returns a template with multiple replaced variables', () => {
      const replacements = {
        var: 'templatized',
        const: 'cool'
      }

      return templatizer.templatize(templates.multiBracketTemplate, replacements)
        .should.deep.equal(templates.multiBracketTemplateSolution)
    })
  })

  describe('#setTemplateStlying', () => {
    it('sets the templating style and returns `Templatizer`', () => {
      return templatizer.setTemplateStyle('{{', '}}')
        .should.be.instanceof(Templatizer)
    })
  })
})
