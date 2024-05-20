import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CategoriesIcon, HeartIcon, HomeIcon, ProfileIcon, ShoppingIcon } from '@/components/Svgs';
import { StyleSheet, View } from 'react-native';

const TabBarIcon = ({ icon, focusedIcon, focused }) => (
  <View style={[style.tabIconBx, { backgroundColor: focused ? Colors.neutral[900] : "none" }]}>
    {focused ? focusedIcon : icon}
  </View>
)

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName='favorites'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, }) => {
            return (
              <TabBarIcon icon={<HomeIcon />} focusedIcon={<HomeIcon active={true} />} focused={focused} />
            )
          },
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={<CategoriesIcon />} focusedIcon={<CategoriesIcon active={true} />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={<HeartIcon />} focusedIcon={<HeartIcon active={true}/>} focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={<ShoppingIcon />} focusedIcon={<ShoppingIcon active={true}/>} focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={<ProfileIcon />} focusedIcon={<ProfileIcon active={true}/>} focused={focused}/>
          ),
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  tabIconBx: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center"
  }
})