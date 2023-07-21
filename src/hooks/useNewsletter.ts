import { useRef, useState } from 'react';
export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}
export type FormState = {
  state: Form;
  message?: string;
};
export function useNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);
  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setForm({ state: Form.Loading });
    const res = await fetch(`/api/newsletter`, {
      body: JSON.stringify({
        email: inputEl.current!.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }
    inputEl.current!.value = '';
    setForm({
      state: Form.Success,
      message: `Success! You've been added to the list!`,
    });
  }
  return { subscribe, inputEl, form };
}
