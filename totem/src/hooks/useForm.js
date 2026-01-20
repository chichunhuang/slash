// src/hooks/useForm.js
import { useState } from 'react';

export function useForm(initialValues, submitCallback) {
  const [form, setForm] = useState(initialValues);
  const [status, setStatus] = useState('');
  const [warn, setWarn] = useState('');

  const handleChange = (e) => {
    //setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const { name, value, type, checked } = e.target;
    
    setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('🔄 計算中...');
    const result = await submitCallback(form);
    if (result.ok) {
      setStatus(result.message);
      setForm(initialValues);
      setWarn('');
    } else {
      setWarn('⚠️ ' + result.message);
      setStatus('');
    }
  };

  return { form, setForm, status, handleChange, handleSubmit, warn};
}
