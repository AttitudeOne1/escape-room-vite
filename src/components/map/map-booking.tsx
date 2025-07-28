import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedQuestPlace, setSelectedQuestPlaceId } from '../../store/booking-data/booking-data-slice';
import { BookingInfoList } from '../../types/types';
import { getSelectedQuestPlace } from '../../store/booking-data/booking-data-selectors';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';

type MapBookingProps = {
  questLocations?: BookingInfoList;
  latitude: number;
  longitude: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42],
});

function MapBooking({ questLocations, latitude, longitude }: MapBookingProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector(getSelectedQuestPlace);

  return (
    <div className="booking-map">
      <div className="map">
        <MapContainer
          className="map__container"
          center={[latitude, longitude]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {questLocations &&
              questLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.location.coords}
                  icon={
                    selectedLocation && selectedLocation?.id === location.id
                      ? currentCustomIcon
                      : defaultCustomIcon
                  }
                  eventHandlers={{
                    click: () => {
                      dispatch(setSelectedQuestPlace(location));
                      dispatch(setSelectedQuestPlaceId(location.id));
                    },
                  }}
                >
                </Marker>
              ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapBooking;
