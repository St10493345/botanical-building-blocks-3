import React, { useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import Accordion from './components/Accordion';
import Tab from './components/Tab';
import CustomModal from './components/Modal';
import Gallery from './components/Gallery';
import MyMap from './components/Map';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const tabs = [
        { title: 'Shop Info', content: <Text>A little about our shop...</Text> },
        { title: 'Products', content: <Text>Check out our amazing products!</Text> },
        { title: 'Gallery', content: <Gallery images={['image1.jpg', 'image2.jpg']} />} // Replace with actual image URLs
    ];

    return (
        <ScrollView>
            <Text style={{ fontSize: 24, textAlign: 'center', margin: 20 }}>Welcome to our Botanical Shop</Text>
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <Accordion title="Shop Details">
                <Text>Our shop sells products made from waste materials...</Text>
            </Accordion>
            <Tab tabs={tabs} />
            <MyMap />
            <Button title="Buy Now" onPress={() => setModalVisible(true)} />
        </ScrollView>
    );
};



import React, { useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import Accordion from './components/Accordion';
import Tab from './components/Tab';
import CustomModal from './components/Modal';
import Gallery from './components/Gallery';
import MyMap from './components/Map';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const tabs = [
        { title: 'Current Projects', content: <Text>Details about current projects...</Text> },
        { title: 'Gallery', content: <Gallery images={['image1.jpg', 'image2.jpg']} />} // Replace with actual image URLs
    ];

    return (
        <ScrollView>
            <Text style={{ fontSize: 24, textAlign: 'center', margin: 20 }}>Our Organization's Projects</Text>
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <Accordion title="Project Details">
                <Text>Project 1: Dreamers Flower Kit for R320.20</Text>
                <Text>Project 2: Buildable Vase Kit for R299.99</Text>
                <Text>Project 3: Habitat Flower Kit for R180.65</Text>
            </Accordion>
            <Tab tabs={tabs} />
            <MyMap />
            <Button title="Show Interest" onPress={() => setModalVisible(true)} />
        </ScrollView>
    );
};
import React, { useState } from 'react';
import Accordion from './Accordion';
import Tabs from './Tabs';
import CustomModal from './Modal';
import Gallery from './Gallery';
import MyMap from './Map';


const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const images = [
        { src: 'image1.jpg', title: 'Image 1' },
        { src: 'image2.jpg', title: 'Image 2' },
        { src: 'image3.jpg', title: 'Image 3' },
    ];

    const tabs = [
        {
            title: 'Overview',
            content: (
                <Accordion title="More About Us">
                    <p>Botanical Building Blocks was founded to promote environmental sustainability...</p>
                </Accordion>
            ),
        },
        {
            title: 'Mission',
            content: <p>To inspire creativity and promote environmental awareness...</p>,
        },
        {
            title: 'Vision',
            content: <p>A greener future where creativity blooms through sustainability...</p>,
        },
    ];

    return (
        <div>
            <h1>Welcome to Botanical Building Blocks</h1>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                content={<p>This is the modal content!</p>}
            />
            <Tabs tabs={tabs} />
            <Gallery images={images} />
            <MyMap />
        </div>
    );
};
import React from 'react';
import AboutPage from './AboutPage';

const App = () => {
    return <AboutPage />;
};










import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.accordionContainer}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <Text style={styles.accordionTitle}>{title}</Text>
            </TouchableOpacity>
            {isOpen && <View>{children}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    accordionContainer: {
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    accordionTitle: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
});

export default Accordion;
Tabs.js
This component implements tabbed navigation.
javascript
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].title);

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab.title} onPress={() => setActiveTab(tab.title)}>
                        <Text style={{ margin: 10, fontWeight: activeTab === tab.title ? 'bold' : 'normal' }}>
                            {tab.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                {tabs.find((tab) => tab.title === activeTab).content}
            </View>
        </View>
    );
};

export default Tabs;
Modal.js
A simple modal component for displaying content.
javascript
import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, Button } from 'react-native';

const CustomModal = ({ isOpen, onRequestClose, content }) => {
    return (
        <Modal isVisible={isOpen}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <Text>Support Us</Text>
                <Text>{content}</Text>
                <Button title="Close" onPress={onRequestClose} />
            </View>
        </Modal>
    );
};

export default CustomModal;
Gallery.js
This component displays a gallery of images with a lightbox effect.
javascript
import React from 'react';
import Lightbox from 'react-native-lightbox-gallery';
import { View } from 'react-native';

const Gallery = ({ images }) => {
    return (
        <View>
            <Lightbox 
                images={images.map((image) => ({ source: { uri: image.src }, title: image.title }))}
            />
        </View>
    );
};

export default Gallery;
Map.js
This component uses the react-native-maps library to create an interactive map.
javascript
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MyMap = () => {
    const region = {
        latitude: -33.918861,
        longitude: 18.4233,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <MapView
            style={styles.map}
            initialRegion={region}
        >
            <Marker coordinate={{ latitude: -33.918861, longitude: 18.4233 }} title="Botanical Building Blocks" />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 400,
        width: '100%',
    },
});

export default MyMap;
Step 4: Create the Donation Page (DonationPage.js)
Combine all the components in your donation page file.
javascript
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Accordion from './Accordion';
import Tabs from './Tabs';
import CustomModal from './Modal';
import Gallery from './Gallery';
import MyMap from './Map';

const DonationPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const images = [
        { src: 'https://example.com/image1.jpg', title: 'Image 1' },
        { src: 'https://example.com/image2.jpg', title: 'Image 2' },
        { src: 'https://example.com/image3.jpg', title: 'Image 3' },
    ];

    const tabs = [
        {
            title: 'Why Donate?',
            content: (
                <Text>Your contributions help us build a better, stronger community through our amazing projects.</Text>
            ),
        },
        {
            title: 'How to Donate',
            content: (
                <Accordion title="Donation Methods">
                    <Text>We accept donations through various methods including PayPal, credit card, and bank transfer.</Text>
                </Accordion>
            ),
        },
    ];

    return (
        <View style={styles.container}>
            <header>
                <Text style={styles.title}>Botanical Building Blocks</Text>
                <Image source={{ uri: '_images/_logo_for_botanical_building_blocks.png' }} style={styles.logo} />
                <Text style={styles.header}>Come and Support Our Mission</Text>
            </header>

            <main>
                <Text style={styles.header}>Your Contribution Matters to Us</Text>
                <Text>Help us build a stronger community through our amazing projects!</Text>
                <Image source={{ uri: '_images/_donation_image.jpg' }} style={styles.donationImage} />
                <Button title="Donate Now" onPress={() => setModalIsOpen(true)} />
                <CustomModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    content="Thank you for your support!"
                />
                <Tabs tabs={tabs} />
                <MyMap />
                <Gallery images={images} />
            </main>

            <footer>
                <Text>Thank you for your support!</Text>
            </footer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    header: {
        fontSize: 20,
        marginVertical: 10,
    },
    donationImage: {
        width: 600,
        height: 400,
        alignSelf: 'center',
    },
});

export default DonationPage

import React from 'react';
import DonationPage from './DonationPage';

const App = () => {
    return <DonationPage />;
};

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Accordion from './Accordion';
import Tabs from './Tabs';
import CustomModal from './Modal';
import Gallery from './Gallery';
import MyMap from './Map';

const DonationPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const images = [
        { src: 'https://example.com/image1.jpg', title: 'Image 1' },
        { src: 'https://example.com/image2.jpg', title: 'Image 2' },
        { src: 'https://example.com/image3.jpg', title: 'Image 3' },
    ];

    const tabs = [
        {
            title: 'Why Donate?',
            content: (
                <Text>Your contributions help us build a better, stronger community through our amazing projects.</Text>
            ),
        },
        {
            title: 'How to Donate',
            content: (
                <Accordion title="Donation Methods">
                    <Text>We accept donations through various methods including PayPal, credit card, and bank transfer.</Text>
                </Accordion>
            ),
        },
    ];

    return (
        <View style={styles.container}>
            <header>
                <Text style={styles.title}>Botanical Building Blocks</Text>
                <Image source={{ uri: '_images/_logo_for_botanical_building_blocks.png' }} style={styles.logo} />
                <Text style={styles.header}>Come and Support Our Mission</Text>
            </header>

            <main>
                <Text style={styles.header}>Your Contribution Matters to Us</Text>
                <Text>Help us build a stronger community through our amazing projects!</Text>
                <Image source={{ uri: '_images/_donation_image.jpg' }} style={styles.donationImage} />
                <Button title="Donate Now" onPress={() => setModalIsOpen(true)} />
                <CustomModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    content="Thank you for your support!"
                />
                <Tabs tabs={tabs} />
                <MyMap />
                <Gallery images={images} />
            </main>

            <footer>
                <Text>Thank you for your support!</Text>
            </footer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    header: {
        fontSize: 20,
        marginVertical: 10,
    },
    donationImage: {
        width: 600,
        height: 400,
        alignSelf: 'center',
    },
});
import React from 'react';
import DonationPage from './DonationPage';

const App = () => {
    return <DonationPage />;
};

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Accordion from './Accordion';
import Tabs from './Tabs';
import CustomModal from './Modal';
import Gallery from './Gallery';
import MyMap from './Map';

const ContactPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const images = [
        { src: 'https://example.com/image1.jpg', title: 'Image 1' },
        { src: 'https://example.com/image2.jpg', title: 'Image 2' },
        { src: 'https://example.com/image3.jpg', title: 'Image 3' },
    ];

    const tabs = [
        {
            title: 'Contact Information',
            content: (
                <View>
                    <Text><strong>Physical Address:</strong> 24 Botanical Road, Cape Town</Text>
                    <Text><strong>Email Address:</strong> <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('mailto:info@BotanicalBuildingBlocks.co.za')}>info@BotanicalBuildingBlocks.co.za</Text></Text>
                    <Text><strong>Contact Number:</strong> <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('tel:+1084582490')}>+1084582490</Text></Text>
                </View>
            ),
        },
        {
            title: 'Operational Hours',
            content: (
                <View>
                    <Text><strong>Mondays:</strong> 8 am - 5 pm</Text>
                    <Text><strong>Tuesdays:</strong> 8 am - 5 pm</Text>
                    <Text><strong>Wednesdays:</strong> 8 am - 5 pm</Text>
                    <Text><strong>Thursdays:</strong> 8 am - 5 pm</Text>
                    <Text><strong>Fridays:</strong> 8 am - 5 pm</Text>
                </View>
            ),
        },
    ];

    return (
        <View style={styles.container}>
            <header>
                <Text style={styles.title}>Botanical Building Blocks</Text>
                <Image source={{ uri: '_images/_logo_for_botanical_building_blocks.png' }} style={styles.logo} />
                <Text style={styles.header}>Contact Us</Text>
            </header>

            <main>
                <Text style={styles.header}>Feel free to contact us if you need assistance.</Text>
                <Image source={{ uri: '_images/_contact_us_image.webp' }} style={styles.contactImage} />
                <Tabs tabs={tabs} />
                <Button title="More Contact Options" onPress={() => setModalIsOpen(true)} />
                <CustomModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    content="We appreciate your interest! Feel free to reach out with any queries."
                />
                <MyMap />
                <Gallery images={images} />
            </main>

            <footer>
                <Text>Thank you for your support!</Text>
            </footer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    header: {
        fontSize: 20,
        marginVertical: 10,
    },
    contactImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
});

import React from 'react';
import ContactPage from './ContactPage';

const App = () => {
    return <ContactPage />;
};




