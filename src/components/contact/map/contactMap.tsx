import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  return (
    <div className="mx-auto">
      <h1 className="font-[Almarai] font-bold text-4xl md:text-5xl lg:text-6xl text-darkBlue mb-7 md:mb-10 text-center">
        عنوان <span className="text-lightBlue">شركتنا</span>
      </h1>
      <MapContainer
        center={[21.58, 39.167]}
        zoom={13.5}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[21.58, 39.167]}
          icon={
            new Icon({
              iconUrl:
                "https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/leaf-red.png",
              shadowUrl:
                "https://github.com/DATA-Container-100/hotel-data-imgs/blob/main/anchor-shadow.png?raw=true",
              iconSize: [38, 95],
              shadowSize: [50, 64],
              iconAnchor: [22, 94],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -76],
            })
          }
        >
          <Popup>Our Position</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
