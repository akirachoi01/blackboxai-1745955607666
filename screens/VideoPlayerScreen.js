update the app name in the configuration files?import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function VideoPlayerScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { videoUrl, title } = route.params;

  return (
    <View className="flex-1 bg-black">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-4 bg-gray-800"
      >
        <Text className="text-white text-lg">Back</Text>
      </TouchableOpacity>
      <Video
        source={{ uri: videoUrl }}
        style={{ flex: 1 }}
        controls
        resizeMode="contain"
      />
      <View className="p-4 bg-gray-900">
        <Text className="text-white text-xl">{title}</Text>
      </View>
    </View>
  );
}
