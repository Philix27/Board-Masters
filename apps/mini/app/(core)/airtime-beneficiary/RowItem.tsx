import { TextP } from "@repo/ui";

export function RowItem(props: { left: string; right: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={"text-card-foreground"}>{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
