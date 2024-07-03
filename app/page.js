'use client'
import React from 'react'
import { GoogleMap, HeatmapLayer, useJsApiLoader ,Marker} from '@react-google-maps/api'

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
    libraries: ['visualization']
  })

  const data ={ lat: 37.782, lng: -122.445}
  const [map, setMap] = React.useState(null)
  const heat = [
    { lat: 37.782, lng: -122.445},
    { lat: 37.782, lng: -122.443 },
    { lat: 37.782, lng: -122.441 },
  ]
   

  if (!isLoaded) {
    return <div>Loading...please wait</div>
  }

  return (
    <main className="w-screen h-screen">
    <GoogleMap mapContainerStyle={{position:'relative', width: '100%', height: '100%' }}
      center={data} 
      zoom={13} 
      onLoad={(map) =>setMap(map)} 

      >
        {map && 
        <>
        <HeatmapLayer 
        data={heat.map((heat) =>( 
          new window.google.maps.LatLng(heat.lat, heat.lng)))}
          options={
            { 

              radius: 20,
              opacity: 0.6
            }
          } 
        
        />
        <Marker position={heat} />
        </>
}
      </GoogleMap>
    </main>
  )
}
