export type navbarCategoriesType = {
  path: string;
  mode?: string;
  label: string;
}[];

export const navbarCategories: navbarCategoriesType = [
  { path: '#all_categories', label: 'all categories' },
  { path: '#shoes', label: 'shoes' },
  { path: '#clothing', label: 'clothing' },
  { path: '#tops', label: 'tops' },
  { path: '#only_custom', mode: 'red', label: 'only custom' },
  { path: '#accessories', label: 'accessories' },
  { path: '#vintage', label: 'vintage' },
  { path: '#merch', label: 'merch' },
];
