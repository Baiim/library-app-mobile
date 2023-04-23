import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICBookMarkOff,
  ICBookMarkOn,
  ICBookOn,
  ICBookOff,
  ICHomeOff,
  ICHomeOn,
  ICProfileOff,
  ICProfileOn,
} from '../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'HomePage':
      return focus ? <ICHomeOn /> : <ICHomeOff />;
    case 'BookPage':
      return focus ? <ICBookOn /> : <ICBookOff />;
    case 'BookmarkPage':
      return focus ? <ICBookMarkOn /> : <ICBookMarkOff />;
    case 'ProfilePage':
      return focus ? <ICProfileOn /> : <ICProfileOff />;
    default:
      return <ICBookOn />;
  }
};

const BottomNavigatorComponent = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigatorComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 13,
    paddingTop: 15,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
