"use client";

import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { changeCount } from "./cart.actions";
import { toast } from "sonner";
import { CartContext } from "@/_services/CartContext";

// isIncrement is optional, default = false
export default function ChangeCountBtn({
  isIncrement = false,
  id,
  newCount,
}: {
  isIncrement?: boolean;
  id: string;
  newCount: number;
}) {
  const { updateCartCount } = useContext(CartContext);

  async function handleChangeCount() {
    try {
      const output = await changeCount(id, newCount);

      if (output == null) {
        toast.error("An error occurred while updating count");
      } else {
        toast.success(`Product count is now ${newCount}`);
        updateCartCount(output);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  }

  return (
    <div>
      <Button
        className="cursor-pointer"
        disabled={newCount == 0}
        onClick={handleChangeCount}
      >
        {isIncrement ? "+" : "-"}
      </Button>
    </div>
  );
}
