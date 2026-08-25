"use client";

import { useState } from "react";
import { SlabCard } from "./SlabCard";
import { SlabViewerModal } from "./SlabViewerModal";
import type { SlabData } from "./slab-utils";

/** Renders a grid of SlabCards that open the fullscreen viewer on click. */
interface SlabGalleryProps {
  cards: SlabData[];
  className?: string;
}

export function SlabGallery({ cards, className = "" }: SlabGalleryProps) {
  const [openSlab, setOpenSlab] = useState<SlabData | null>(null);

  return (
    <>
      <div className={className}>
        {cards.map((card) => (
          <SlabCard key={card.certNumber} {...card} onClick={() => setOpenSlab(card)} />
        ))}
      </div>
      <SlabViewerModal slab={openSlab} onClose={() => setOpenSlab(null)} />
    </>
  );
}
