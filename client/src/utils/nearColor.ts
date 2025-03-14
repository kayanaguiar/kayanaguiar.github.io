const colors = [
    { name: "green", hex: "#00C12B" },
    { name: "red", hex: "#F50606" },
    { name: "yellow", hex: "#F5DD06" },
    { name: "orange", hex: "#F57906" },
    { name: "lightblue", hex: "#06CAF5" },
    { name: "blue", hex: "#063AF5" },
    { name: "purple", hex: "#7D06F5" },
    { name: "pink", hex: "#F506A4" },
    { name: "white", hex: "#FFFFFF" },
    { name: "black", hex: "#000000" },
  ];
  
  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    hex = hex.replace('#', '');
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
    };
  }
  
  export function getClosestColor(hex: string): string {
    const inputRgb = hexToRgb(hex);
    let closestColor = colors[0];
    let minDistance = Infinity;
  
    for (let color of colors) {
      const colorRgb = hexToRgb(color.hex);
      const distance = Math.sqrt(
        Math.pow(inputRgb.r - colorRgb.r, 2) +
        Math.pow(inputRgb.g - colorRgb.g, 2) +
        Math.pow(inputRgb.b - colorRgb.b, 2)
      );
  
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }
    return closestColor.name;
  }
  
  