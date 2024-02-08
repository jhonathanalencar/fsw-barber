"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="min-w-full h-fit max-w-full rounded-2xl">
      <CardContent className="p-0">
        <div className="h-[159px] w-full relative">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="flex gap-1 items-center opacity-90"
            >
              <StarIcon size={12} className="text-primary fill-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-2xl p-1"
          />
        </div>

        <div className="px-3 pb-3">
          <h2 className="font-bold mt-2 text-nowrap overflow-hidden text-ellipsis">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            className="w-full mt-3"
            variant="secondary"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
