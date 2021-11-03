import React from "react";
import {
  CardWrapper,
  CardContent,
  ContentDesc,
  List,
  ListItem,
} from "./CardElements";
import { FiCheckCircle } from "react-icons/fi";

const Card = ({ listItems }) => {
  return (
    <CardWrapper>
      <ContentDesc>&#8377;1999/-</ContentDesc>
      <CardContent>
        <List>
          {listItems.map((item) => (
            <ListItem>
              <FiCheckCircle />
              &nbsp;{item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </CardWrapper>
  );
};
// { icon, contentHead, contentDesc }
export default Card;
