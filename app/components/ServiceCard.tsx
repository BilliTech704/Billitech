export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-lg bg-slate-900/50 border border-primary/30 hover-translate group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
