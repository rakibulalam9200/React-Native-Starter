import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import SvgLogo from '../../../assets/svg/easy_ask.svg'; // Adjust the path to your SVG

const SplashScreen: React.FC = () => {
  // Create a reference for the animated value
  const scaleValue = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Define the scaling animation
    const scaleAnimation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    // Start the animation
    Animated.loop(scaleAnimation).start();

    // Hide the splash screen after a delay
    const hideSplash = setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 4000); // Adjust the delay as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(hideSplash);
  }, [scaleValue]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      {/* Ensure there is no stray text here */}

      <Animated.View style={{transform: [{scale: scaleValue}]}}>
        <SvgLogo width={208} height={65} />
      </Animated.View>
      {/* For example, adding any text here should be inside a <Text> component */}
      {/* <Text>Your text here</Text> */}
    </View>
  );
};

export default SplashScreen;
