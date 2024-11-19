import { RootModifiers } from "./styled";

export type Label = {
  label: string;
  color: keyof typeof RootModifiers;
};

export const labels: Record<string, Label> = {
  inactive: {
    label: "Inativo",
    color: "gray",
  },
  expired: {
    label: "Vencido",
    color: "gray",
  },

  pending: {
    label: "Pendente",
    color: "yellow",
  },
  to_init: {
    label: "A iniciar",
    color: "yellow",
  },
  reproved: {
    label: "Reprovado",
    color: "red",
  },
  undelivered: {
    label: "Não entregue",
    color: "red",
  },
  partial: {
    label: "Entrega parcial",
    color: "orange",
  },
  processing: {
    label: "Processando",
    color: "orange",
  },
  error: {
    label: "Erro",
    color: "red",
  },
  not_send: {
    label: "Incompleto",
    color: "gray",
  },
};
