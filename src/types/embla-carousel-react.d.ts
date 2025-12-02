declare module "embla-carousel-react" {
  export type EmblaCarouselType = {
    scrollSnapList(): number[];
    scrollNext: () => void;
    scrollPrev: () => void;
    canScrollNext: () => boolean;
    canScrollPrev: () => boolean;
    reInit: () => void;
    on: (event: string, callback: () => void) => void;
    off: (event: string, callback: () => void) => void;

    selectedScrollSnap: () => number;
    scrollTo: (index: number) => void;
  };

  export type UseEmblaCarouselType = [
    (node: HTMLElement | null) => void,
    EmblaCarouselType | undefined 
  ];

  export interface EmblaCarouselOptions {
    align?: string;
    loop?: boolean;
    speed?: number;
    axis?: "x" | "y"; 
  }

  export default function useEmblaCarousel(
    options?: EmblaCarouselOptions,
    plugins?: unknown[]
  ): UseEmblaCarouselType;
}
