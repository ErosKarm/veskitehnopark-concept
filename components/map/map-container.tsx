"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/lib/supabase";
import { Warehouse } from "@/lib/types";

import MapContainerFrontView from "./map-container-front-view";
import MapContainerBackView from "./map-container-back-view";
import MapViewSwitch from "./map-view-switch";
import MapContainerFrontViewHitBoxes from "./map-container-front-view-hitboxes";
import MapContainerBackViewHitBoxes from "./map-container-back-view-hitboxes";
import MapWarehouseTooltip from "./map-warehouse-tooltip";

const MapContainer = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [viewType, setViewType] = useState<"front" | "back">("front");
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [toolTipLeft, setToolTipLeft] = useState<number | undefined>(undefined);
  const [toolTipTop, setToolTipTop] = useState<number | undefined>(undefined);
  const [selectedWarehouse, setSelectedWarehouse] = useState<
    Warehouse | undefined
  >(undefined);

  useEffect(() => {
    const getWarehouses = async () => {
      const { data, error } = await supabase.from("warehouses").select("*");
      if (data) {
        setWarehouses(data);
      }
    };

    getWarehouses();
  }, []);

  const showToolTip = (e: any) => {
    const selectedWarehouse = warehouses?.find(
      (warehouse) => warehouse.warehouse === e.target.getAttribute("data-id")
    );
    setSelectedWarehouse(selectedWarehouse);
    if (selectedWarehouse?.availability === true) {
      e.target.classList.add("available");
    } else {
      e.target.classList.add("unavailable");
    }
    if (viewType === "front") {
      setToolTipTop(selectedWarehouse?.frontTop);
      setToolTipLeft(selectedWarehouse?.frontLeft);
    } else {
      setToolTipTop(selectedWarehouse?.backTop);
      setToolTipLeft(selectedWarehouse?.backLeft);
    }

    setIsTooltipVisible(true);
  };

  const onMouseLeave = (e: any) => {
    e.target.classList.remove("available");
    e.target.classList.remove("unavailable");

    setIsTooltipVisible(false);
  };

  return (
    <section>
      <div className="testing relative overflow-hidden transform scale-95">
        {viewType === "front" ? (
          <Image
            src={"/veski-frontview.webp"}
            alt="veski front"
            width={1920}
            height={1080}
          />
        ) : (
          <Image
            src={"/veski-backview.webp"}
            alt="veski front"
            width={1920}
            height={1080}
          />
        )}

        <MapWarehouseTooltip
          warehouse={selectedWarehouse ? selectedWarehouse : undefined}
          visible={isTooltipVisible}
          setVisible={setIsTooltipVisible}
          top={toolTipTop ? toolTipTop : undefined}
          left={toolTipLeft ? toolTipLeft : undefined}
        />
        <MapViewSwitch setViewType={setViewType} viewType={viewType} />

        <svg
          viewBox="0 0 1920 1080"
          className="svg z-10 absolute top-0 border-box"
          width={1080}
          height={1920}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio=""
        >
          {viewType === "front" ? (
            <>
              <MapContainerFrontView
                warehouses={warehouses}
                showToolTip={showToolTip}
                onMouseLeave={onMouseLeave}
              />
            </>
          ) : (
            <>
              <MapContainerBackView
                showToolTip={showToolTip}
                onMouseLeave={onMouseLeave}
              />
            </>
          )}
        </svg>

        {viewType === "front" ? (
          <MapContainerFrontViewHitBoxes warehouses={warehouses} />
        ) : (
          <MapContainerBackViewHitBoxes warehouses={warehouses} />
        )}

        <div
          style={{ left: "calc(50% - 300px)" }}
          className="absolute flex items-center justify-center text-white bottom-4  w-[600px] h-[100px]"
        >
          <span className="text-3xl font-semibold">Vali endale sobiv ladu</span>
        </div>
      </div>
    </section>
  );
};

export default MapContainer;
