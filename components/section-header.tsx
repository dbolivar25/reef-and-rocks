import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <Badge variant="outline" className="mb-4">
        {badge}
      </Badge>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
