/**
 * Templatizer provides easier methods of templating
 */
import { TemplateVariables } from './types/TemplateVariables'

class Templatizer {
  /**
   * Opening braces for a templated variable
   */
  private open: string = '{{'

  /**
   * Closing braces for a templated variable
   */
  private close: string = '}}'

  /**
   * Set the opening and closing brackets for templating
   */
  public setTemplateStyle(open: string, close: string): this {
    this.open = open
    this.close = close
    return this
  }

  /**
   * Replace all variables in a given template with the variables provided
   */
  public templatize(template: string, variables: TemplateVariables, index: number = 0): string {
    // Define required constants
    const keys = Object.keys(variables)
    const item = keys[index]
    const replacement = variables[keys[index]]

    // Return when done replacing templates
    if (index === keys.length) {
      return template
    }

    // Create template regex pattern
    const capitalized = `${this.open.toString()}${item.toUpperCase()}${this.close.toString()}`
    const regex = new RegExp(capitalized, 'g')

    // Replace templated variables with teh given variables
    const updatedTemplate = template.replace(regex, replacement)
    return this.templatize(updatedTemplate, variables, index + 1)
  }
}

export { Templatizer }
