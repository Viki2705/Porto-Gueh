import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

type ToggleAttributeProps = (
  attribute: string,
  value: string,
  tag?: keyof HTMLElementTagNameMap,
  remove?: boolean,
) => void

const toggleDocumentAttribute: ToggleAttributeProps = (
  attribute,
  value,
  tag = 'html',
  remove,
): void => {
  if (!document.body) return
  const element = document.getElementsByTagName(tag)[0]
  const hasAttribute = element?.hasAttribute(attribute)
  if (remove && hasAttribute) {
    element?.removeAttribute(attribute)
  } else element?.setAttribute(attribute, value)
}

type LayoutType = {
  theme: 'light' | 'dark'
}

const defaultConfig: LayoutType = {
  theme: 'dark',
}

export const useLayoutStore = defineStore('layout_store', () => {
  const layout = useLocalStorage<LayoutType>('ovro_vue_layout_store', defaultConfig)

  const setTheme = (nTheme: LayoutType['theme']) => {
    layout.value.theme = nTheme
    toggleDocumentAttribute('class', nTheme === 'dark' ? 'body1' : 'body1 light-mode', 'body')
  }

  const reset = () => {
    setTheme(defaultConfig.theme)
  }

  const init = () => {
    setTheme(layout.value.theme)
  }

  return {
    layout,
    setTheme,
    reset,
    init,
  }
})
