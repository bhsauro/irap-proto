import React from 'react';
import Form from '../../../components/en-form'

export default function Page({ navigation, user, userNavigation }) {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">Eligibility</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
          <Form/>
        </div>
      </main>
    </>
  );
}