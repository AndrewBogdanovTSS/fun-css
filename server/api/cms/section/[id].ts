export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, 'id')
  return await useStorage().getItem(`assets/server/cms/section/section-${id}.json`)
})
