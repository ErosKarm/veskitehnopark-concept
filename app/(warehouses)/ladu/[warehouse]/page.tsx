import WarehouseSection from "@/components/warehouse-section";
import supabase from "@/lib/supabase";
import { Warehouse } from "@/lib/types";
import { useEffect } from "react";

const WarehousePage = async ({ params }: { params: { warehouse: string } }) => {
  let { data: selectedWarehouse, error } = await supabase
    .from("warehouses")
    .select("*")
    .eq("warehouse", params.warehouse);

  return (
    <div className="bg-blue-700 text-white h-full w-full">
      <WarehouseSection
        selectedWarehouse={selectedWarehouse ? selectedWarehouse : []}
      />
    </div>
  );
};

export default WarehousePage;
