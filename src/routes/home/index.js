import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  const { data } = { data: {} };
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <Home news={data.news} />
      </Layout>
    ),
  };
}

export default action;
