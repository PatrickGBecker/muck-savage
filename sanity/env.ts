export const apiVersion ='2024-01-01'

export const dataset = 'production'

export const projectId = 'i4469zmy'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
