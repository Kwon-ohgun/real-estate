import * as React from 'react';
import { View, Button, TextInput } from 'react-native';
import {StyleSheet} from "react-native";
import { Searchbar,List } from 'react-native-paper';
  
const Tab2Screen2 = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
       <List.Section>
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon={require('../assets/user-o.png')}></List.Icon>}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </>
  );
};
export default Tab2Screen2;
