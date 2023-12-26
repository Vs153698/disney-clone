import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();
  
  // To remove %20 from search term
  const termToUse = decodeURI(term);
  return <div>Welcome to search page {termToUse}</div>;
};

export default SearchPage;
