"use client";
// Vendors
import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
// Components
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// Types
import type { FrameProps } from "./types/frame.container.types";

const FrameContainer = ({ frame }: FrameProps) => {
  const [selectedImage, setSelectedImage] = useState(
    frame.images[0]?.url || "",
  );

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 overflow-y-auto p-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        {selectedImage && (
          <Dialog>
            <DialogTrigger>
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
                <Image
                  alt={frame.name}
                  className="rounded-lg object-contain"
                  fill={true}
                  priority={true}
                  sizes="500px"
                  src={selectedImage}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="flex max-w-full items-center justify-center gap-0 overflow-auto border-none bg-black p-0 py-0 sm:h-dvh sm:rounded-none sm:py-0">
              <DialogTitle />
              <DialogDescription />
              <div className="relative h-full w-full">
                <Image
                  alt={frame.name}
                  className="object-contain"
                  fill={true}
                  sizes="100vw"
                  src={selectedImage}
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {frame.images.map((image) => (
              <CarouselItem key={image.id} className="basis-1/4 pl-4">
                <button
                  className="relative h-32 w-full cursor-pointer p-4"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    alt="Miniatura"
                    className="rounded-lg object-cover"
                    fill={true}
                    sizes="125px"
                    src={image.url}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Card className="max-w-auto p-0">
        <CardContent>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              {frame.name || "Untitled"}
            </h1>
            {frame.manufacturer && (
              <p className="text-muted-foreground text-lg">
                {frame.description}
              </p>
            )}
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold">Detalles</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>Número de referencia:</div>
              <div>{frame.reference}</div>
              {frame.material && (
                <>
                  <div>Material:</div>
                  <div>{frame.material.name}</div>
                </>
              )}
              <div>Ancho:</div>
              <div>{frame.width} mm</div>
              <div>Alto:</div>
              <div>{frame.height} mm</div>
              {frame.galce && (
                <>
                  <div>Galce:</div>
                  <div>{frame.galce} mm</div>
                </>
              )}
            </div>

            <Separator className="my-2" />

            <div>
              <h2 className="mb-2 font-semibold">Fechas</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>Creado el:</div>
                <div>
                  {format(new Date(frame.createdAt), "PPP", { locale: es })}
                </div>
                <div>Última actualización:</div>
                <div>
                  {format(new Date(frame.updatedAt), "PPP", { locale: es })}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { FrameContainer };
