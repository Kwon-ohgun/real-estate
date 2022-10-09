import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {StyleSheet} from "react-native";
import { Searchbar,List } from 'react-native-paper';
import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { ScrollView } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Tab2Screen = ({congressesStore}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const congresses = congressesStore.congresses;
  console.log(congresses.length)
  useEffect(() => {
    congressesStore.congressesRead();
  }, [congressesStore]);

  if (congressesStore.isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
        <ActivityIndicator animating={true} color={'blue'} />
        </Text>
      </View>
    )
  }
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => {
          congressesStore.congressesRead(searchQuery)
        }}
        onSubmitEditing={() => {
          congressesStore.congressesRead(searchQuery)
        }}
      />
      <ScrollView>
        <List.Section>
          {congresses.map((congress, i) => (
            <List.Accordion
              key={i}
              // title={congress.assetsMy && congress.assetsMy[0].addrees}
              title={`${congress.name}`}
              description={congress.team}
              left={props => <List.Icon {...props} icon={require('../assets/user-o.png')}></List.Icon>}>
              {congress.congressAll.map((asset, j) => (
                <List.Item
                  key={j}
                  title={`${asset.relative} [${asset.type}]`}
                  description={asset.value}
                />
              ))}
            </List.Accordion>
          ))}

          {/* <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion> */}
        </List.Section>
      </ScrollView>
    </>
  );
};

export default inject('congressesStore')(observer(Tab2Screen));
