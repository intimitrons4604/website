export const Feature = Object.freeze({
  StaticContactForm: 'static-contact-form',
})

export function useFeatureFlag(feature) {
  switch (feature) {
    case Feature.StaticContactForm:
      return true
    default:
      return false
  }
}
