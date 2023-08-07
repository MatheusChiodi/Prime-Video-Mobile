import { View,Text,StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png'; 

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';

import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

import { MoviesCards } from "../../components/MoviesCards";

export const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Show</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
                <TouchableOpacity style={styles.movieImageThumbnail}>
                    <Image source={MovieTheWhell} style={styles.movieImage}/>
                </TouchableOpacity>


                <Text style={styles.movieText}>Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <MoviesCards movieUrl={item.moviesURL}/>
                    )}
                    horizontal={true}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText}>Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <MoviesCards movieUrl={item.moviesURL}/>
                    )}
                    horizontal={true}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText}>Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <MoviesCards movieUrl={item.moviesURL}/>
                    )}
                    horizontal={true}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#232F3E',
        alignItems:'flex-start',
    },
    header:{
        width:'100%',
        paddingTop: 80,
        alignItems:'center',
        justifyContent:'center',
    },
    amazonLogoImg:{
        marginTop: -45,
        marginLeft: 30,
    },
    category:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText:{
        color:'#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    movieImageThumbnail:{
        width: '100%',
        alignItems:'center',
    },
    contentList:{
        paddingLeft: 18,
        paddingRight: 30,
    },
    movieText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: '700',
        padding: 15,
    },
});

