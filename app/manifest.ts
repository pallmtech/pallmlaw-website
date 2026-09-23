import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PallmLaw",
    short_name: "PallmLaw",
    description:
      "Workflow and firm-intelligence software for trusts and estates firms.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ed",
    theme_color: "#102c3d",
    icons: [
      {
        src: "/fc-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/fc-icon-large.png",
        sizes: "720x720",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
