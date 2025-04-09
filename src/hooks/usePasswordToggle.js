import { useState } from 'react';

export const usePasswordToggle = fields => {
  const initialState = fields.reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});

  const [showPasswords, setShowPasswords] = useState(initialState);
  const togglePasswordVisibility = field => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };
  return [showPasswords, togglePasswordVisibility];
};
