"use client";

import { Button } from "@/components/ui/button";
import { Warehouse } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight, ArrowUpDown } from "lucide-react";
import Link from "next/link";

export type TableWarehouse = {
  ladu: string;
  squaremeters: number;
  price: number;
  status: boolean;
};

export const columns: ColumnDef<TableWarehouse>[] = [
  {
    accessorKey: "warehouse",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs"
        >
          Ladu
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const warehouse = row.getValue("warehouse");

      return (
        <div className="ml-4 font-semibold text-[14px] text-blue-900">{`${warehouse}`}</div>
      );
    },
  },
  {
    accessorKey: "squaremeters",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs"
        >
          Ruutmeetrid
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const squaremeters = row.getValue("squaremeters");

      return <div className="ml-4">{`${squaremeters}`}m²</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs"
        >
          Hind
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(price);

      return <div className="ml-4">{formatted}</div>;
    },
  },
  {
    accessorKey: "availability",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs"
        >
          Saadavus
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const availability = row.getValue("availability");

      return (
        <div className="ml-4">
          <span
            className={cn(
              "text-semibold text-[10px] font-semibold",
              availability === true ? "text-green-500" : "text-red-500"
            )}
          >
            {availability === true ? "SAADAVAL" : "HÕIVATUD"}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "warehouse",
    header: "",

    cell: ({ row }) => {
      const warehouse = row.getValue("warehouse");

      return (
        <div className="flex justify-center align-center text-xs">
          <Link href={`/ladu/${warehouse}`} className="flex items-center">
            Vaata lähemalt <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      );
    },
  },
];
