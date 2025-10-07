design a typescript object which photoshop psd can port to

---

Here's a TypeScript interface design that represents a Photoshop PSD structure for data porting:

```typescript
interface RGBColor {
  r: number;
  g: number;
  b: number;
  a?: number; // Alpha channel (0-1)
}

interface LayerBounds {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

interface TextLayerContent {
  type: "text";
  text: string;
  font: {
    family: string;
    size: number;
    color: RGBColor;
  };
  paragraph?: {
    alignment: "left" | "center" | "right" | "justify";
  };
}

interface ShapeLayerContent {
  type: "shape";
  shapeType: "rectangle" | "ellipse" | "polygon" | "path";
  fill: RGBColor;
  stroke?: {
    color: RGBColor;
    width: number;
  };
}

interface ImageLayerContent {
  type: "image";
  src: string; // Base64 encoded image data or URL
  resolution: {
    width: number;
    height: number;
  };
}

interface Layer {
  id: string;
  name: string;
  visible: boolean;
  opacity: number;
  blendingMode: string;
  bounds: LayerBounds;
  locked: boolean;
  content: TextLayerContent | ShapeLayerContent | ImageLayerContent;
  layerEffects?: LayerEffects;
  children?: Layer[]; // For group layers
}

interface LayerEffects {
  dropShadow?: {
    color: RGBColor;
    opacity: number;
    angle: number;
    distance: number;
    size: number;
  };
  gradientOverlay?: {
    colors: RGBColor[];
    angle: number;
    style: "linear" | "radial";
  };
  stroke?: {
    color: RGBColor;
    size: number;
    position: "inside" | "outside" | "center";
  };
}

interface PhotoshopDocument {
  version: "1.0";
  metadata: {
    width: number;
    height: number;
    resolution: number;
    colorMode: "rgb" | "cmyk" | "grayscale";
    backgroundColor: RGBColor;
  };
  layers: Layer[];
  exportSettings?: {
    format: "png" | "jpeg" | "svg";
    quality?: number; // 0-100 for JPEG
    scale: number;
  };
}

// Example usage:
const examplePSD: PhotoshopDocument = {
  version: "1.0",
  metadata: {
    width: 1920,
    height: 1080,
    resolution: 300,
    colorMode: "rgb",
    backgroundColor: { r: 255, g: 255, b: 255 },
  },
  layers: [
    {
      id: "bg-layer",
      name: "Background",
      visible: true,
      opacity: 1,
      blendingMode: "normal",
      locked: true,
      bounds: {
        top: 0,
        left: 0,
        right: 1920,
        bottom: 1080,
        width: 1920,
        height: 1080,
      },
      content: {
        type: "shape",
        shapeType: "rectangle",
        fill: { r: 255, g: 255, b: 255 },
      },
    },
    {
      id: "text-layer-1",
      name: "Title Text",
      visible: true,
      opacity: 1,
      blendingMode: "normal",
      locked: false,
      bounds: {
        top: 100,
        left: 200,
        right: 800,
        bottom: 200,
        width: 600,
        height: 100,
      },
      content: {
        type: "text",
        text: "Hello World",
        font: {
          family: "Arial",
          size: 72,
          color: { r: 0, g: 0, b: 0 },
        },
        paragraph: {
          alignment: "center",
        },
      },
      layerEffects: {
        dropShadow: {
          color: { r: 0, g: 0, b: 0, a: 0.5 },
          opacity: 0.75,
          angle: 45,
          distance: 5,
          size: 10,
        },
      },
    },
  ],
  exportSettings: {
    format: "png",
    scale: 1,
  },
};
```

Key features of this design:

1. **Document Structure**:

   - Versioning for future compatibility
   - Document metadata (dimensions, color mode, etc.)
   - Nested layer system supporting groups

2. **Layer Support**:

   - Common properties (opacity, visibility, blending modes)
   - Bounding box information
   - Layer effects (drop shadows, strokes, etc.)
   - Support for different layer types (text, shapes, images)

3. **Type Safety**:

   - Discriminated unions for different layer types
   - Optional properties for flexibility
   - Strict typing for colors and measurements

4. **Export Configuration**:
   - Pre-configured export settings
   - Quality controls for different formats
   - Scaling options

This interface can be used to:

- Serialize PSD information to JSON
- Generate previews of PSD structures
- Implement PSD exporters
- Create PSD-like documents programmatically
- Interface with Photoshop scripting

You might want to extend this based on specific needs:

- Add more blending modes
- Include adjustment layers
- Add smart object support
- Include path data for vector layers
- Add layer compression information
