export const FormSubmissionStatus = Object.freeze({
  None: 'none',
  Error: 'error',
  Success: 'success',
})

export async function submitForm({ firstName, lastName, email, message }) {
  const formData = new FormData()
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('email', email)
  formData.append('message', message)

  let json
  try {
    const response = await fetch(
      'https://legacy-api.intimitrons.ca/sendmail.php',
      {
        method: 'POST',
        body: formData,
      }
    )
    if (response.status !== 200) {
      return {
        success: false,
      }
    }

    json = await response.json()
  } catch (e) {
    return {
      success: false,
    }
  }

  if (json.status !== 'success') {
    return {
      success: false,
      errorMessage: json.message,
    }
  }

  return {
    success: true,
  }
}
