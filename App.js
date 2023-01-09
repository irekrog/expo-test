import { Text, View } from 'react-native';
import { Provider as PaperProvider, Menu, Button, Divider } from 'react-native-paper';
import React from 'react';

export default function App() {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <PaperProvider>
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MENU</Text>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </View>
        </PaperProvider>
    );
}
