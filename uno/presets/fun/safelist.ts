import { styleProps } from '#root/directives/style'
import { getVarsClasses } from '#root/utils/getVarsClasses'

export const safelist = [
  // vars for each supported property
  ...styleProps.flatMap((p: string) => getVarsClasses(p).split(' ')),
]
