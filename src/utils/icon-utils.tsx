export function getIcon(iconId: string, resolution: number[]) {
  return `https://static.ui.com/fingerprint/ui/icons/${iconId}_${
    resolution?.[0] ?? null
  }x${resolution?.[1] ?? null}.png`;
}
