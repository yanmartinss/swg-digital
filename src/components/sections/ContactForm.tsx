import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { contactEmail } from "../../data/content";
import { Button } from "../ui/Button";

const fieldClasses =
  "mt-2 w-full rounded-xl border border-navy/15 bg-paper px-4 py-3.5 text-sm outline-none transition placeholder:text-navy/40 focus:border-tangerine";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato de ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tangerine">
          <Check />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">Quase lá!</h3>
        <p className="mt-3 max-w-sm text-navy/60">
          Abrimos seu app de e-mail com a mensagem pronta. É só enviar para a
          equipe SWG Digital.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Como podemos te chamar?"
          className={fieldClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold">
          E-mail profissional
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="voce@empresa.com"
          className={fieldClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          Como podemos ajudar?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Fale um pouco sobre o seu projeto..."
          className={`${fieldClasses} resize-none`}
        />
      </div>
      <Button type="submit" variant="dark" className="w-full">
        Enviar mensagem <Send className="h-4 w-4 text-tangerine" />
      </Button>
    </form>
  );
}
