import React from 'react';
import {Album} from '../../types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/AlbumDisplayDataStyles';

export type AlbumDisplayDataProps = {
    album: Album;
}

const AlbumDisplayData = (props: AlbumDisplayDataProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image source=
                {{uri: album.imageUri}}
                style={styles.image}>
            </Image>
            <Text 
                style={styles.name}>{album.name}
            </Text>
                <View 
                    style={styles.creatorContainer}>
                    <Text 
                        style={styles.creator}>
                        Looja: {album.by}
                    </Text>
                </View>
        </View>
    )
}

export default AlbumDisplayData;