import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { Billboardclient } from "./components/client";
import { BillboardColumn } from "./components/column";

const Billboardspage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedBillboard: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Billboardclient data={formattedBillboard} />
      </div>
    </div>
  );
};

export default Billboardspage;
