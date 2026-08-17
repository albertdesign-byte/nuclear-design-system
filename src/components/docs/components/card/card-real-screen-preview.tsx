import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";

export function CardRealScreenPreview() {
  return (
    <Card
      className="w-full max-w-sm"
      role="region"
      aria-labelledby="card-real-screen-patient"
    >
      <CardHeader>
        <CardTitle>
          <h3 id="card-real-screen-patient">Maria Gonzalez</h3>
        </CardTitle>
        <CardDescription>MRN 48291 · 58 years</CardDescription>
        <CardAction>
          <Badge variant="secondary">Stable</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-[var(--space-stack-sm)]">
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <span className="text-[var(--color-text-muted)]">Specialty</span>
          <span>Cardiology</span>
        </div>
        <div className="flex items-center justify-between text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <span className="text-[var(--color-text-muted)]">Next appointment</span>
          <span>18 Jul 2026</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View record
        </Button>
      </CardFooter>
    </Card>
  );
}
