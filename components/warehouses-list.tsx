import supabase from "@/lib/supabase";
import { Warehouse } from "@/lib/types";
import { Separator } from "./ui/separator";
import { DataTable } from "@/app/(warehouses)/ladu/[warehouse]/data-table";
import { columns } from "@/app/(warehouses)/ladu/[warehouse]/columns";

const WarehousesList = async () => {
  let { data: warehouses, error } = await supabase
    .from("warehouses")
    .select("*");

  return (
    <div className="w-[1300px] mx-auto pb-16">
      <div className="grid grid-cols-3 gap-x-8 ">
        <div className="col-span-2 bg-white pt-12 px-12">
          <DataTable columns={columns} data={warehouses ? warehouses : []} />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-9xl font-bold text-slate-900/50 text-end">
              20
            </h1>
            <span className="text-end">Nutiladu</span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-9xl font-bold text-slate-900/50 text-end">
              42
            </h1>
            <span className="text-end">Parkimiskohta</span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-9xl font-bold text-slate-900/50 text-end">4</h1>
            <span className="text-end">Kontor + ladu</span>
          </div>
          <Separator className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default WarehousesList;
