import React, {  useEffect, useRef } from 'react';
import { useReducer } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

type Currency = 'USD' | 'EUR' | 'RUB';

type State = {
  name: string;
  currency: Currency;
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_CURRENCY'; payload: Currency };

function refucer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    default:
      return state;
  }
}

const initialState: State = {
  name: '',
  currency: 'RUB',
};

export function OnboardingPage() {
  const intl = useIntl();

  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(refucer, initialState);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h3>
        <FormattedMessage id={'onboarding.introduction'} />
      </h3>
      <p>
        <FormattedMessage id={'onboarding.name.request'} />
      </p>
      <br />
      <input
        ref={inputRef}
        type='text'
        placeholder={intl.formatMessage({ id: 'input.placeholder.name' })}
        value={state.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_NAME', payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>
        <FormattedMessage id={'onboarding.currency.request'} />
      </p>
      <br />
      <select
        value={state.currency}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch({
            type: 'SET_CURRENCY',
            payload: e.target.value as Currency,
          })
        }
      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='RUB'>RUB</option>
      </select>
    </div>
  );
}
