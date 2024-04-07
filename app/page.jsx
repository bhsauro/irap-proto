
import { redirect } from 'next/navigation'
import React from 'react';

//TODO: update root landing page with language selection
//initiate default language to English but state should update with userlanguage /check local selection through Next.js

export default function Page({ navigation, user, userNavigation }) {
  
    return (
      redirect(`/en`) 
    );

  
}
