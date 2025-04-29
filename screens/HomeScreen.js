import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const videos = [
  {
    id: '1',
    title: 'Sample Video 1',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    url: 'https://www.w3schools.com/html/movie.mp4',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('VideoPlayer', { videoUrl: item.url, title: item.title })}
      className="p-4 border-b border-gray-300 bg-white hover:bg-gray-100"
    >
      <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <Text className="text-3xl font-bold p-6 text-center text-blue-600">Gstream Clone - Videos</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
