import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerDefaultText}</Text>
    </View>
  );
};

// Styling

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: "#F8F8F8",
    elevation: 2,
    height: 60,
    justifyContent: "center",
    paddingTop: 45,
    position: "relative",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 22
  }
};


export default Header;

