import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './HomePage';
import NewHabitPage from './NewHabitPage';
import HabitPageLayout from './HabitPageLayout';
import EditHabitPage from './EditHabitPage';

const { Header, Content, Footer } = Layout;

function MainLayout() {
  return (
    <Layout>
      <Header>
        <div className="logo">
          <Link to="/">Everyday</Link>
        </div>
        <Menu theme="dark" mode="horizontal" className="menu">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="content__background">
        <div className="content__main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/new" component={NewHabitPage} />
            <Route path="/:habitId/edit" component={EditHabitPage} />
            <Route path="/:habitId" component={HabitPageLayout} />
          </Switch>
        </div>
      </Content>
      <Footer className="footer">Noodle Inc</Footer>
    </Layout>
  );
}

export default MainLayout;
