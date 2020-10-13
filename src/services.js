// url API
const URL_BASE = 'https://dinkbit-api-quick-gelada-ua.mybluemix.net/'

// Users
const addUserMessageService = async (data) => {
  const response = await fetch(`${URL_BASE}users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const res = await response.json()
  return res
}

export {
  addUserMessageService,
}
