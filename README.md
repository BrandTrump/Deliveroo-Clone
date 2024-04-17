## Learnings
- React Navigation type checking with TypeScript: https://reactnavigation.org/docs/typescript/
- Type checking the navigator:

<b>App.tsx</b>
``` TS
export type RootStackParamList = {
  Home: undefined;
  Restaurant: {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: Dish[];
    long: number;
    lat: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
- Type checking the restaurant screen
- Getting the route props: https://reactnavigation.org/docs/route-prop/
- Note: useRoute() is not type-safe

<b>RestaurantScreen.tsx</b>
``` TS
type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Restaurant"
>;

export default function RestaurantScreen({ route }: RestaurantScreenProps) {
  const { title } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
```
