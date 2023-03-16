import React from 'react';
import { QueryErrorResetBoundary, useQuery } from 'react-query';
import PageLayout from './components/layout';

const ABC = () => {
  return <Titles />;
};

export default ABC;

const Titles = () => {
  const { data, isLoading } = useQuery(['data'], async () => {
    const fetchedData = await fetch('https://dummyjson.com/products');
    console.log('DATAT', fetchedData);
    return fetchedData.json();
  });
  return (
    <PageLayout isLoading={isLoading}>
      {data?.products.map((a: any) => (
        <p key={a}>{a.title}</p>
      ))}
    </PageLayout>
  );
};
