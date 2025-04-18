import { Card, CardContent } from "@/components/ui/card";

export default function FeatureCard({ Icon, color, title, description }) {
  return (
    <Card className="bg-gray-800/30 hover:bg-gray-800/50 transition-transform hover:scale-105">
      <CardContent className="p-6">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
          style={{ backgroundColor: `${color}33` }}
        >
          <Icon style={{ color }} />
        </div>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
