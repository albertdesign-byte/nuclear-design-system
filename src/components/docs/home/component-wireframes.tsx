import { Skeleton } from "@/components/skeleton";
import { cn } from "@/lib/utils";

const wireframeTone =
  "bg-[var(--color-border-subtle)]";

function WireframeFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[12.5rem] flex-col items-center justify-center gap-[var(--space-stack-xs)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function ButtonWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-28)] w-[4.5rem] rounded-[var(--radius-button)]", wireframeTone)} />
      <Skeleton className={cn("size-[var(--spacing-28)] rounded-[var(--radius-button)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function CheckboxWireframe() {
  return (
    <WireframeFrame className="items-start">
      {[0, 1, 2].map((item) => (
        <div key={item} className="flex items-center gap-[var(--space-inline-xs)]">
          <Skeleton className={cn("size-[var(--spacing-16)] rounded-[var(--radius-sm)]", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-12)] w-[5rem]", wireframeTone)} />
        </div>
      ))}
    </WireframeFrame>
  );
}

function InputWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-12)] w-[4rem]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-32)] w-full rounded-[var(--radius-input)]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-12)] w-[5.5rem]", wireframeTone)} />
    </WireframeFrame>
  );
}

function LabelWireframe() {
  return (
    <WireframeFrame className="items-start">
      <Skeleton className={cn("h-[var(--spacing-12)] w-[3.5rem]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-32)] w-full rounded-[var(--radius-input)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function RadioGroupWireframe() {
  return (
    <WireframeFrame className="items-start">
      {[0, 1].map((item) => (
        <div key={item} className="flex items-center gap-[var(--space-inline-xs)]">
          <Skeleton className={cn("size-[var(--spacing-16)] rounded-full", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-12)] w-[4.5rem]", wireframeTone)} />
        </div>
      ))}
    </WireframeFrame>
  );
}

function SelectWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-32)] w-full rounded-[var(--radius-input)]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-32)] w-full rounded-[var(--radius-input)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function SwitchWireframe() {
  return (
    <WireframeFrame className="items-start">
      {[0, 1].map((item) => (
        <div key={item} className="flex w-full items-center justify-between gap-[var(--space-inline-sm)]">
          <Skeleton className={cn("h-[var(--spacing-12)] w-[4rem]", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-20)] w-[2.25rem] rounded-full", wireframeTone)} />
        </div>
      ))}
    </WireframeFrame>
  );
}

function TextareaWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-12)] w-[3rem]", wireframeTone)} />
      <Skeleton className={cn("h-[4.5rem] w-full rounded-[var(--radius-input)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function AlertWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("w-full rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-sm)]")}>
        <Skeleton className={cn("mb-[var(--space-stack-xs)] h-[var(--spacing-12)] w-[3rem]", wireframeTone)} />
        <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
        <Skeleton className={cn("mt-[var(--space-stack-xs)] h-[var(--spacing-12)] w-[70%]", wireframeTone)} />
      </div>
    </WireframeFrame>
  );
}

function AvatarWireframe() {
  return (
    <WireframeFrame className="flex-row gap-[var(--space-inline-sm)]">
      <Skeleton className={cn("size-[var(--spacing-36)] rounded-full", wireframeTone)} />
      <div className="flex flex-col gap-[var(--space-stack-xs)]">
        <Skeleton className={cn("h-[var(--spacing-12)] w-[4rem]", wireframeTone)} />
        <Skeleton className={cn("h-[var(--spacing-12)] w-[3rem]", wireframeTone)} />
      </div>
    </WireframeFrame>
  );
}

function BadgeWireframe() {
  return (
    <WireframeFrame className="flex-row flex-wrap justify-center gap-[var(--space-inline-xs)]">
      <Skeleton className={cn("h-[var(--spacing-20)] w-[3rem] rounded-full", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-20)] w-[4rem] rounded-full", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-20)] w-[2.5rem] rounded-full", wireframeTone)} />
    </WireframeFrame>
  );
}

function CardWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]")}>
        <Skeleton className={cn("h-[var(--spacing-28)] w-full rounded-none", wireframeTone)} />
        <div className="space-y-[var(--space-stack-xs)] p-[var(--space-inline-sm)]">
          <Skeleton className={cn("h-[var(--spacing-12)] w-[60%]", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-12)] w-[80%]", wireframeTone)} />
        </div>
      </div>
    </WireframeFrame>
  );
}

function ChipWireframe() {
  return (
    <WireframeFrame className="flex-row flex-wrap justify-center gap-[var(--space-inline-xs)]">
      {[3.5, 4.5, 3].map((width) => (
        <Skeleton
          key={width}
          className={cn("h-[var(--spacing-24)] rounded-full", wireframeTone)}
          style={{ width: `${width}rem` }}
        />
      ))}
    </WireframeFrame>
  );
}

function SkeletonWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-12)] w-[85%]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-28)] w-full rounded-[var(--radius-md)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function SpinnerWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("size-[var(--spacing-32)] rounded-full", wireframeTone)} />
    </WireframeFrame>
  );
}

function StageFlowBadgeWireframe() {
  return (
    <WireframeFrame className="flex-row flex-wrap justify-center gap-[var(--space-inline-xs)]">
      <Skeleton className={cn("h-[var(--spacing-24)] w-[3.5rem] rounded-[var(--radius-sm)]", wireframeTone)} />
      <Skeleton className={cn("size-[var(--spacing-16)] rounded-full", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-24)] w-[4rem] rounded-[var(--radius-sm)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function TableWireframe() {
  return (
    <WireframeFrame>
      <div className="w-full space-y-[var(--space-stack-xs)]">
        <Skeleton className={cn("h-[var(--spacing-20)] w-full rounded-[var(--radius-sm)]", wireframeTone)} />
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid grid-cols-3 gap-[var(--space-inline-xs)]">
            <Skeleton className={cn("h-[var(--spacing-12)]", wireframeTone)} />
            <Skeleton className={cn("h-[var(--spacing-12)]", wireframeTone)} />
            <Skeleton className={cn("h-[var(--spacing-12)]", wireframeTone)} />
          </div>
        ))}
      </div>
    </WireframeFrame>
  );
}

function TabsWireframe() {
  return (
    <WireframeFrame>
      <div className="flex w-full gap-[var(--space-inline-xs)]">
        <Skeleton className={cn("h-[var(--spacing-24)] w-[3rem] rounded-[var(--radius-sm)]", wireframeTone)} />
        <Skeleton className={cn("h-[var(--spacing-24)] w-[3.5rem] rounded-[var(--radius-sm)]", wireframeTone)} />
        <Skeleton className={cn("h-[var(--spacing-24)] w-[3rem] rounded-[var(--radius-sm)]", wireframeTone)} />
      </div>
      <Skeleton className={cn("h-[3.5rem] w-full rounded-[var(--radius-md)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function TimelineWireframe() {
  return (
    <WireframeFrame>
      <div className="grid w-full grid-cols-3 gap-[var(--space-inline-xs)]">
        {[0, 1, 2].map((col) => (
          <div key={col} className="space-y-[var(--space-stack-xs)]">
            <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
            <Skeleton className={cn("h-[3rem] w-full rounded-[var(--radius-sm)]", wireframeTone)} />
            <Skeleton className={cn("h-[2rem] w-full rounded-[var(--radius-sm)]", wireframeTone)} />
          </div>
        ))}
      </div>
    </WireframeFrame>
  );
}

function TimelineCardWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]")}>
        <Skeleton className={cn("h-[var(--spacing-24)] w-full rounded-none", wireframeTone)} />
        <div className="space-y-[var(--space-stack-xs)] p-[var(--space-inline-sm)]">
          <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-12)] w-[75%]", wireframeTone)} />
        </div>
      </div>
    </WireframeFrame>
  );
}

function DialogWireframe() {
  return (
    <WireframeFrame className="relative">
      <Skeleton className={cn("absolute inset-0 rounded-[var(--radius-md)] opacity-40", wireframeTone)} />
      <div className="relative z-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-sm)] shadow-sm">
        <Skeleton className={cn("mb-[var(--space-stack-xs)] h-[var(--spacing-12)] w-[50%]", wireframeTone)} />
        <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
        <div className="mt-[var(--space-stack-sm)] flex justify-end gap-[var(--space-inline-xs)]">
          <Skeleton className={cn("h-[var(--spacing-24)] w-[3rem] rounded-[var(--radius-button)]", wireframeTone)} />
          <Skeleton className={cn("h-[var(--spacing-24)] w-[3rem] rounded-[var(--radius-button)]", wireframeTone)} />
        </div>
      </div>
    </WireframeFrame>
  );
}

function CommandWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]")}>
        <Skeleton className={cn("h-[var(--spacing-28)] w-full rounded-none", wireframeTone)} />
        {[0, 1, 2].map((item) => (
          <Skeleton key={item} className={cn("mx-[var(--space-inline-sm)] my-[var(--space-stack-xs)] h-[var(--spacing-20)] w-[calc(100%-var(--space-inline-md))]", wireframeTone)} />
        ))}
      </div>
    </WireframeFrame>
  );
}

function DropdownMenuWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-28)] w-[4rem] rounded-[var(--radius-button)]", wireframeTone)} />
      <div className={cn("w-[5.5rem] space-y-[var(--space-stack-xs)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-xs)]")}>
        {[0, 1, 2].map((item) => (
          <Skeleton key={item} className={cn("h-[var(--spacing-16)] w-full", wireframeTone)} />
        ))}
      </div>
    </WireframeFrame>
  );
}

function PopoverWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-24)] w-[3.5rem] rounded-[var(--radius-button)]", wireframeTone)} />
      <div className={cn("w-full rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-sm)]")}>
        <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
        <Skeleton className={cn("mt-[var(--space-stack-xs)] h-[var(--spacing-12)] w-[70%]", wireframeTone)} />
      </div>
    </WireframeFrame>
  );
}

function TooltipWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-24)] w-[4rem] rounded-[var(--radius-button)]", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-20)] w-[5rem] rounded-[var(--radius-sm)]", wireframeTone)} />
    </WireframeFrame>
  );
}

function AccordionWireframe() {
  return (
    <WireframeFrame>
      {[0, 1].map((item) => (
        <div key={item} className="w-full space-y-[var(--space-stack-xs)]">
          <Skeleton className={cn("h-[var(--spacing-24)] w-full rounded-[var(--radius-sm)]", wireframeTone)} />
          {item === 0 ? (
            <Skeleton className={cn("h-[var(--spacing-28)] w-full rounded-[var(--radius-sm)]", wireframeTone)} />
          ) : null}
        </div>
      ))}
    </WireframeFrame>
  );
}

function ScrollAreaWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("relative h-[5rem] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-xs)]")}>
        {[0, 1, 2, 3].map((item) => (
          <Skeleton key={item} className={cn("mb-[var(--space-stack-xs)] h-[var(--spacing-12)] w-full last:mb-0", wireframeTone)} />
        ))}
        <Skeleton className={cn("absolute top-[var(--space-inline-xs)] right-[var(--space-inline-xs)] h-[3rem] w-[var(--spacing-4)] rounded-full", wireframeTone)} />
      </div>
    </WireframeFrame>
  );
}

function SeparatorWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
      <Skeleton className={cn("h-px w-full", wireframeTone)} />
      <Skeleton className={cn("h-[var(--spacing-12)] w-full", wireframeTone)} />
    </WireframeFrame>
  );
}

function SonnerWireframe() {
  return (
    <WireframeFrame>
      <div className={cn("w-full rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-sm)]")}>
        <Skeleton className={cn("h-[var(--spacing-12)] w-[40%]", wireframeTone)} />
        <Skeleton className={cn("mt-[var(--space-stack-xs)] h-[var(--spacing-12)] w-full", wireframeTone)} />
      </div>
    </WireframeFrame>
  );
}

function DefaultWireframe() {
  return (
    <WireframeFrame>
      <Skeleton className={cn("h-[var(--spacing-28)] w-[5rem] rounded-[var(--radius-md)]", wireframeTone)} />
    </WireframeFrame>
  );
}

const wireframeBySlug: Record<string, React.ComponentType> = {
  button: ButtonWireframe,
  checkbox: CheckboxWireframe,
  input: InputWireframe,
  label: LabelWireframe,
  "radio-group": RadioGroupWireframe,
  select: SelectWireframe,
  switch: SwitchWireframe,
  textarea: TextareaWireframe,
  alert: AlertWireframe,
  avatar: AvatarWireframe,
  badge: BadgeWireframe,
  card: CardWireframe,
  chip: ChipWireframe,
  skeleton: SkeletonWireframe,
  spinner: SpinnerWireframe,
  "stage-flow-badge": StageFlowBadgeWireframe,
  table: TableWireframe,
  tabs: TabsWireframe,
  timeline: TimelineWireframe,
  "timeline-card": TimelineCardWireframe,
  "alert-dialog": DialogWireframe,
  command: CommandWireframe,
  dialog: DialogWireframe,
  "dropdown-menu": DropdownMenuWireframe,
  popover: PopoverWireframe,
  tooltip: TooltipWireframe,
  accordion: AccordionWireframe,
  "scroll-area": ScrollAreaWireframe,
  separator: SeparatorWireframe,
  sonner: SonnerWireframe,
};

export function componentSlugFromHref(href: string) {
  const match = href.match(/\/docs\/components\/([^#]+)/);
  return match?.[1] ?? "default";
}

export function ComponentWireframe({ slug }: { slug: string }) {
  const Wireframe = wireframeBySlug[slug] ?? DefaultWireframe;
  return <Wireframe />;
}
