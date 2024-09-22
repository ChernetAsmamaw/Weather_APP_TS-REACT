import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Use a custom image for the marker (You can replace this with your own image URL)
const locationIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32], 
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

export const CityMap = ({ lat, lon, name }: { lat: number; lon: number; name: string }) => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{
          height: '400px',
          width: '100%',
          border: '2px solid #f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={locationIcon}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
