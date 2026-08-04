export function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    ),
  );
}
