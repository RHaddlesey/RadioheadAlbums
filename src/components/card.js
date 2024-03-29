import React from 'react';
import {View} from "react-native";

const Card = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
};

export default Card;