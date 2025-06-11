import type { Directive, DirectiveBinding } from 'vue'
import type { Responsive } from '../../types'
import { getStyleProps } from './getStyleProps'
import type { StyleProp } from './types'

type ResponsiveStyles = Record<StyleProp, Responsive>

export const styleProps: StyleProp[] = ['bg', 'ga', 'cols', 'rows', 'h']

const getStyle = (config: ResponsiveStyles, arg?: string): { classes: string, style: Record<string, string> } => {
  const styleConfig = arg ? { [arg]: config } : config

  const styles = Object.entries(styleConfig).reduce((acc, [prop, value]) => {
    if (!value || Object.keys(value).length === 0) return acc

    const { styles, classList } = getStyleProps(prop as StyleProp, value)

    return {
      classes: [...acc.classes, ...classList!],
      style: { ...acc.style, ...styles },
    }
  }, {
    classes: [],
    style: {},
  } as any)

  return { ...styles, classes: styles.classes.join(' ') }
}

const render = (el: HTMLElement, { arg, value }: DirectiveBinding<ResponsiveStyles>) => {
  if (!value) return

  const { classes, style } = getStyle(value, arg)

  if (!classes) return
  const variables = Object.entries(style)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')

  el.style.cssText += variables
  el.classList.add(...classes.split(' '))
}

const updated = (el: HTMLElement, binding: DirectiveBinding<ResponsiveStyles>, node: VNode, prevNode: VNode) => {
  const isSameValue = (binding.oldValue && JSON.stringify(binding.value) === JSON.stringify(binding.oldValue))
  const isSameClass = node.props?.class === prevNode.props?.class
  const isSameStyle = JSON.stringify(node.props?.style) === JSON.stringify(prevNode.props?.style)
  // Do not apply the directive if no changes were done on applied properties
  if (isSameValue && isSameClass && isSameStyle) return
  render(el, binding)
}

/**
 * Directive: v-style
 * @description
 * Generates UnoCSS classes and CSS variables based on responsive color config
 * It allows to automatically bind text, background color or class on certain resolution
 * @example
 * If classes supported by auto-infer
 * "titleColor": { "sm": "#656565e0", "md": "red", "lg": "blue" }
 * "titleBackground": { "sm": "#656565e0", "md": "red", "lg": "green" }
 * Multiple props: <div v-style="{ c: titleColor, bg: titleBackground }" />
 * Single prop: <div v-style:c="titleColor" />
 * If class has no support by auto-infer
 * "hiddenOnScreen": { "sm": true, "md": true }
 * Usage: <div v-style:hidden="hiddenOnScreen" />
 */
export const vStyle: Directive<HTMLElement> = {
  created: () => {},
  beforeMount: render,
  updated,
  getSSRProps({ arg, value }: DirectiveBinding<ResponsiveStyles>) {
    if (!value) return

    const { classes, style } = getStyle(value, arg)

    return {
      class: classes,
      style,
    }
  },
}
