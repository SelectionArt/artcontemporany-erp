"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";

type Props = {
  value: string[];
  onChange: (emails: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export function MultiEmailInput({
  value,
  onChange,
  disabled,
  placeholder,
}: Props) {
  const [text, setText] = useState("");

  const addEmails = (raw: string) => {
    const parts = raw
      .split(/[\s,;]+/)
      .map((p) => p.trim().toLowerCase())
      .filter(Boolean);

    if (!parts.length) return;

    const existing = new Set(value.map((v) => v.toLowerCase()));
    const validNew = parts.filter(
      (p) => emailRegex.test(p) && !existing.has(p),
    );

    if (validNew.length) onChange([...value, ...validNew]);
    setText("");
  };

  const addOneFromInput = () => {
    const v = text.trim().toLowerCase();
    if (
      v &&
      emailRegex.test(v) &&
      !value.map((e) => e.toLowerCase()).includes(v)
    ) {
      onChange([...value, v]);
    }
    setText("");
  };

  const handlePaste: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    const clip = e.clipboardData.getData("text");
    if (clip && /[,;\s]/.test(clip)) {
      e.preventDefault();
      addEmails(clip);
    }
  };

  const remove = (email: string) => {
    onChange(value.filter((e) => e !== email));
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2 rounded-md border px-2 py-2">
        {value.map((email) => (
          <Badge
            key={email}
            variant="secondary"
            className="flex items-center gap-2 py-1 pr-2 pl-3"
          >
            {email}
            <button
              type="button"
              onClick={() => remove(email)}
              aria-label={`Eliminar ${email}`}
              className="hover:bg-secondary/70 focus-visible:ring-ring pointer-events-auto rounded-full p-0.5 focus-visible:ring-2"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
        <div className="flex w-full items-center gap-2">
          <Input
            type="email"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onPaste={handlePaste}
            disabled={disabled}
            placeholder={placeholder ?? "Escribe un email"}
            aria-label="Campo de correo electrónico"
          />
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={addOneFromInput}
            disabled={disabled || !text.trim()}
            aria-label="Añadir email"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
