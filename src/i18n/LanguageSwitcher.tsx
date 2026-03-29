import { supportedLocales } from './locales';

const labels: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
};

type LanguageSwitcherProps = {
  locale: string;
  onChange: (locale: string) => void;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  if (supportedLocales.length <= 1) {
    return null;
  }

  return (
    <div
      style={{
        marginBottom: '1rem',
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      {...supportedLocales.map((code) => (
        <button
          key={code}
          type='button'
          onClick={() => props.onChange(code)}
          style={{
            padding: '0.25rem 0.75rem',
            borderRadius: 4,
            border: '1px solid #ccc',
            opacity: code === props.locale ? 0.7 : 1,
            cursor: code === props.locale ? 'default' : 'pointer',
          }}
        >
          {labels[code] || code}
        </button>
      ))}
    </div>
  );
};
