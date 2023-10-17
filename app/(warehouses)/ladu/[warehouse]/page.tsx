import WarehouseSection from "@/components/warehouse-section";
import WarehousesList from "@/components/warehouses-list";
import supabase from "@/lib/supabase";
import { Warehouse } from "@/lib/types";
import { ChevronDown, ChevronsDown } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const WarehousePage = async ({ params }: { params: { warehouse: string } }) => {
  let { data: selectedWarehouse, error } = await supabase
    .from("warehouses")
    .select("*")
    .eq("warehouse", params.warehouse);

  return (
    <>
      <div className="text-white bg-blue-700 w-full relative">
        <div className="bg-[url('/noise.png')] w-full opacity-[3%] z-[0] absolute top-0 "></div>
        <WarehouseSection
          selectedWarehouse={selectedWarehouse ? selectedWarehouse : []}
        />
      </div>

      <div className="h-fit w-full bg-slate-100">
        <WarehousesList />
      </div>
    </>
  );
};

export default WarehousePage;
