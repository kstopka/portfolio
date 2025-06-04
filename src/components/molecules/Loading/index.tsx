import React from "react";
import * as S from "./styles";
import Layout from "../../Layout";

interface ILoading {}

const Loading: React.FC<ILoading> = () => {
  return (
    <Layout>
      <S.Loading>Loading</S.Loading>
    </Layout>
  );
};
export default Loading;
