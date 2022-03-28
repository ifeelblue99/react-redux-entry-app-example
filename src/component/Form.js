import React from 'react';
import store from '../redux/store';

export default function Todo() {
  const [formData, setFormData] = React.useState('');

  function handleChange(event) {
    setFormData(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.length || formData.length > 25) {
      setFormData('');
      alert('Error: max 25 character');
      return;
    }

    store.dispatch({
      type: 'add',
      payload: {
        description: formData,
      },
    });
    setFormData('');

    console.log('submited', store.getState());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData}
        onChange={handleChange}
        placeholder="type..."
      />
      <button>Save</button>
    </form>
  );
}
