"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./column";

interface OrderClinetProps {
  data: OrderColumn[];
}

export const Orderclient: React.FC<OrderClinetProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data?.length})`}
        description="Manage billboards for you store"
      />
      <Separator />
      <DataTable searchKey="product" columns={columns} data={data} />
    </>
  );
};
