export function formatMoney (money: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money);
}

export function formatPercent (value: number) {
  return `${value.toFixed(0)}%`;
}

export function calculatePercentage (collected: number, goal: number) {
  return (collected * 100) / goal;
};