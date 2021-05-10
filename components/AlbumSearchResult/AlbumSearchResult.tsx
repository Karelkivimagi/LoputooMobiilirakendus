import React from 'react';
import { Text, View, FlatList } from 'react-native';
import stylesResults from '../SearchBar/styles';
import { useState, useEffect } from 'react'; 
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../../src/graphql/queries';
import AlbumCategory from '../AlbumCategory';

export default function AlbumSearchResult({data}) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        var fetchAlbumCategories = async () => {
          try {
            var data = await API.graphql(graphqlOperation(listAlbumCategorys));
            setCategories(data.data.listAlbumCategorys.items);

          } catch (e) {
            console.log(e);
          }
        }
  
        fetchAlbumCategories();
        
      }, []);
    
    return (
        <View style={stylesResults.containerResults}>
        <FlatList
            data={categories}
            renderItem={({ item }) => ( 
              <AlbumCategory 
                title={item.title} 
                albums={item.albums.items} 
              />
            )}
          keyExtractor={(item) => item[nr].id} 
        />
      </View>
    )
}