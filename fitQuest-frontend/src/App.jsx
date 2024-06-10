import { useState } from 'react'
import React from 'react';

import LoginForm from 'UI/Form_Component/login_form';
import SignupForm from 'UI/Form_Component/signup_form';

function App() {
  return (
    <div>
          <LoginForm></LoginForm>
          <SignupForm></SignupForm>
    </div>
)
}

export default App;
