import { vStyle } from '../../directives/style'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('style', vStyle)
})
