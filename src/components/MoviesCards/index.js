import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export const MoviesCards = (props) => {
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieUrl} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        marginRight: 20,
    }
})