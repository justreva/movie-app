import React from "react";
import { FC } from "react";

import { Layout } from "antd";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import "./AppLayout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC = (props: LayoutProps) => {
  return (
      <Layout className="">
        <Sidebar />
        <Layout>
          <Header />
          <Layout.Content className="layout__content">
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
  );
};

export default AppLayout;
