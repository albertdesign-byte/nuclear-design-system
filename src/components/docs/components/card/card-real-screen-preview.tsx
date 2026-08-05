import { Badge } from "@/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";

export function CardRealScreenPreview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>María González</CardTitle>
        <CardDescription>ID #48291 · 58 años</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-[var(--space-stack-sm)]">
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <span className="text-[var(--color-text-muted)]">Estado</span>
          <Badge variant="secondary">Estable</Badge>
        </div>
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <span className="text-[var(--color-text-muted)]">Próxima cita</span>
          <span>18 Jul 2026</span>
        </div>
      </CardContent>
      <CardFooter>
        <button
          type="button"
          className="text-[length:var(--text-body-small-size)] text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)]"
        >
          Ver expediente
        </button>
      </CardFooter>
    </Card>
  );
}
