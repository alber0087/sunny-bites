import { useState, useEffect } from "react"

function useMap() {
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

    useEffect(() => {
      const startPosition = async () => {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
          }
        )
      }
      startPosition()
    }, [])

  useEffect(() => {
    fetchSites()
  }, [coordinates, bounds])
}

export default useMap