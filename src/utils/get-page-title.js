import defaultSettings from '@/settings'

const title = defaultSettings.title || '运营中心'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
