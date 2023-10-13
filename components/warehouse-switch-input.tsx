"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Warehouse } from "@/lib/types";
import { useRouter } from "next/navigation";

const warehouses = [
  {
    value: "A",
    label: "Ladu A",
  },
  {
    value: "B",
    label: "Ladu B",
  },
  {
    value: "C",
    label: "Ladu C",
  },
  {
    value: "D",
    label: "Ladu D",
  },
  {
    value: "E",
    label: "Ladu E",
  },
  {
    value: "F",
    label: "Ladu F",
  },
  {
    value: "G",
    label: "Ladu G",
  },
  {
    value: "H",
    label: "Ladu H",
  },
  {
    value: "I",
    label: "Ladu I",
  },
  {
    value: "J",
    label: "Ladu J",
  },
  {
    value: "K",
    label: "Ladu K",
  },
  {
    value: "L",
    label: "Ladu L",
  },
  {
    value: "M",
    label: "Ladu M",
  },
  {
    value: "N",
    label: "Ladu N",
  },
  {
    value: "O",
    label: "Ladu O",
  },
  {
    value: "P",
    label: "Ladu P",
  },
  {
    value: "Q",
    label: "Ladu Q",
  },
  {
    value: "R",
    label: "Ladu R",
  },
  {
    value: "S",
    label: "Ladu S",
  },
  {
    value: "T",
    label: "Ladu T",
  },
  {
    value: "U",
    label: "Ladu U",
  },
  {
    value: "V",
    label: "Ladu V",
  },
  {
    value: "W",
    label: "Ladu W",
  },
  {
    value: "X",
    label: "Ladu X",
  },
];

interface WarehouseSwitchInputProps {
  selectedWarehouse: Warehouse[];
}

export function WarehouseSwitchInput({
  selectedWarehouse,
}: WarehouseSwitchInputProps) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedWarehouse[0].warehouse);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[35px] justify-between text-white text-xs bg-blue-800 hover:text-black "
        >
          {value
            ? warehouses.find((warehouse) => warehouse.value === value)?.label
            : "Otsi nutiladu..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full h-[300px]">
          <CommandInput placeholder="Otsi sobiv nutiladu" className="text-xs" />
          <ScrollArea>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {warehouses.map((warehouse) => (
                <CommandItem
                  className="text-xs"
                  key={warehouse.value}
                  onSelect={(currentValue) => {
                    router.push(`/ladu/${warehouse.value}`);

                    setOpen(false);
                    console.log(currentValue, value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === warehouse.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {warehouse.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
