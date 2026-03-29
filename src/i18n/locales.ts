const STORAGE_KEY = 'app-locale';

// A single locale bundle in our app is just a flat key -> string map
// (react-intl expects messages in this shape).
type Messages = Record<string, string>;

// Vite will turn this into a map of lazy import functions.
// Keys look like: "./messages/en/common.json", "./messages/fr/errors.json", etc.
const messageModules = import.meta.glob('./messages/*/*.json') as Record<
  string,
  () => Promise<{ default: Messages }>
>;

// We store locales in directory names, e.g. "./messages/en/common.json" -> "en"
const localeDirRegex = /\.\/messages\/([a-z0-9-]+)\//i;

// Build the list of supported locales by scanning all matched file paths,
// extracting the locale directory name, then deduping via Set.
export const supportedLocales: string[] = Array.from(
  new Set(
    Object.keys(messageModules)
      .map((path) => path.match(localeDirRegex)?.[1] ?? null)
      .filter((v): v is string => Boolean(v)),
  ),
).sort();

// Load ALL namespace JSON files for a given locale (e.g. en/common.json + en/errors.json)
// and merge them into a single messages object for react-intl.
export async function loadMessages(locale: string): Promise<Messages> {
  // Only match files inside the selected locale folder.
  const prefix = `./messages/${locale}/`;

  // Get all loaders for that locale.
  const loaders = Object.entries(messageModules).filter(([path]) =>
    path.startsWith(prefix),
  );

  // If there are no files for this locale, we can't load it.
  if (loaders.length === 0) {
    throw new Error(`No messages found for locale "${locale}"`);
  }

  // Dynamically import every namespace file for this locale.
  const modules = await Promise.all(loaders.map(([, loader]) => loader()));

  // Merge all namespaces into one flat object.
  // Note: if two namespaces reuse the same key, the later one will overwrite the earlier one.
  return Object.assign({}, ...modules.map((m) => m.default));
}

export const defaultLocale = supportedLocales.includes('en')
  ? 'en'
  : supportedLocales[0];

export function getDirection(locale: string): 'ltr' | 'rtl' {
  const normalized = locale.toLocaleLowerCase();
  if (normalized.startsWith('ar')) {
    return 'rtl';
  }
  return 'ltr';
}

function detectUserLocale(): string {
  const broweserLocales =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const raw of broweserLocales) {
    const base = normalizeLocale(raw);
    if (supportedLocales.includes(base)) {
      return base;
    }
  }

  return defaultLocale;
}

function normalizeLocale(locale: string): string {
  return locale.toLowerCase().split('-')[0];
}

export function loadStoredLocale(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function storeLocale(locale: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch (e) {
    console.error(e);
  }
}

export function getInitialLocale(): string {
  // 1. User preference (if valid)
  const saved = loadStoredLocale();
  if (saved && supportedLocales.includes(saved)) {
    return saved;
  }

  // 2. Browser settings
  const detected = detectUserLocale();
  if (supportedLocales.includes(detected)) {
    return detected;
  }

  // 3. Hard fallback
  return defaultLocale;
}
