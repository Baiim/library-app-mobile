import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import BookCardComponent from '../BookCard';
import Gap from '../Gap';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#020202', height: 3}}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.tabContent}>
        <BookCardComponent
          onPress={() => {
            navigation.navigate('BookDetail');
          }}
          rating={5.0}
        />
        <BookCardComponent rating={4.5} />
        <BookCardComponent rating={3.0} />
        <BookCardComponent rating={2.0} />
      </View>
    </ScrollView>
  );
};
const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.tabContent}>
        <BookCardComponent
          onPress={() => {
            navigation.navigate('BookDetail');
          }}
          rating={5.0}
        />
        <BookCardComponent rating={4.5} />
        <BookCardComponent rating={3.0} />
        <BookCardComponent rating={2.0} />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrder,
});

const TabBookComponent = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default TabBookComponent;

const styles = StyleSheet.create({
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
