import WarehouseSection from "@/components/warehouse-section";
import WarehousesList from "@/components/warehouses-list";
import supabase from "@/lib/supabase";
import { Warehouse } from "@/lib/types";
import { ChevronDown, ChevronsDown } from "lucide-react";
import { useEffect } from "react";

const WarehousePage = async ({ params }: { params: { warehouse: string } }) => {
  let { data: selectedWarehouse, error } = await supabase
    .from("warehouses")
    .select("*")
    .eq("warehouse", params.warehouse);

  return (
    <>
      <div className="bg-blue-700 text-white h-full w-full">
        <WarehouseSection
          selectedWarehouse={selectedWarehouse ? selectedWarehouse : []}
        />
      </div>

      <div className="h-full w-full">
        <WarehousesList />
      </div>
    </>
  );
};

export default WarehousePage;
