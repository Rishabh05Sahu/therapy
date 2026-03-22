type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-white/15 bg-white/5 p-8 text-center">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm text-white/65">{description}</p>
      ) : null}
    </div>
  );
}