export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialProps) {
  return (
    <div className="p-6 rounded-lg bg-slate-900/50 border border-primary/30">
      <p className="text-slate-300 mb-4 italic">&quot;{content}&quot;</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mr-4">
          {avatar}
        </div>
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-slate-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
