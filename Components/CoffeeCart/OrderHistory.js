import React, { Component } from "react";

// NativeBase Components
import { Text, Body, List, ListItem, Item, Content, Header } from "native-base";

const OrderHistory = props => {
  return (
    <Content>
      <Header transparent />
      <Body>
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Item>
              <Text>Item #1</Text>
            </Item>
            <Item>
              <Text>Item #2</Text>
            </Item>
          </ListItem>
        </List>
      </Body>
    </Content>
  );
};

export default OrderHistory;
