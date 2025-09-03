import AdvancedAppComp from "@/components/AdvancedAppComp";
import { Card, CardHeader } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced | Counter App",
  description: "Advanced Counter App",
};
const page = () => {
  return (
    <section className="grid h-[85dvh] place-items-center">
      <Card className="w-xs p-4">
        <CardHeader className="text-center text-lg font-semibold lg:text-xl">
          Advanced Counter App
        </CardHeader>
        <AdvancedAppComp />
      </Card>
    </section>
  );
};

export default page;
