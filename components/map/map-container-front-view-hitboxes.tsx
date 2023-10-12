import { Warehouse } from "@/lib/types";
import MapHitbox from "./map-hitbox";

interface MapContainerFrontViewHitBoxesProps {
  warehouses: Warehouse[];
}

const MapContainerFrontViewHitBoxes = ({
  warehouses,
}: MapContainerFrontViewHitBoxesProps) => {
  return (
    <div className="absolute z-0 top-0 h-full w-full ">
      {warehouses.map((warehouse) => (
        <MapHitbox
          key={warehouse.id}
          left={warehouse.frontLeft}
          top={warehouse.frontTop}
          available={warehouse.availability}
        />
      ))}
    </div>
  );
};

export default MapContainerFrontViewHitBoxes;
