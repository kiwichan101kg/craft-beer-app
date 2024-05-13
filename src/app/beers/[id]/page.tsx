import { BeerScreen } from "@/screen/beer";
import React from "react";

export default async function BeerPage({ params }: { params: { id: string } }) {
  console.log("LOG😀", params.id);

  return <BeerScreen />;
}
