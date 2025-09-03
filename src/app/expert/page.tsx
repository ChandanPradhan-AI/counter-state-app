import ExpertAppComp from "@/components/ExpertAppComp";
import { Card, CardHeader } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert | Counter App",
  description: "Expert Counter App",
};

const page = () => {
  return (
    <section className="grid h-[85dvh] place-items-center">
      <Card className="w-xs p-4">
        <CardHeader className="text-center text-lg font-semibold lg:text-xl">
          Expert Counter App
        </CardHeader>
        <ExpertAppComp />
      </Card>
    </section>
  );
};

export default page;
