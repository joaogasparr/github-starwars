import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Result from '~/pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/result/:user" component={Result} />
    </Switch>
  );
}
