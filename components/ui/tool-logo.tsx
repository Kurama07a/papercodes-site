import type { SimpleIcon } from "simple-icons";
import { siMake, siN8n, siNotion, siStripe, siSupabase, siVercel } from "simple-icons";

const toolIcons: Record<string, SimpleIcon | undefined> = {
  Stripe: siStripe,
  Notion: siNotion,
  Make: siMake,
  n8n: siN8n,
  OpenAI: undefined,
  Supabase: siSupabase,
  Vercel: siVercel,
};

export function ToolLogo({ name }: { name: string }) {
  const icon = toolIcons[name];

  return (
    <span className="tool-logo">
      {icon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={icon.path} />
        </svg>
      ) : null}
      <span>{name}</span>
    </span>
  );
}
