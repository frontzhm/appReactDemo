import React from 'react';
// Route IndexRoute
// Router Route IndexRoute 默认
import { Route, IndexRoute } from 'react-router';
// containers 容器级组件
// components 基础组件 展示型组件


// 相当于../containers/index.js
import { App, Home, About, Profile } from '../containers';

export default (
  <Route path="/" component={App}>
  // /
    <IndexRoute component={Home} />
  //  /about
    <Route path="about" component={About} />
    // username是变量  this.props.params.username
    <Route path="profile/:username" component={Profile} />
  </Route>
)
// /profile/aaa -> app+ profile