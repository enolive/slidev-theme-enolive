import type {ShikiSetupReturn} from '@slidev/types'
import {defineShikiSetup} from '@slidev/types'
import type {Element, Text, ElementContent} from 'hast'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      {
        pre(node) {
          const codeTag = node.children
            .filter(assumeIsAnElement)
            .find(element => element.tagName === 'code')
          if (codeTag == null) {
            console.warn('could not find code tag inside the pre element')
            return node
          }
          const languageProperty = codeTag.properties.class
          if (languageProperty == null || typeof languageProperty !== 'string') {
            console.warn('could not find class for codeTag that should represent its language', languageProperty)
            return node
          }
          const languagePrefix = 'language-'
          if (!languageProperty.startsWith(languagePrefix)) {
            console.warn('the found class does not represent a language', languageProperty);
            return node
          }

          const language = languageProperty.replace(languagePrefix, '')
          const languageTag: Text = {
            type: 'text',
            value: language
          }

          const codeBadge: Element = {
            type: 'element',
            tagName: 'span',
            properties: {
              'class': 'language-badge'
            },
            children: [languageTag]
          }
          return {
            ...node,
            children: [codeBadge, ...node.children]
          }
        }
      }
    ]
  }
})

const assumeIsAnElement = (element: ElementContent): element is Element => {
  return element != null &&
    element.type === 'element'
}