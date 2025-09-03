import BasicAppComp from "@/components/BasicAppComp";
import { Card, CardHeader } from "@/components/shadcnui/card";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic | Counter App",
  description: "Basic Counter App",
};

const page = () => {
  return (
    <>
      <section className="grid h-[85dvh] place-items-center">
        <Card className="w-xs p-4">
          <CardHeader className="text-center text-lg font-semibold lg:text-xl">
            Basic Counter App
          </CardHeader>
          <BasicAppComp />
        </Card>
      </section>
    </>
  );
};

export default page;
