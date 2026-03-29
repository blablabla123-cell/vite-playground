import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

export function OnboardingPage() {
  const [count, setCount] = useState(0);
  const [lastLogin] = useState(new Date());
  const [cartTotal] = useState(123.45);
  const [user] = useState({ name: 'Alex', gender: 'male' });
  return (
    <main
      style={{
        maxWidth: 600,
        margin: '2rem auto',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1>
        <FormattedMessage id='app.title' />
      </h1>
      <p>
        <FormattedMessage id='app.description' />
      </p>
      <section
        style={{
          marginTop: '2rem',
        }}
      >
        <p>
          <FormattedMessage id='app.notifications' values={{ count }} />
        </p>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          <button type='button' onClick={() => setCount(1)}>
            =1
          </button>
          <button type='button' onClick={() => setCount((prev) => prev + 1)}>
            +1
          </button>
        </div>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p>
          <FormattedMessage id='app.lastLogin' values={{ ts: lastLogin }} />
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p>
          <FormattedMessage id='app.cartTotal' values={{ total: cartTotal }} />
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p>
          <FormattedMessage
            id='app.userAction'
            values={{ name: user.name, gender: user.gender }}
          />
        </p>
      </section>
    </main>
  );
}
