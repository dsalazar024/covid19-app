import React, { useEffect, useState } from 'react';
import { MapContainer, Polygon, TileLayer, LeafletMap } from 'react-leaflet';
import styles from './Map.css';
import cx from 'classname';
import 'leaflet/dist/leaflet';
import axios from 'axios';

import { statesData } from './DataMap';

const center = [42.74987892882552, -100.77589407515015];

const Map = () => {

  const [listInfoCurrent, setCurrentData] = useState({});

  return (
    <div className="map">
      <MapContainer center={center} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

export default Map;