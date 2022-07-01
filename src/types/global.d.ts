import { type } from "os";

export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  interface HiddenObject {
    x: number;
    y: number;
    rotation: number;
    scale: number;
    opacity: number;
  };

  type HiddenObjectProperties = "x" | "y" | "rotation" | "scale" | "opacity";
}