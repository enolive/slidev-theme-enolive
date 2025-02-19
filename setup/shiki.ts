import type {ShikiSetupReturn} from '@slidev/types'
import {defineShikiSetup} from '@slidev/types'
import type {Element, Text} from 'hast'

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
          if (!assumeIsAnElement(codeTag)) {
            console.warn('could not find code tag inside the pre element')
            return node
          }
          const languageProperty = codeTag.properties.class
          if (languageProperty == null || typeof languageProperty !== 'string') {
            console.warn('could not class for codeTag that should represent its language', languageProperty)
            return node
          }
          const languagePrefix = 'language-'
          if (!languageProperty.startsWith(languagePrefix)) {
            console.warn('the found class does not represent a language', languagePrefix);
          }

          const language = languageProperty.replace('language-', '')
          const languageTag: Text = {
            type: 'text',
            value: language
          }

          const codeBadge: Element = {
            type: 'element',
            tagName: 'span',
            properties: {
              'class': 'lang'
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

const assumeIsAnElement = (element: unknown): element is Element => {
  return element != null &&
    typeof element === 'object' &&
    element['tagName'] != null &&
    typeof element['tagName'] == 'string' &&
    element['properties'] != null &&
    typeof element['properties'] == 'object'
}