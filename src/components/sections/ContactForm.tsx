import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { contactEmail } from "../../data/content";
import { Button } from "../ui/Button";

const fieldClasses =
  "mt-2 w-full rounded-xl border border-hairline bg-canvas px-4 text-base text-ink outline-none transition placeholder:text-muted focus:border-ink";

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
      <div className="flex min-h-[240px] flex-col sm:min-h-[340px] items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-mint text-ink">
          <Check />
        </div>
        <h3 className="mt-6 text-2xl tracking-[-0.02em]">Quase lá!</h3>
        <p className="mt-3 max-w-sm text-body">
          Abrimos seu app de e-mail com a mensagem pronta. É só enviar para a
          equipe SWG Digital.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Como podemos te chamar?"
          className={`${fieldClasses} h-11`}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          E-mail profissional
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="voce@empresa.com"
          className={`${fieldClasses} h-11`}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Como podemos ajudar?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Fale um pouco sobre o seu projeto..."
          className={`${fieldClasses} resize-none py-3`}
        />
      </div>
      <Button type="submit" className="w-full">
        Enviar mensagem <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
