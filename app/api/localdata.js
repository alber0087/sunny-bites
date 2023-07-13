export default async function handler(req, res) {
  const data = {
    'name': 'la taberna'
  }
  res.status(200).json(data)
}