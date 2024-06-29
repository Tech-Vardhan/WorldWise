import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();

  const lat = serchParams.get("lat");
  const lng = serchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <button onClick={() => setSearchParams({ lat: lat, lng: lng })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
