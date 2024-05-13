import { EditBeerScreen } from "@/screen/edit";
import React from "react";

export default async function EditBeerPage({
  params,
}: {
  params: { id: string };
}) {
  return <EditBeerScreen />;
}
