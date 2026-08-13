/** Builds the prefilled prompt used by the "Open in v0 / ChatGPT / Claude" doc-page links. */
export function buildAskAiPrompt(pageUrl: string): string {
  return `I'm looking at this DGA registry documentation: ${pageUrl}.\nHelp me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.\n  `
}
