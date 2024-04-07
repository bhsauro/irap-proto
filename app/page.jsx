
import { redirect } from 'next/navigation'
import React from 'react';

export default function Page({ navigation, user, userNavigation }) {
  
  //initiate default language to English but state should update with userlanguage 
    return (
      redirect(`/en`) 
    );

  
}
