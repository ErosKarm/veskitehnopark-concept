import { Warehouse } from "@/lib/types";
import MapHitbox from "./map-hitbox";

interface MapContainerBackViewHitBoxesProps {
  warehouses: Warehouse[];
}

const MapContainerBackViewHitBoxes = ({
  warehouses,
}: MapContainerBackViewHitBoxesProps) => {
  return (
    <div className="absolute z-0 top-0 h-full w-full ">
      {warehouses.map((warehouse) => (
        <MapHitbox
          key={warehouse.id}
          left={warehouse.backLeft}
          top={warehouse.backTop}
          available={warehouse.availability}
        />
      ))}
    </div>
  );
};

export default MapContainerBackViewHitBoxes;
