import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntroScreen = () => {
  const navigation = useNavigation<any>();

  const checkIntroShown = useCallback(async () => {
    try {
      const introShown = await AsyncStorage.getItem('introShown');

      if (introShown === null) {
        await AsyncStorage.setItem('introShown', 'true');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error checking intro screen:', error);
    }
  }, [navigation]);

  React.useEffect(() => {
    checkIntroShown();
  }, [checkIntroShown]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Products!</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula
          ipsum a arcu cursus vitae. Non odio euismod lacinia at quis risus sed
          vulputate. Ac placerat vestibulum lectus mauris ultrices eros. Dolor
          morbi non arcu risus. Eget mi proin sed libero enim sed faucibus
          turpis in. Lobortis feugiat vivamus at augue eget arcu dictum varius.
          A scelerisque purus semper eget duis at tellus. Nunc congue nisi vitae
          suscipit tellus mauris a diam maecenas. Eget nulla facilisi etiam
          dignissim diam quis. Eros in cursus turpis massa tincidunt dui. Tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras
          fermentum. Dis parturient montes nascetur ridiculus mus. Ultricies
          lacus sed turpis tincidunt id aliquet. Ultricies leo integer malesuada
          nunc vel risus. Urna porttitor rhoncus dolor purus non enim.
          Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Purus
          gravida quis blandit turpis cursus in. Praesent elementum facilisis
          leo vel fringilla est ullamcorper. Viverra mauris in aliquam sem
          fringilla. Enim sit amet venenatis urna cursus eget. Eleifend quam
          adipiscing vitae proin sagittis. In massa tempor nec feugiat nisl
          pretium fusce. Mollis nunc sed id semper risus. Malesuada fames ac
          turpis egestas maecenas pharetra convallis posuere morbi. Mauris
          commodo quis imperdiet massa. Adipiscing at in tellus integer feugiat
          scelerisque varius morbi. Ornare arcu odio ut sem nulla pharetra diam
          sit. Neque viverra justo nec ultrices dui sapien. Phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien. Aliquam eleifend
          mi in nulla posuere sollicitudin. Quam id leo in vitae turpis massa
          sed. Aenean euismod elementum nisi quis eleifend quam adipiscing.
          Sapien nec sagittis aliquam malesuada. Purus faucibus ornare
          suspendisse sed nisi lacus sed viverra tellus. Phasellus faucibus
          scelerisque eleifend donec. Est velit egestas dui id. A erat nam at
          lectus. Felis imperdiet proin fermentum leo vel orci porta non.
          Vulputate sapien nec sagittis aliquam malesuada bibendum. Consectetur
          adipiscing elit duis tristique sollicitudin nibh sit. Nunc non blandit
          massa enim nec dui nunc mattis enim. Dignissim cras tincidunt lobortis
          feugiat vivamus at. Dui ut ornare lectus sit amet est. Molestie at
          elementum eu facilisis sed odio morbi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Pretium fusce id velit ut. Faucibus a
          pellentesque sit amet porttitor eget dolor morbi. Gravida neque
          convallis a cras semper. Malesuada fames ac turpis egestas. Fermentum
          dui faucibus in ornare quam. Urna et pharetra pharetra massa. Urna
          neque viverra justo nec ultrices dui sapien. Quis hendrerit dolor
          magna eget. Lorem ipsum dolor sit amet consectetur adipiscing. Ipsum
          suspendisse ultrices gravida dictum fusce ut. Malesuada proin libero
          nunc consequat interdum varius sit amet. Lobortis elementum nibh
          tellus molestie nunc non blandit massa enim. Feugiat scelerisque
          varius morbi enim nunc faucibus a pellentesque sit. Vestibulum sed
          arcu non odio euismod lacinia at quis risus. Gravida dictum fusce ut
          placerat orci. Rhoncus aenean vel elit scelerisque mauris. Adipiscing
          elit duis tristique sollicitudin nibh sit amet commodo nulla.
          Ullamcorper dignissim cras tincidunt lobortis feugiat. Turpis nunc
          eget lorem dolor sed. Morbi tincidunt ornare massa eget. Purus semper
          eget duis at tellus at. Facilisis magna etiam tempor orci eu.
          Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nulla
          malesuada pellentesque elit eget. Tempus egestas sed sed risus pretium
          quam vulputate dignissim suspendisse. Mauris pellentesque pulvinar
          pellentesque habitant morbi tristique senectus. Magna fringilla urna
          porttitor rhoncus dolor purus non enim praesent.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    position: 'relative',
    bottom: 20,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IntroScreen;
