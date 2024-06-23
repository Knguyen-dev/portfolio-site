interface ITagChipProps {
  tag: string;
}
export default function TagChip({ tag }: ITagChipProps) {
  return (
    <div className="tw-rounded-full tw-bg-teal-400/10 tw-px-3 tw-py-1 tw-text-xs tw-text-slate-300">
      {tag}
    </div>
  );
}
