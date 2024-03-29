import React, { Component } from 'react';
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get("https://www.medarch.co.uk/Gaz/list.json")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
    <AlbumDetail key={album.title} album={album} />));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;